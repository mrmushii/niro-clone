# Miro Clone Setup Guide

## The Problem
You're seeing authentication errors because Convex and Clerk aren't properly configured yet. Follow these steps to fix it.

## Step-by-Step Setup

### 1. Create `.env.local` File
Create a new file called `.env.local` in the project root with these variables:

```bash
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Liveblocks
LIVEBLOCKS_SECRET_KEY=
```

### 2. Set Up Convex (Backend Database)

1. **Sign up for Convex**: Go to https://convex.dev and create an account
2. **Install Convex CLI** (if not already installed):
   ```bash
   npm install -g convex
   ```
3. **Initialize Convex**:
   ```bash
   npx convex dev
   ```
   This will:
   - Create a new Convex project (or link to existing one)
   - Generate your `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`
   - Automatically sync your database schema and auth config
   - Start watching for changes

4. **Copy the environment variables** shown in the terminal to your `.env.local` file

### 3. Set Up Clerk (Authentication)

1. **Sign up for Clerk**: Go to https://clerk.com and create an account
2. **Create a new application**:
   - Click "Add application"
   - Choose a name (e.g., "Miro Clone")
   - Select authentication methods (Email, Google, etc.)
3. **Get your API keys**:
   - In the Clerk Dashboard, go to "API Keys"
   - Copy the following to your `.env.local`:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_test_...`)
     - `CLERK_SECRET_KEY` (starts with `sk_test_...`)

4. **Configure Clerk with Convex**:
   - In Clerk Dashboard, go to "JWT Templates"
   - Create a new template named "convex"
   - In the template, set:
     ```json
     {
       "aud": "convex"
     }
     ```
   - This ensures the JWT tokens work with your Convex auth config

### 4. Set Up Liveblocks (Real-time Collaboration)

1. **Sign up for Liveblocks**: Go to https://liveblocks.io and create an account
2. **Create a new project**:
   - Click "Create Project"
   - Choose a name (e.g., "Miro Clone")
3. **Get your secret key**:
   - In the project dashboard, go to "API Keys"
   - Copy the `Secret Key` to your `.env.local` as `LIVEBLOCKS_SECRET_KEY`

### 5. Restart Everything

1. **Stop all running processes** (Ctrl+C)
2. **Clear the build cache**:
   ```bash
   Remove-Item -Recurse -Force .next
   ```
3. **Make sure Convex is running**:
   ```bash
   npx convex dev
   ```
   Keep this terminal open!
4. **In a new terminal, start Next.js**:
   ```bash
   npm run dev
   ```

### 6. Test the Application

1. Open http://localhost:3000
2. You should be redirected to Clerk's sign-in page
3. Sign up or sign in
4. You'll be redirected to the dashboard

## Your Current Auth Configuration

The `convex/auth.config.js` file is already configured for:
- Domain: `https://regular-humpback-73.clerk.accounts.dev`
- Application ID: `convex`

Make sure your Clerk JWT template matches this configuration!

## Troubleshooting

### "Failed to authenticate" error
- Make sure `npx convex dev` is running
- Check that your Clerk JWT template has `"aud": "convex"`
- Verify all environment variables are set in `.env.local`
- Restart both `npx convex dev` and `npm run dev`

### "ChunkLoadError" or loading issues
- Delete the `.next` folder and restart the dev server
- Clear browser cache

### Still stuck?
- Check all environment variables are correctly copied (no extra spaces)
- Make sure `.env.local` is in the project root
- Try signing out and signing in again in Clerk

## Quick Reference: Environment Variables

| Variable | Where to Find | Format |
|----------|--------------|--------|
| `NEXT_PUBLIC_CONVEX_URL` | Convex dashboard / `npx convex dev` output | `https://xxx.convex.cloud` |
| `CONVEX_DEPLOYMENT` | Convex dashboard / `npx convex dev` output | `dev:xxx` or `prod:xxx` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk Dashboard → API Keys | `pk_test_...` |
| `CLERK_SECRET_KEY` | Clerk Dashboard → API Keys | `sk_test_...` |
| `LIVEBLOCKS_SECRET_KEY` | Liveblocks Dashboard → API Keys | `sk_...` |

