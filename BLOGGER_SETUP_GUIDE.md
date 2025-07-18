# Complete Blogger Integration Setup Guide

## Step 1: Get Your Blog ID

### Method 1: From URL
1. Go to [blogger.com](https://blogger.com)
2. Sign in with your Google account
3. Select your blog
4. Look at the URL: `https://www.blogger.com/blog/posts/1234567890123456789`
5. Copy the long number (that's your Blog ID)

### Method 2: From Settings
1. In Blogger dashboard, go to Settings → Basic
2. Your Blog ID will be displayed there

## Step 2: Create Google API Key

### Create Google Cloud Project
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with ANY Google account (doesn't need to match your Blogger account)
3. Click project dropdown → "New Project"
4. Name it (e.g., "My Deals Website")
5. Click "Create"

### Enable Blogger API
1. Go to "APIs & Services" → "Library"
2. Search "Blogger API v3"
3. Click it and press "Enable"

### Create API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the generated API key
4. Click "Restrict Key" (recommended for security)

### Secure Your API Key (Important!)
1. Under "API restrictions":
   - Select "Restrict key"
   - Check "Blogger API v3"
2. Under "Website restrictions":
   - Add your domain (e.g., `yourdomain.com/*`)
3. Click "Save"

## Step 3: Update Your Code

1. Open `src/components/BlogSection.tsx`
2. Find these lines:
   ```javascript
   const BLOG_ID = 'YOUR_BLOG_ID_HERE';
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace with your actual values:
   ```javascript
   const BLOG_ID = '1234567890123456789'; // Your actual Blog ID
   const API_KEY = 'AIzaSyC...'; // Your actual API Key
   ```

## Step 4: Test the Integration

1. Save the file
2. Your website will automatically reload
3. The blog section should now show your actual blog posts
4. If you see errors, check the browser console for details

## Troubleshooting

### Common Issues:

**"Failed to load blog posts"**
- Check if your Blog ID is correct
- Verify your API key is valid
- Make sure Blogger API v3 is enabled

**"Access blocked"**
- Your API key might be restricted
- Add your domain to the API key restrictions
- Or temporarily remove restrictions for testing

**"Blog not found"**
- Double-check your Blog ID
- Make sure your blog is public (not private)

**CORS errors**
- This is normal in development
- The integration will work properly when deployed

### Testing Tips:
1. Start with unrestricted API key for testing
2. Add restrictions once everything works
3. Check your blog privacy settings
4. Verify the blog has published posts

## Security Best Practices

1. **Always restrict your API key** to specific APIs and domains
2. **Never commit API keys** to public repositories
3. **Use environment variables** for production deployments
4. **Monitor API usage** in Google Cloud Console
5. **Regenerate keys** if compromised

## Next Steps

Once integrated, you can:
- Customize the blog post display
- Add pagination for more posts
- Implement search functionality
- Add post categories filtering
- Style the blog posts to match your design

Your blog posts will automatically update on your website whenever you publish new content on Blogger!