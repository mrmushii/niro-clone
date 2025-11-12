# Important: Clerk JWT Template Configuration

## Critical Step for Authentication to Work

You **MUST** configure a JWT template in Clerk for the authentication to work with Convex.

## Steps to Configure Clerk JWT Template

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com
2. **Select your application**: "sweeping-toucan-81"
3. **Navigate to**: JWT Templates (in the left sidebar under "Configure")
4. **Click**: "New template"
5. **Template Name**: `convex` (must be exactly this name)
6. **Click**: "Create"
7. **In the Claims section**, make sure it includes:
   ```json
   {
     "aud": "convex"
   }
   ```
8. **Click**: "Apply Changes" or "Save"

## Why This Is Important

Your `convex/auth.config.js` is configured with:
- **Domain**: `https://sweeping-toucan-81.clerk.accounts.dev`
- **Application ID**: `convex`

The JWT template ensures that tokens issued by Clerk have the correct `audience` claim (`aud: "convex"`) that matches your Convex auth configuration.

## Verification

After setting up the JWT template:
1. Stop your development server (Ctrl+C)
2. Make sure `npx convex dev` is running in one terminal
3. Start `npm run dev` in another terminal
4. Try to access http://localhost:3000
5. Sign in with Clerk
6. You should be able to access the dashboard without authentication errors

## If You Still Get Errors

If you see "Failed to authenticate" errors:
1. Double-check the JWT template name is exactly `convex`
2. Verify the `aud` claim is set to `convex`
3. Sign out and sign in again in your browser
4. Clear browser cache/cookies
5. Restart both `npx convex dev` and `npm run dev`

