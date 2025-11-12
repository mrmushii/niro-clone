# 🔍 Debug: Infinite Loading on Board Page

## Problem
Board page shows infinite loading spinner - Liveblocks Room can't authenticate.

## Root Cause
Clerk JWT template for Liveblocks is not configured in Clerk Dashboard.

## 🔧 SOLUTION - Configure Clerk JWT for Liveblocks

### **Step 1: Go to Clerk Dashboard**
1. Open: https://dashboard.clerk.com
2. Select your project: "sweeping-toucan-81"

### **Step 2: Configure JWT Template**
1. In left sidebar, click **"JWT Templates"**
2. Click **"+ New template"**
3. Select **"Liveblocks"** from the list
4. Name it: `liveblocks`
5. Click **"Apply changes"**

### **Step 3: Get the Issuer URL**
After creating the template, you'll see an Issuer URL like:
```
https://sweeping-toucan-81.clerk.accounts.dev
```

This is already in your `.env.local` as `CLERK_JWT_ISSUER_DOMAIN` ✓

### **Step 4: Restart Your Servers**

**Stop both servers** (Ctrl+C in each terminal):
- Convex dev server
- Next.js dev server

**Then restart both:**

Terminal 1:
```bash
cd niro-clone
npx convex dev
```

Terminal 2:
```bash
cd niro-clone
npm run dev
```

### **Step 5: Test Again**
1. Open http://localhost:3000
2. Click on a board
3. **It should now load!** 🎉

---

## ⚠️ If Still Not Working

### Check Browser Console (F12)

Look for these specific errors:

#### Error: "Failed to fetch /api/liveblocks-auth"
**Fix**: The auth endpoint might be failing. Check terminal logs.

#### Error: "401 Unauthorized"
**Fix**: Clerk JWT template not configured correctly.

#### Error: "Network Error"
**Fix**: Make sure both Convex and Next.js servers are running.

---

## 🧪 Test the Auth Endpoint Manually

In a new terminal:
```bash
# This should return a token or error message
curl -X POST http://localhost:3000/api/liveblocks-auth ^
  -H "Content-Type: application/json" ^
  -d "{\"room\":\"test-room\"}"
```

**Expected**: JSON with authentication token  
**Error**: Shows what's failing

---

## 🔍 Alternative: Use Liveblocks Public API (Quick Test)

If you want to test without Clerk JWT setup, temporarily change the Liveblocks config:

**File**: `liveblocks.config.ts`

Change from:
```typescript
const client = createClient({
    authEndpoint: "/api/liveblocks-auth",
    throttle: 16,
});
```

To:
```typescript
const client = createClient({
    publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
    throttle: 16,
});
```

⚠️ **Note**: This is for testing only. In production, always use authEndpoint with proper authentication.

---

## ✅ Verification

After fixing, you should see:
1. Board page loads quickly (1-2 seconds)
2. Canvas appears with toolbar
3. Drawing tools work
4. No errors in browser console
5. Your cursor appears on the canvas

---

## 📋 Quick Checklist

- [ ] Clerk JWT template created for Liveblocks
- [ ] Both servers restarted
- [ ] Browser console shows no errors
- [ ] Board page loads and shows canvas
- [ ] Can draw on canvas

---

## 🆘 Still Stuck?

Share the **browser console errors** (F12 → Console tab) and I can help further!

