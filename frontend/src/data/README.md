# Content Data Management

All website content is stored in `frontend/src/data/content.json`. This file can be easily edited to update the website content.

## File Structure

The `content.json` file contains the following sections:

- **magazines**: Portfolio items (future magazine articles)
- **teamMembers**: Team member profiles
- **services**: Service offerings
- **articles**: Blog articles
- **consultationTypes**: Consultation type options for the contact form

## Editing the Data

### Option 1: Direct JSON Editing

Simply edit `frontend/src/data/content.json` with any text editor. Make sure to:

- Maintain valid JSON syntax (use commas correctly, quote strings)
- Keep the same structure for each item
- Use double quotes for strings

### Option 2: Google Sheets (Recommended)

1. Copy the JSON content
2. Use an online JSON to CSV converter (e.g., https://www.convertcsv.com/json-to-csv.htm)
3. Import the CSV into Google Sheets
4. Edit the data in Google Sheets
5. Export back to CSV
6. Convert CSV back to JSON using the same tool
7. Replace the content in `content.json`

### Option 3: Online JSON Editors

Use online JSON editors like:

- https://jsoneditoronline.org/
- https://jsonformatter.org/json-editor

## Data Format Examples

### Magazine Entry

```json
{
  "id": "1",
  "title": "Magazine Title",
  "year": "2035",
  "description": "Brief description",
  "cover_image": "https://example.com/image.jpg",
  "industries": ["Industry 1", "Industry 2"],
  "preview": "Preview text...",
  "pdf_url": "https://example.com/file.pdf"
}
```

### Team Member Entry

```json
{
  "id": "1",
  "name": "Full Name",
  "role": "Job Title",
  "bio": "Biography text...",
  "background": "Background text...",
  "expertise": ["Skill 1", "Skill 2"],
  "photo_url": "https://example.com/photo.jpg",
  "linkedin": "https://linkedin.com/in/username",
  "email": "email@example.com"
}
```

### Service Entry

```json
{
  "id": "1",
  "title": "Service Name",
  "description": "Service description...",
  "features": ["Feature 1", "Feature 2"],
  "timeframe": "8-12 weeks",
  "ideal_for": "Target audience description"
}
```

### Article Entry

```json
{
  "id": "1",
  "title": "Article Title",
  "excerpt": "Article excerpt...",
  "date": "2025-01-08",
  "readTime": "8 min read",
  "category": "Category Name",
  "image": "https://example.com/image.jpg"
}
```

## Notes

- Arrays (like `industries`, `expertise`, `features`) should be comma-separated strings in JSON arrays
- Image URLs should be full URLs (starting with `http://` or `https://`)
- Dates should be in YYYY-MM-DD format
- After editing, restart the development server to see changes

