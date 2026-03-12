# Almighty1 Music Demo Submission Portal Requirements Document

## 1. Application Overview

### 1.1 Application Name
Almighty1 Music Demo Submission Portal

### 1.2 Application Description
A two-page website for music demo submission. The home page features a watercolor art style with minimalist design, while the submission page includes a form with animated root-drawing transition effect. The site uses EmailJS for form submission handling.

## 2. Core Features

### 2.1 Home Page
- Display site title: Almighty1 Music
- Display collaboration text below title: In collaboration with Soundwave Music Group
- Feature a Submit Your Demo button (text only, no logo)
- Apply watercolor-style artistic background with leaf elements
- Add green visual effects and additional artistic elements throughout the page
- Include animations to enhance visual engagement
- Single page layout with no scrolling functionality
- Button navigates to the demo submission form page

### 2.2 Page Transition Animation
- When Submit Your Demo button is clicked, trigger animation before navigating to form page
- Animation: roots being drawn over the white background
- No hand imagery in the animation
- Animation plays before form page appears

### 2.3 Demo Submission Form Page
- Form fields:
  1. Link to your track (input field)
  2. Track name (input field)
  3. Artist Name (input field)
  4. Collaborators (input field with note: If more than one, separate with commas)
  5. Anything more you want to let us know (textarea)
- Submit button to send form data
- Form submission handled via EmailJS
- Include green effects and animations on the form page

### 2.4 Email Integration
- Use EmailJS.com service for email delivery
- Each form submission sends an email notification
- Email contains all form field data

### 2.5 EmailJS Configuration
- Service ID: service_q7lttu4
- Template ID: template_wicz5hg
- Public Key: zPBL_Srmyqhysp7eA
- These configuration values should be used for email submission functionality

## 3. Design Requirements

### 3.1 Color Scheme
- Primary color: White (main background and dominant color)
- Secondary color: Green (background watercolor leaf drawings, text accents, root animation, and additional visual effects)
- Accent color: Black (primary text and minor decorative details)

### 3.2 Visual Style
- Watercolor art style for background elements
- Leaf motifs rendered in green watercolor over white background
- Additional green artistic elements and effects throughout the site
- Animations to create dynamic visual interest
- Square-shaped design elements with minimal border radius
- Clean, minimalist layout emphasizing white space
- Non-scrollable single page design for home page
- Root-drawing animation in green watercolor style

### 3.3 Typography
- Primary text in black
- Selected text elements may use green for emphasis
- Submit Your Demo button displays text only, no logo

## 4. EmailJS Configuration Instructions

To enable email notifications for form submissions:

1. Create an account at EmailJS.com
2. Set up an email service (e.g., Gmail, Outlook)
3. Create an email template with placeholders for form fields:
   - Track Link
   - Track Name
   - Artist Name
   - Collaborators
   - Additional Notes
4. Use the following EmailJS credentials:
   - Service ID: service_q7lttu4
   - Template ID: template_wicz5hg
   - Public Key: zPBL_Srmyqhysp7eA
5. Specify your recipient email address in the EmailJS template settings

The application will use these credentials for form submission functionality.