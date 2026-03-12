# EmailJS Setup Guide for Almighty1 Music Demo Submission

This guide will help you configure EmailJS to receive demo submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Navigate to [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - Or any other supported service
5. Follow the connection instructions for your chosen service
6. Give your service a name (e.g., "Almighty1 Demo Service")
7. **Important:** Copy the **Service ID** (e.g., `service_abc123`) - you'll need this later
8. Click "Create Service"

## Step 3: Create an Email Template

1. Go to [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)
2. Click "Create New Template"
3. Give your template a name (e.g., "Demo Submission Template")
4. **Important:** Copy the **Template ID** (e.g., `template_xyz789`) - you'll need this later

### Template Configuration:

**Subject Line:**
```
New Demo Submission: {{track_name}} by {{artist_name}}
```

**Content (Email Body):**
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

**Email Settings:**
- **To Email:** Enter YOUR email address where you want to receive submissions
- **From Name:** `Almighty1 Music Portal`
- **From Email:** Leave as default or configure
- **Reply To:** Leave empty or use `{{reply_to}}` if you add that field

4. Click "Save"

## Step 4: Get Your Public Key

1. Go to [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
2. Find the "API Keys" section
3. **Copy your Public Key** (it looks like: `abc123XYZ456def789`)

## Step 5: Configure Your Application

You now have three important values:
1. **Public Key** (from Step 4)
2. **Service ID** (from Step 2)
3. **Template ID** (from Step 3)

### Where to Enter These Values:

When you run your application, you'll be prompted to enter these three values in the configuration panel. Enter them exactly as they appear in your EmailJS dashboard:

- **VITE_EMAILJS_PUBLIC_KEY:** Your Public Key
- **VITE_EMAILJS_SERVICE_ID:** Your Service ID
- **VITE_EMAILJS_TEMPLATE_ID:** Your Template ID

## Step 6: Test Your Setup

1. After configuring the keys, visit your website
2. Click "Submit Your Demo"
3. Fill out the form with test data
4. Click "Submit Your Demo" button
5. Check your email inbox (the one you configured in Step 3)
6. You should receive an email with the demo submission details!

## Troubleshooting

### Not Receiving Emails?

1. **Check Spam Folder:** EmailJS emails sometimes go to spam initially
2. **Verify Service Connection:** Go to Email Services and ensure your service is connected
3. **Check Template Settings:** Make sure "To Email" is set to your correct email address
4. **Verify Keys:** Double-check that all three keys are entered correctly
5. **Check EmailJS Dashboard:** Go to "History" tab to see if emails were sent successfully

### Form Not Submitting?

1. Open browser console (F12) and check for errors
2. Verify all three environment variables are set correctly
3. Make sure you're connected to the internet
4. Check that form field names match template variables

### Rate Limits

- EmailJS free tier allows **200 emails per month**
- Rate limit: **1 request per second**
- For higher volume, consider upgrading to a paid plan

## Template Variables Reference

The form sends these variables to your email template:

| Form Field | Template Variable | Description |
|------------|------------------|-------------|
| Track Link | `{{track_link}}` | URL to the track |
| Track Name | `{{track_name}}` | Name of the track |
| Artist Name | `{{artist_name}}` | Name of the artist |
| Collaborators | `{{collaborators}}` | Comma-separated list of collaborators |
| Additional Notes | `{{additional_notes}}` | Any additional information |

## Security Notes

- Your **Public Key is safe** to expose in client-side code
- Never share your **Private Key** (not used in this setup)
- EmailJS handles all email sending securely
- No backend server required!

## Support

If you need help:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**That's it!** You're now ready to receive demo submissions via email. Every time someone submits a demo through your website, you'll receive a formatted email with all the details.
