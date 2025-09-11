# Polymathic Futures - API Contracts & Integration Plan

## Frontend-Backend Integration Overview

### Current Mock Data Implementation
- Contact form submissions (currently showing success message locally)
- Portfolio magazine previews (static mock data)
- Team member information (static mock data)
- Services information (static mock data)

### Backend API Endpoints to Implement

#### 1. Contact/Inquiry Management
**POST /api/inquiries**
- Purpose: Handle consultation requests and partnership inquiries
- Request Body:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "company": "string (optional)",
  "inquiry_type": "consultation | partnership",
  "consultation_type": "string (optional, required if inquiry_type=consultation)",
  "message": "string (optional)"
}
```
- Response:
```json
{
  "id": "string",
  "status": "received",
  "message": "Thank you! We'll be in touch within 24 hours."
}
```

**GET /api/inquiries**
- Purpose: Admin view of all inquiries
- Response: Array of inquiry objects with timestamps

#### 2. Portfolio Management
**GET /api/magazines**
- Purpose: Fetch all future magazines for portfolio
- Response: Array of magazine objects with cover images, descriptions, industries

**GET /api/magazines/:id**
- Purpose: Get detailed magazine preview
- Response: Detailed magazine object with full preview content

#### 3. Team Management
**GET /api/team**
- Purpose: Fetch team member profiles
- Response: Array of team member objects

#### 4. Services Information
**GET /api/services**
- Purpose: Fetch services data
- Response: Array of service objects

### Database Schema

#### Collections:
1. **inquiries**
   - id: ObjectId
   - name: String
   - email: String
   - company: String
   - inquiry_type: String (consultation/partnership)
   - consultation_type: String
   - message: String
   - status: String (received/contacted/closed)
   - created_at: Date
   - updated_at: Date

2. **magazines** (initially seeded with mock data)
   - id: ObjectId
   - title: String
   - year: String
   - description: String
   - cover_image: String
   - industries: Array[String]
   - preview: String
   - created_at: Date

3. **team_members** (initially seeded with mock data)
   - id: ObjectId
   - name: String
   - role: String
   - background: String
   - expertise: Array[String]
   - image: String
   - linkedin: String
   - email: String

4. **services** (initially seeded with mock data)
   - id: ObjectId
   - title: String
   - description: String
   - features: Array[String]
   - timeframe: String
   - ideal_for: String

### Frontend Integration Changes Required

#### ContactSection.jsx
- Replace mock form submission with actual API call to POST /api/inquiries
- Handle loading states and error responses
- Remove mock success message simulation

#### PortfolioSection.jsx
- Replace mockMagazines import with API call to GET /api/magazines
- Update magazine preview modal to fetch detailed data if needed

#### TeamSection.jsx
- Replace mockTeamMembers import with API call to GET /api/team

#### ServicesSection.jsx
- Replace mockServices import with API call to GET /api/services

### Implementation Priority
1. **Contact form functionality** (highest priority - main CTA)
2. **Database seeding** with current mock data
3. **Portfolio API endpoints**
4. **Team and Services API endpoints**
5. **Admin panel** for managing inquiries (future enhancement)

### Error Handling
- Proper validation on all API endpoints
- User-friendly error messages on frontend
- Graceful fallbacks if API calls fail

### Security Considerations
- Input validation and sanitization
- Rate limiting on contact form submissions
- Email validation
- Basic spam protection

This contracts file will guide the seamless integration between our current frontend implementation and the new backend functionality.