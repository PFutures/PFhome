from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
from enum import Enum


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Enums
class InquiryType(str, Enum):
    consultation = "consultation"
    partnership = "partnership"

class InquiryStatus(str, Enum):
    received = "received"
    contacted = "contacted"
    closed = "closed"


# Define Models
class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    inquiry_type: InquiryType
    consultation_type: Optional[str] = None
    message: Optional[str] = ""

class Inquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    inquiry_type: str
    consultation_type: Optional[str] = None
    message: Optional[str] = ""
    status: str = Field(default="received")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class Magazine(BaseModel):
    id: str
    title: str
    year: str
    description: str
    cover_image: str
    industries: List[str]
    preview: str

class TeamMember(BaseModel):
    id: str
    name: str
    role: str
    background: str
    expertise: List[str]
    image: str
    linkedin: Optional[str] = None
    email: Optional[str] = None

class Service(BaseModel):
    id: str
    title: str
    description: str
    features: List[str]
    timeframe: str
    ideal_for: str

# Legacy models for backward compatibility
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Polymathic Futures API - Ready to shape the future"}

# Legacy status endpoints
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# New Polymathic Futures API Endpoints

# Inquiry Management
@api_router.post("/inquiries")
async def create_inquiry(inquiry: InquiryCreate):
    try:
        # Validate consultation type if inquiry type is consultation
        if inquiry.inquiry_type == InquiryType.consultation and not inquiry.consultation_type:
            raise HTTPException(status_code=400, detail="Consultation type is required for consultation inquiries")
        
        # Create inquiry object
        inquiry_data = inquiry.dict()
        inquiry_obj = Inquiry(**inquiry_data)
        
        # Insert into database
        result = await db.inquiries.insert_one(inquiry_obj.dict())
        
        # Return success response
        return JSONResponse(
            status_code=201,
            content={
                "id": inquiry_obj.id,
                "status": "received",
                "message": "Thank you! We'll be in touch within 24 hours."
            }
        )
    except Exception as e:
        logger.error(f"Error creating inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries():
    try:
        inquiries = await db.inquiries.find().sort("created_at", -1).to_list(1000)
        return [Inquiry(**inquiry) for inquiry in inquiries]
    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Portfolio Management
@api_router.get("/magazines", response_model=List[Magazine])
async def get_magazines():
    try:
        magazines = await db.magazines.find().to_list(1000)
        return [Magazine(**magazine) for magazine in magazines]
    except Exception as e:
        logger.error(f"Error fetching magazines: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/magazines/{magazine_id}", response_model=Magazine)
async def get_magazine(magazine_id: str):
    try:
        magazine = await db.magazines.find_one({"id": magazine_id})
        if not magazine:
            raise HTTPException(status_code=404, detail="Magazine not found")
        return Magazine(**magazine)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching magazine {magazine_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Team Management
@api_router.get("/team", response_model=List[TeamMember])
async def get_team():
    try:
        team_members = await db.team_members.find().to_list(1000)
        return [TeamMember(**member) for member in team_members]
    except Exception as e:
        logger.error(f"Error fetching team members: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Services Management
@api_router.get("/services", response_model=List[Service])
async def get_services():
    try:
        services = await db.services.find().to_list(1000)
        return [Service(**service) for service in services]
    except Exception as e:
        logger.error(f"Error fetching services: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
