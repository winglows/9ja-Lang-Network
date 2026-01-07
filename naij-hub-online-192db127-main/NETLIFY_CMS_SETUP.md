# Netlify CMS Setup Guide

## Connecting to GitHub

1. **Create a GitHub Repository**
   - Push this project to a GitHub repository
   - Ensure the repository is connected to Netlify

2. **Enable Netlify Identity**
   - Go to your Netlify site dashboard
   - Navigate to Site Settings → Identity
   - Click "Enable Identity"

3. **Configure Git Gateway**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"
   - This allows the CMS to commit changes to your repository

4. **Set Registration Preferences**
   - In Identity settings, configure registration to "Invite only"
   - Invite yourself via email to create an admin account

5. **Access the CMS**
   - Navigate to `yoursite.netlify.app/admin/`
   - Log in with your Netlify Identity credentials
   - Start managing content!

## Content Collections

The CMS is configured with the following collections:

- **Pages**: Home and About page content
- **Blog Posts**: Articles and news
- **Videos**: YouTube video embeds organized by category
- **Events**: Upcoming conferences and workshops
- **Team Members**: Leadership and contributors
- **Resources**: Downloadable materials and links

## Media Uploads

All uploaded media files are stored in `public/uploads/` and can be referenced in the CMS.

## Deployment

When you save content in the CMS:
1. Changes are committed to your GitHub repository
2. Netlify automatically rebuilds your site
3. New content appears on your live site within minutes

For more information, visit [Netlify CMS Documentation](https://www.netlifycms.org/docs/).
