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
        "title": "Singapore 2040",
        "year": "2040",
        "description": "A vision of Singapore's future through science and innovation",
        "cover_image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/shrinfn0_9699c082-7b0a-408d-9849-2648ee928919.webp",
        "industries": ["Urban Planning", "Technology", "Innovation"],
        "preview": "Explore Singapore's transformation into a leading hub of innovation and sustainability by 2040...",
        "pdf_url": "https://customer-assets.emergentagent.com/job_future-magazine/artifacts/ukw8obt1_Singapore%202040%20article.pdf"
    },
    {
        "id": "2",
        "title": "The LEGOfication of the World",
        "year": "2035",
        "description": "How modular design principles are reshaping manufacturing, architecture, and innovation",
        "cover_image": "https://customer-assets.emergentagent.com/job_crossindustry-hub/artifacts/mjch8sxn_ca4f8bf6-4ee0-44ee-940e-0d401645c0e2.png",
        "industries": ["Manufacturing", "Design", "Innovation"],
        "preview": "Discover how LEGO's modular approach is transforming industries from construction to biotechnology...",
        "pdf_url": "https://customer-assets.emergentagent.com/job_future-magazine/artifacts/04p3dqxr_The-LEGOfication-of-the-World%20article.pdf"
    },
    {
        "id": "3",
        "title": "Petabytes of Love",
        "year": "2024", 
        "description": "The fascinating future of jewelry — where jewels become living archives, crystalline companions that listen, remember, and preserve generations of human love in light.",
        "cover_image": "https://customer-assets.emergentagent.com/job_future-vision-6/artifacts/v4ds5j7a_7cabefac-c0dc-4c06-8ba9-893b718bc34e.webp",
        "industries": ["Technology", "Jewelry", "Data Storage"],
        "preview": "The fascinating future of jewelry — where jewels become living archives, crystalline companions that listen, remember, and preserve generations of human love in light.",
        "pdf_url": "https://customer-assets.emergentagent.com/job_future-magazine/artifacts/u67ft7dc_Petabytes-of-Love%20article.pdf"
    }
]

team_members_data = [
    {
        "id": "1",
        "name": "Dr. Philipp Kozin",
        "role": "Scientific Foresight Director", 
        "background": "Philipp Kozin is a scientific foresight visionary who transforms the meeting of breakthrough science and real-world business into new directions for industries to evolve. From horizon-scanning to framing 10- to 15-year technology bets, he curates global partnerships that pull tomorrow's deep-tech disruptions into today's product road-maps. What makes Philipp rare among scientists is his gift of imagination. Rooted in chemistry, he moves fluidly across domains, applying a multidimensional mind beyond convention.",
        "expertise": ["Scientific Foresight", "Chemistry & Materials Science", "Technology Strategy", "Cross-Sector Partnerships", "Deep-Tech Innovation"],
        "photo_url": "https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/5o6z0uxx_WhatsApp%20Image%202025-10-09%20at%2018.44.38.jpeg",
        "linkedin": "https://www.linkedin.com/in/philipp-kozin/",
        "email": "philipp@polymathicfutures.com",
        "description": "His method: blending the precision of a PhD chemist with the strategic lens of an MBA, he pattern-matches signals across natural sciences, economy and geopolitics, cultures and beyond. Powered by a six-country career and a storyteller's eye, he prototypes futures, translates them for executives, and seeds cross-sector alliances that keep companies ahead of the curve.",
        "academic_background": "PhD Chemistry • MBA Strategic Management"
    },
    {
        "id": "2",
        "name": "Aksinya Staar",
        "role": "Polymathic Intelligence Director",
        "background": "Aksinya Staar is the mind behind the polymathic principle that defines Polymathic Futures. She maps how ideas move through people — and how people shift entire systems — transforming complexity into visions that are both imaginative and actionable. With a career spanning Talent & Culture, innovative models of education, governance, and economics, she contributes with Risk Intelligence anticipating ripple effects across industries and societies.",
        "expertise": ["Futures & Foresight", "Linguistics", "Talent & Culture", "Education", "Philosophy", "World and Art History", "Asian Studies", "Psychology", "Web 3 Data Space"],
        "photo_url": "https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/f5sau3vs_two%20bookss.jpeg",
        "linkedin": "https://www.linkedin.com/in/aksinya/",
        "email": "aksinya@polymathicfutures.com",
        "description": "Aksinya serves as the conceptual architect and narrative lead. She sets the intellectual compass of the magazine, blending historical depth with foresight, and ensuring that every story is not only a spark of imagination but also a bridge to scientific grounding and business application. Her method is polymathic in essence: reading across centuries, sensing shifts before they surface, and weaving insights from diverse fields into future scenarios that are provocative, plausible, and actionable.",
        "academic_background": "Linguistics • Pedagogy • Psychology • Talent Strategy",
        "publications": "Author of Why Polymaths?, Future of Work: From Industrial to Polymath Mindset, and the forthcoming Forgotten History and Untold Future of Education"
    },
    {
        "id": "3",
        "name": "Katerina De Pauw",
        "role": "Business Development Director",
        "background": "Katerina De Pauw is a sales talent who builds pathways where markets meet people. With experience in education, trade, and coaching, she reads both the human and commercial dimensions of opportunity — and turns them into lasting relationships and tangible results. Her communication style is her signature: charismatic yet gentle, magnetic yet warm. She creates trust by listening deeply and making others feel seen.",
        "expertise": ["Sales & Business Development", "Marketing Strategy", "Client Partnerships", "Education Management", "International Trade", "Science of Well-Being", "Coaching"],
        "photo_url": "https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/6mottjaq_Katyaa.jfif",
        "linkedin": "https://www.linkedin.com/in/katerina-de-pauw-8178436/",
        "email": "katerina@polymathicfutures.com",
        "description": "As Business Development Director, Katerina brings the magazine's imagination into the world of business — shaping dialogues, opening partnerships, and translating futures thinking into commercial reality. Her cross-domain path embodies the polymathic spirit: moving between education, trade, and well-being, she connects vision with value and ensures innovation finds its audience."
    }
]

services_data = [
    {
        "id": "1",
        "title": "Future Magazine Creation",
        "description": "We craft literal magazines from the future — from 2035, 2040, even 2060 — written as if your company's breakthroughs have already happened.",
        "features": [
            "10–20 sci-fi foresight articles turning your strategy into vivid stories of how your products, people, and impact evolve across the next decades",
            "Cross-pollination ideas — surprising connections between your industry and others you've never imagined collaborating with",
            "Possible & probable futures — scenarios grounded in foresight and science, not fantasy",
            "\"Already Emerging\" section — reporting on current R&D, academic labs, and startups already shaping the seeds of your future",
            "\"More to Explore\" sources list — curated state-of-the-art innovations and research directions for those who want to dive deeper"
        ],
        "timeframe": "8-12 weeks",
        "ideal_for": "Companies seeking breakthrough innovation directions"
    },
    {
        "id": "2",  
        "title": "One-to-One Future Consulting",
        "description": "In a private session with our leading scientific futurists, you'll receive research-backed yet deeply imaginative insights into the future of your industry.",
        "features": [
            "High-intelligence prototype of possibilities, crafted in real time",
            "Live R&D lab for your strategy, where science meets storytelling",
            "Ideas take shape before your eyes through interactive exploration",
            "Foresight, creativity, and evidence blended for breakthrough insights",
            "Personalized guidance on where your next breakthrough could emerge and how to make it real"
        ],
        "timeframe": "2-4 hours", 
        "ideal_for": "Leaders seeking personalized strategic foresight and breakthrough opportunities"
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