# DealsPro - Modern Deals Website

A beautiful, modern deals website built with React and TypeScript, featuring Google Blogger integration for seamless content management.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Google Blogger Integration**: Connect your blog posts seamlessly
- **Deal Management**: Beautiful deal cards with pricing, discounts, and store information
- **Category System**: Organized shopping categories with icons
- **Newsletter Signup**: Email subscription functionality
- **Social Media Integration**: Connect with your audience
- **SEO Optimized**: Built with performance and SEO in mind

## Google Blogger Integration

To connect your Google Blogger account:

1. **Get Your Blog ID**:
   - Go to your Blogger dashboard
   - Select your blog
   - The Blog ID is in the URL: `https://www.blogger.com/blog/posts/[BLOG_ID]`

2. **Get Google API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the Blogger API v3
   - Create credentials (API key)
   - Restrict the API key to Blogger API

3. **Update the BlogSection Component**:
   ```typescript
   // In src/components/BlogSection.tsx
   const BLOG_ID = 'YOUR_BLOG_ID';
   const API_KEY = 'YOUR_GOOGLE_API_KEY';
   
   const fetchBlogPosts = async () => {
     const response = await fetch(
       `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
     );
     const data = await response.json();
     setBlogPosts(data.items || []);
   };
   ```

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

### Colors and Branding
- Update the color scheme in `tailwind.config.js`
- Modify the logo and brand name in `Header.tsx`
- Customize the gradient colors throughout the components

### Content
- Update deal data in `DealsGrid.tsx`
- Modify categories in `Categories.tsx`
- Customize the hero section content in `Hero.tsx`

### Blog Integration
- Replace mock data with actual Blogger API calls
- Add pagination for blog posts
- Implement post filtering and search

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and development server

## Performance Features

- Lazy loading for images
- Responsive images with proper sizing
- Minimal bundle size
- Efficient component rendering
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).