# Content Editor Guide

## Accessing the Editor

The content editor is available at: `http://localhost:3000/#/editor` (when running locally)

Or add `/editor` to your deployed site URL: `https://pfutures.github.io/PFhome/#/editor`

### Login Required

⚠️ **The editor is password protected!**

- **Default password** (for local development): `admin123`
- **Production password**: Set via `REACT_APP_EDITOR_PASSWORD` environment variable or GitHub secret
- See [EDITOR_SECURITY.md](./EDITOR_SECURITY.md) for details on setting up passwords

## Features

The editor provides a user-friendly form interface to edit all content in `content.json`:

- **Magazines** - Portfolio items and future magazine articles
- **Team Members** - Team member profiles
- **Services** - Service offerings
- **Articles** - Blog articles
- **Consultation Types** - Consultation type options

## How to Use

1. **Navigate to the editor** at `/#/editor`

2. **Select a tab** (Magazines, Team Members, Services, etc.)

3. **Edit existing items:**

   - All fields are editable directly in the form
   - Arrays (like industries, expertise, features) should be entered as comma-separated values
   - Changes are saved in memory as you type

4. **Add new items:**

   - Click "Add New [Type]" button
   - Fill in the form fields
   - Click "Add Item" to add it to the list

5. **Delete items:**

   - Click the "Delete" button on any item
   - Confirm the deletion

6. **Save your changes:**
   - Click "Save & Download JSON" button at the bottom
   - This will download a `content.json` file
   - Replace `frontend/src/data/content.json` with the downloaded file
   - Restart your development server to see changes

## Field Types

- **Text fields** - Regular input fields
- **Textarea** - Multi-line text (for descriptions, bios, etc.)
- **Arrays** - Enter comma-separated values (e.g., "Science, Technology, Innovation")
- **URLs** - Image URLs, PDF URLs, LinkedIn URLs, etc.
- **Dates** - Date picker for article dates

## Tips

- Arrays like `industries`, `expertise`, and `features` should be entered as comma-separated values
- The editor automatically handles the conversion between comma-separated strings and JSON arrays
- Always test your changes locally before deploying
- Keep a backup of your `content.json` file before making major changes

## Troubleshooting

**Changes not showing up?**

- Make sure you've replaced the `content.json` file in `frontend/src/data/`
- Restart your development server
- Clear browser cache

**Can't edit a field?**

- Check that the field name matches the JSON structure
- Some fields might be read-only (like IDs)

**Downloaded JSON is invalid?**

- Check the browser console for errors
- Make sure all required fields are filled
- Verify array fields are properly formatted
