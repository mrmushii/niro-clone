# Troubleshooting: Board Page Not Opening

## Problem
The board page routes correctly (GET 200) but doesn't render/display.

## Checklist

### 1. ✅ Check Environment Variables

Your `.env.local` file must contain:

```env
# Convex - REQUIRED
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Clerk - REQUIRED  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Liveblocks - REQUIRED
LIVEBLOCKS_SECRET_KEY=sk_...
```

**How to get these:**
- **Convex**: Run `npx convex dev` and copy the URL shown
- **Clerk**: Get from https://dashboard.clerk.com
- **Liveblocks**: Get from https://liveblocks.io/dashboard

### 2. 🔍 Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors like:
   - `Failed to fetch` - Convex not running
   - `401 Unauthorized` - Missing/wrong Liveblocks key
   - `ReferenceError` - Missing environment variable

### 3. 🚀 Start Convex Backend

```bash
cd niro-clone
npx convex dev
```

Should show:
```
✓ Convex functions ready!
  https://your-project.convex.cloud
```

Keep this terminal running while developing.

### 4. 🔄 Restart Development Server

After setting environment variables:

```bash
# Stop current dev server (Ctrl+C)
npm run dev
```

Environment variables are loaded on server start.

### 5. 🌐 Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Navigate to board page
4. Check for failed requests:
   - `/api/liveblocks-auth` - Should return 200
   - Liveblocks WebSocket - Should connect
   - Convex queries - Should succeed

### 6. 📱 Common Error Messages

#### "Failed to connect to Liveblocks"
- Missing or wrong `LIVEBLOCKS_SECRET_KEY`
- Check https://liveblocks.io/dashboard for correct key

#### "Convex query failed"
- `NEXT_PUBLIC_CONVEX_URL` not set
- Convex dev server not running
- Run: `npx convex dev`

#### "Unauthorized" or "401"
- Clerk authentication issue
- Check Clerk keys are correct
- Make sure you're signed in

#### Blank/White Screen
- Check browser console for errors
- Might be stuck in Suspense
- Could be missing data from Convex

### 7. 🧪 Test Liveblocks Auth Endpoint

Test the auth endpoint directly:

```bash
# In a new terminal
curl -X POST http://localhost:3000/api/liveblocks-auth \
  -H "Content-Type: application/json" \
  -d '{"room":"test-room-id"}'
```

Should return a token or error message.

### 8. ✔️ Quick Setup Guide

If starting fresh:

```bash
# 1. Install dependencies
npm install

# 2. Set up Convex
npx convex dev
# Copy the URL shown and add to .env.local as NEXT_PUBLIC_CONVEX_URL

# 3. Set up Clerk
# Go to dashboard.clerk.com
# Copy keys to .env.local

# 4. Set up Liveblocks
# Go to liveblocks.io/dashboard
# Create project, copy secret key to .env.local

# 5. Start dev server
npm run dev
```

## Still Not Working?

### Debug Mode

Add console logs to `app/board/[boardId]/page.tsx`:

```typescript
const BoardIdPage = ({ params }: BoardIdPageProps) => {
    const resolvedParams = use(params);
    console.log('Board ID:', resolvedParams.boardId);
    
    useEffect(() => {
        console.log('Board page mounted');
    }, []);
    
    // ... rest of code
}
```

### Check Liveblocks Status

In `components/room.tsx`, add error boundary:

```typescript
export const Room = ({ children, roomId, fallback }: RoomProps) => {
    console.log('Room initializing:', roomId);
    // ... rest of code
}
```

## Environment Variable Template

Create/update `.env.local`:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Liveblocks
LIVEBLOCKS_SECRET_KEY=
```

## Need Help?

1. Check browser console for specific error messages
2. Verify all three services (Convex, Clerk, Liveblocks) are set up
3. Make sure Convex dev server is running
4. Restart Next.js dev server after adding env variables

