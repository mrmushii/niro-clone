# Quick Start Guide

## ✅ Current Status

- ✅ Environment variables configured (`.env.local`)
- ✅ Middleware updated for Clerk v6
- ✅ Liveblocks auth route fixed
- ✅ Convex auth config updated
- ✅ Build cache cleared

## 🚀 Start the Application

### Option 1: Run the PowerShell Script (Easiest)

```powershell
cd "D:\Study Material\niro\miro-clone-main"
.\start-dev.ps1
```

Then follow the instructions to open two terminals.

### Option 2: Manual Start

**Terminal 1 - Convex Backend:**
```bash
cd "D:\Study Material\niro\miro-clone-main"
npx convex dev
```

**Terminal 2 - Next.js Frontend:**
```bash
cd "D:\Study Material\niro\miro-clone-main"
npm run dev
```

## 🔐 CRITICAL: Clerk JWT Template Setup

Before authentication will work, you **MUST** configure the Clerk JWT template:

1. Go to: https://dashboard.clerk.com
2. Select your application: **sweeping-toucan-81**
3. Navigate to: **JWT Templates** (in sidebar under "Configure")
4. Click: **"New template"**
5. Template name: **`convex`** (exactly this name!)
6. In the Claims editor, ensure it includes:
   ```json
   {
     "aud": "convex"
   }
   ```
7. Click: **"Apply Changes"** or **"Save"**

## 📋 What to Expect

1. **Open** http://localhost:3000
2. **Redirect** to Clerk sign-in page
3. **Sign up/Sign in** with email or social login
4. **Dashboard loads** - you should see your boards!

## 🐛 If You See Errors

### "Cannot find module" errors
- Make sure both terminals are running
- Try: `Remove-Item -Recurse -Force .next` and restart

### "Failed to authenticate" errors
- Check that Clerk JWT template is set up (see above)
- Verify JWT template name is exactly `convex`
- Sign out and sign in again

### Page won't load / stuck on loading
- Verify `npx convex dev` is running
- Check Convex dashboard for deployment status
- Look at the terminal output for errors

## 🔑 Your Configuration

- **Convex Deployment**: `dev:fabulous-oyster-317`
- **Clerk Domain**: `https://sweeping-toucan-81.clerk.accounts.dev`
- **Convex Auth App ID**: `convex`

## 📝 Environment Variables (Already Set)

Your `.env.local` contains:
- ✅ Convex deployment and URL
- ✅ Clerk publishable and secret keys
- ✅ Liveblocks public and secret keys

## ✨ Next Steps After Successful Start

1. Create an organization in Clerk (if prompted)
2. Create your first board
3. Try the real-time collaboration features
4. Invite team members!

---

**Need help?** Check `CLERK_JWT_SETUP.md` for detailed JWT configuration instructions.

