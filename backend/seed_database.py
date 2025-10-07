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
        "cover_image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/shrinfn0_9699c082-7b0a-408d-9849-2648ee928919.webp",
        "industries": ["Manufacturing", "AI", "Supply Chain"],
        "preview": "In this timeline, your breakthrough in quantum-enhanced AI transformed manufacturing from reactive to predictive, creating $2.3B in new revenue streams..."
    },
    {
        "id": "2",
        "title": "BioFutures Medical - 2035 Edition", 
        "year": "2035",
        "description": "Your chocolate-based personalized medicine platform revolutionizes healthcare delivery",
        "cover_image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/mjch8sxn_ca4f8bf6-4ee0-44ee-940e-0d401645c0e2.png",
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
        "name": "Aksinya Staar",
        "role": "Polymathic Intelligence Strategist",
        "background": "Aksinya Staar is the mind behind the polymathic principle that defines Polymathic Futures. She maps how ideas move through people — and how people shift entire systems — transforming complexity into visions that are both imaginative and actionable. With a career spanning Talent & Culture, alternative models of education, governance, and economics, she designs futures that anticipate ripple effects across industries and societies.",
        "expertise": ["Philosophy", "Anthropology", "World and Art History", "Asian Studies", "Alternative Education", "Participative Governance", "Online Marketing", "AI Ethics", "Web3 Data Space"],
        "image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/ig3za7i7_profile%20AS%2024.jpg",
        "email": "aksinya@polymathicfutures.com",
        "description": "Aksinya serves as the conceptual architect and narrative lead. She sets the intellectual compass of the magazine, blending historical depth with foresight, and ensuring that every story is not only a spark of imagination but also a bridge to scientific grounding and business application. Her method is polymathic in essence: reading across centuries, sensing shifts before they surface, and weaving insights from diverse fields into future scenarios that are provocative, plausible, and actionable.",
        "academic_background": "Linguistics • Pedagogy • Psychology • Talent Strategy",
        "publications": "Author of Why Polymaths?, Future of Work: From Industrial to Polymath Mindset, and the forthcoming Forgotten History and Untold Future of Education"
    },
    {
        "id": "2",
        "name": "Dr. Philipp Kozin",
        "role": "Scientific Foresight Director", 
        "background": "Philipp Kozin is a scientific foresight visionary who transforms the meeting of breakthrough science and real-world business into new directions for industries to evolve. From horizon-scanning to framing 10- to 15-year technology bets, he curates global partnerships that pull tomorrow's deep-tech disruptions into today's product road-maps. What makes Philipp rare among scientists is his gift of imagination. Trained in the rigor of chemistry, yet unbound by narrow specialization, he carries a multidimensional mind that ventures beyond convention.",
        "expertise": ["Scientific Foresight", "Chemistry & Materials Science", "Technology Strategy", "Cross-Sector Partnerships", "Deep-Tech Innovation", "Global Business Development"],
        "image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/8rxlnieb_PK.jpg",
        "email": "philipp@polymathicfutures.com",
        "description": "His method: blending the precision of a PhD chemist with the strategic lens of an MBA, he pattern-matches signals across natural sciences, economy and geopolitics, cultures and beyond. Powered by a six-country career and a storyteller's eye, he prototypes futures, translates them for executives, and seeds cross-sector alliances that keep companies ahead of the curve.",
        "academic_background": "PhD Chemistry • MBA Strategic Management"
    },
    {
        "id": "3",
        "name": "Katerina De Pauw",
        "role": "Business Development Director",
        "background": "Katerina De Pauw builds pathways where markets meet people. With experience in education, trade, and coaching, she reads both the human and commercial dimensions of opportunity — and turns them into lasting relationships and tangible results. Her communication style is her signature: charismatic yet gentle, magnetic yet warm. She creates trust by listening deeply and making others feel seen.",
        "expertise": ["Sales & Business Development", "Marketing Strategy", "Client Partnerships", "Education Management", "International Trade", "Science of Well-Being", "Coaching"],
        "image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/ujrbhai0_1597408870352.jfif",
        "linkedin": "https://www.linkedin.com/in/katerina-de-pauw-8178436/",
        "email": "katerina@polymathicfutures.com",
        "description": "As Business Development Director, Katerina brings the magazine's imagination into the world of business — shaping dialogues, opening partnerships, and translating futures thinking into commercial reality. Her cross-domain path embodies the polymathic spirit: moving between education, trade, and well-being, she connects vision with value and ensures innovation finds its audience."
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