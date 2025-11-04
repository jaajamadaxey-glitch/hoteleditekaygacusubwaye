# Vercel Deployment Guide

This guide will help you deploy your Next.js hotel booking website to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free)
2. Your OpenRouter API key from [OpenRouter](https://openrouter.ai/keys)
3. Git repository (GitHub, GitLab, or Bitbucket)

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git provider and repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Environment Variables**
   
   In Vercel dashboard, add these environment variables:
   
   **Required:**
   - `OPENROUTER_API_KEY` = your OpenRouter API key
   
   **Optional:**
   - `NEXT_PUBLIC_SITE_URL` = your deployment URL (e.g., https://yoursite.vercel.app)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (for first deployment)
   - Project name? Press Enter or provide a name
   - Directory? `.` (current directory)

4. **Add Environment Variables**
   ```bash
   vercel env add OPENROUTER_API_KEY
   ```
   Paste your API key when prompted

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Post-Deployment

### Update Environment Variables

If you need to update environment variables after deployment:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add/Edit variables
4. Redeploy for changes to take effect

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Monitor Deployments

- Every push to your main branch will trigger automatic deployments
- Preview deployments are created for pull requests
- View logs in the Vercel Dashboard

## Important Notes

### Security
- ✅ `.env.local` is now properly excluded from Git (updated `.gitignore`)
- ✅ Never commit API keys to your repository
- ✅ Use Vercel's environment variables dashboard for sensitive data

### Build Configuration
- ✅ Framework: Next.js 15
- ✅ Node.js Version: Auto-detected (18.x or higher)
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`

### Features That Work on Vercel
- ✅ API Routes
- ✅ Image Optimization
- ✅ Static & Dynamic Pages
- ✅ Server Components
- ✅ Edge Functions

## Troubleshooting

### Build Fails

**Error: Missing environment variables**
- Solution: Add `OPENROUTER_API_KEY` in Vercel dashboard

**Error: Module not found**
- Solution: Ensure `package.json` includes all dependencies
- Run `npm install` locally to verify

**Error: Build timeout**
- Solution: Check for infinite loops or large data processing
- Optimize build process if needed

### Runtime Issues

**API routes not working**
- Check environment variables are set in Vercel
- Verify API key is valid on OpenRouter

**Images not loading**
- Check `next.config.ts` has proper `remotePatterns` configuration
- Ensure image URLs are accessible

## Performance Optimization

1. **Enable Analytics** (in Vercel Dashboard)
2. **Set up Caching** (already configured)
3. **Monitor Edge Functions** usage
4. **Enable Speed Insights** for performance metrics

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenRouter Documentation](https://openrouter.ai/docs)

## Estimated Costs

- **Vercel Hobby (Free)**
  - Perfect for personal projects
  - 100GB bandwidth/month
  - Unlimited deployments
  
- **Pro Plan ($20/month)**
  - For production sites
  - More bandwidth and features

- **OpenRouter API**
  - Pay per API call
  - GPT-3.5-turbo: ~$0.0015 per request
  - Monitor usage at openrouter.ai

---

## Quick Checklist

Before deploying, ensure:

- [ ] Code is pushed to Git repository
- [ ] `.env.local` is not committed (check with `git status`)
- [ ] You have your OpenRouter API key ready
- [ ] `package.json` has all dependencies
- [ ] Project builds successfully locally (`npm run build`)

After deploying:

- [ ] Environment variables are set in Vercel
- [ ] Test the chatbot functionality
- [ ] Check all pages load correctly
- [ ] Verify API routes work
- [ ] Test booking/contact forms

**Your site is now ready for deployment! 🚀**
