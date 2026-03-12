# EmailJS Template Variables

When setting up your EmailJS template at https://dashboard.emailjs.com/admin/templates, use these exact variable names in your email template:

## Template Variables List

| Variable Name | Description | Form Field |
|--------------|-------------|------------|
| `{{track_link}}` | URL to the submitted track | Link to Your Track |
| `{{track_name}}` | Name of the track | Track Name |
| `{{artist_name}}` | Name of the artist | Artist Name |
| `{{collaborators}}` | Comma-separated list of collaborators | Collaborators |
| `{{additional_notes}}` | Any additional information from the artist | Anything else you'd like us to know? |

## Example Email Template

### Subject Line:
```
New Demo Submission: {{track_name}} by {{artist_name}}
```

### Email Body:
```
You have received a new demo submission!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TRACK DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Track Name: {{track_name}}
Artist Name: {{artist_name}}
Collaborators: {{collaborators}}

Track Link: {{track_link}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADDITIONAL NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{additional_notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted via Almighty1 Music Demo Portal
```

## How to Use These Variables

1. Go to https://dashboard.emailjs.com/admin/templates
2. Create a new template or edit an existing one
3. In the template editor, use the variable names exactly as shown above with double curly braces: `{{variable_name}}`
4. The form field names in the code match these variables, so EmailJS will automatically populate them

## Important Notes

- **Variable names are case-sensitive** - use exactly as shown
- **Always use double curly braces** - `{{variable_name}}`
- **Form field names match template variables** - the HTML form uses `name="track_link"`, `name="track_name"`, etc.
- If a field is empty (like collaborators or additional_notes), it will show as blank in the email

## Template Settings

In your EmailJS template settings, make sure to configure:

- **To Email**: Your email address where you want to receive submissions
- **From Name**: `Almighty1 Music Portal` (or your preferred name)
- **Subject**: Use the subject line example above with variables
- **Content**: Use the email body example above with variables

That's it! When someone submits the form, EmailJS will replace all `{{variable_name}}` placeholders with the actual form data.
