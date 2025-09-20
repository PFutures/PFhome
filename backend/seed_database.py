#!/usr/bin/env python3
"""
Database seeding script for Polymathic Futures
Seeds the database with initial mock data for magazines, team members, and services.
"""

import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Mock data from frontend
magazines_data = [
    {
        "id": "1",
        "title": "TechFlow Quarterly - 2040 Edition",
        "year": "2040",
        "description": "How your company's AI-driven manufacturing revolution reshaped global supply chains",
        "cover_image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
        "industries": ["Manufacturing", "AI", "Supply Chain"],
        "preview": "In this timeline, your breakthrough in quantum-enhanced AI transformed manufacturing from reactive to predictive, creating $2.3B in new revenue streams..."
    },
    {
        "id": "2",
        "title": "BioFutures Medical - 2035 Edition", 
        "year": "2035",
        "description": "Your chocolate-based personalized medicine platform revolutionizes healthcare delivery",
        "cover_image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
        "industries": ["Healthcare", "Food Tech", "Personalized Medicine"],
        "preview": "By 2035, your molecular gastronomy breakthrough enabled precise drug delivery through everyday foods, reaching 50M patients globally..."
    },
    {
        "id": "3",
        "title": "Urban Tomorrow - 2038 Edition",
        "year": "2038", 
        "description": "Self-healing infrastructure materials from your company now rebuilding cities worldwide",
        "cover_image": "https://customer-assets.emergentagent.com/job_future-vision-6/artifacts/v4ds5j7a_7cabefac-c0dc-4c06-8ba9-893b718bc34e.webp",
        "industries": ["Materials Science", "Urban Planning", "Infrastructure"],
        "preview": "Your self-healing concrete technology became the foundation for resilient cities, preventing $500B in infrastructure maintenance costs..."
    }
]

team_members_data = [
    {
        "id": "1",
        "name": "Dr. Elena Vasquez",
        "role": "Chief Polymath",
        "background": "Quantum physicist turned strategic foresight designer",
        "expertise": ["Quantum Computing", "Strategic Foresight", "Cross-Industry Innovation"],
        "image": "https://images.unsplash.com/photo-1494790108755-2616c07e9ad4?w=300&h=300&fit=crop",
        "linkedin": "https://linkedin.com/in/elena-vasquez",
        "email": "elena@polymathicfutures.com"
    },
    {
        "id": "2",
        "name": "Marcus Chen",
        "role": "Narrative Architect", 
        "background": "Former NASA systems engineer, now crafting futures that feel inevitable",
        "expertise": ["Systems Thinking", "Scenario Design", "Technology Integration"],
        "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        "linkedin": "https://linkedin.com/in/marcus-chen",
        "email": "marcus@polymathicfutures.com"
    },
    {
        "id": "3",
        "name": "Dr. Asha Patel",
        "role": "Research Director",
        "background": "Biotechnology pioneer specializing in convergent innovation",
        "expertise": ["Biotechnology", "Cross-Sector Research", "Innovation Strategy"],
        "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
        "linkedin": "https://linkedin.com/in/asha-patel",
        "email": "asha@polymathicfutures.com"
    }
]

services_data = [
    {
        "id": "1",
        "title": "Future Magazine Creation",
        "description": "We create literal magazines from 2035–2040, written as if your company's breakthroughs already happened",
        "features": ["Custom timeline development", "Industry cross-pollination", "Tangible future artifacts", "Strategic roadmapping"],
        "timeframe": "6–8 weeks",
        "ideal_for": "Companies seeking breakthrough innovation directions"
    },
    {
        "id": "2",  
        "title": "Cross-Industry Innovation Mapping",
        "description": "Identify unexpected partnerships and product opportunities across sector boundaries",
        "features": ["Discipline convergence analysis", "Opportunity identification", "Partnership strategy", "Market creation insights"],
        "timeframe": "4–6 weeks", 
        "ideal_for": "Organizations looking beyond traditional industry limits"
    },
    {
        "id": "3",
        "title": "Sci-Fi Prototyping Workshops",
        "description": "Interactive sessions where your team designs products that don't exist yet",
        "features": ["Design fiction methodologies", "Team innovation exercises", "Prototype development", "Future scenario building"],
        "timeframe": "2–3 days",
        "ideal_for": "Teams needing breakthrough thinking sessions"
    }
]

async def seed_database():
    """Seed the database with initial data"""
    
    try:
        print("🌱 Starting database seeding...")
        
        # Clear existing data (optional - for development)
        print("🧹 Clearing existing data...")
        await db.magazines.delete_many({})
        await db.team_members.delete_many({})
        await db.services.delete_many({})
        
        # Seed magazines
        print("📚 Seeding magazines...")
        result = await db.magazines.insert_many(magazines_data)
        print(f"   ✅ Inserted {len(result.inserted_ids)} magazines")
        
        # Seed team members
        print("👥 Seeding team members...")
        result = await db.team_members.insert_many(team_members_data)
        print(f"   ✅ Inserted {len(result.inserted_ids)} team members")
        
        # Seed services
        print("🔧 Seeding services...")
        result = await db.services.insert_many(services_data)
        print(f"   ✅ Inserted {len(result.inserted_ids)} services")
        
        print("🎉 Database seeding completed successfully!")
        
        # Verify data
        print("\n📊 Verification:")
        magazines_count = await db.magazines.count_documents({})
        team_count = await db.team_members.count_documents({})
        services_count = await db.services.count_documents({})
        
        print(f"   📚 Magazines: {magazines_count}")
        print(f"   👥 Team members: {team_count}")
        print(f"   🔧 Services: {services_count}")
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
        raise
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())