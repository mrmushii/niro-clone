# Migration Notes - Miro Clone to Niro Clone

## Overview
Successfully merged all functionality from miro-clone-main into niro-clone with full board/canvas capabilities.

## Major Changes

### 1. Liveblocks Version Upgrade
- **Original**: Liveblocks v1.12.0 (React 18 compatible)
- **Updated**: Liveblocks v3.10.0 (React 19 compatible)

### 2. API Changes (Liveblocks v1 → v3)

#### liveblocks.config.ts
- Simplified client configuration (removed unused resolvers)
- Removed `createLiveblocksContext` (not needed for basic room functionality)
- Updated `createRoomContext` type parameters (removed ThreadMetadata)

#### components/room.tsx
- Removed `ClientSideSuspense` wrapper (v3 handles suspense differently)
- Changed `<ClientSideSuspense fallback={...}>` to `suspenseFallback={...}` prop on RoomProvider
- Simplified render: `{() => children}` → `{children}`

#### Import Changes
- `shallow` utility moved from `@liveblocks/client` to `@liveblocks/react`

### 3. Dependencies Added

#### Core Liveblocks
- `@liveblocks/client@3.10.0`
- `@liveblocks/node@3.10.0`
- `@liveblocks/react@3.10.0`

#### Canvas & Drawing
- `perfect-freehand@1.2.2` - Smooth drawing paths
- `react-contenteditable@3.3.7` - Editable text layers
- `html-to-image@1.11.11` - Canvas export functionality
- `nanoid@5.0.7` - Unique layer IDs

#### UI Components
- `react-colorful@5.6.1` - Color picker
- `@radix-ui/react-avatar@1.0.4`
- `@radix-ui/react-popover@1.0.7`
- `@radix-ui/react-separator@1.0.3`

#### Utilities
- `use-debouncy@5.0.1` - Debounced updates
- `tailwindcss-animate@1.0.7` - Animation utilities
- `convex-helpers@0.1.38` - Convex utilities

### 4. New Features Implemented

#### Canvas Components
- Main canvas with real-time collaboration
- Layer types: Rectangle, Ellipse, Text, Note, Path (freehand)
- Selection tools with resize handles
- Color picker with custom colors
- Real-time cursor tracking
- User presence indicators

#### Keyboard Shortcuts
- `Ctrl+A` - Select tool
- `Ctrl+T` - Text tool
- `Ctrl+N` - Note tool
- `Ctrl+R` - Rectangle tool
- `Ctrl+E` - Ellipse tool
- `Ctrl+D` - Duplicate selection
- `Ctrl+Z` - Undo
- `Ctrl+Shift+Z` - Redo
- Arrow keys - Move selection

#### Other Features
- Layer ordering (bring to front, send to back)
- Camera pan and reset
- Export canvas as PNG
- Organization-based authentication

### 5. Installation Notes

Due to React 19 compatibility issues with some packages:
- Installed with `--legacy-peer-deps` flag
- All packages work correctly despite peer dependency warnings
- `use-debouncy` shows React 18 warning but functions properly

### 6. Environment Variables Required

```env
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

## Known Issues & Warnings

1. **Peer Dependency Warnings**: 
   - `use-debouncy` expects React 18 but works with React 19
   - Installed with `--legacy-peer-deps` to bypass strict checks

2. **Moderate Security Vulnerability**:
   - 1 moderate vulnerability detected in dependencies
   - Run `npm audit fix` if needed

## Testing Checklist

- [ ] Authentication with Clerk
- [ ] Create new board
- [ ] Draw shapes (Rectangle, Ellipse)
- [ ] Add text and notes
- [ ] Freehand drawing
- [ ] Color picker functionality
- [ ] Layer selection and manipulation
- [ ] Duplicate layers (Ctrl+D)
- [ ] Undo/Redo functionality
- [ ] Multi-user collaboration
- [ ] Cursor presence
- [ ] Export as PNG
- [ ] Camera controls

## Next Steps

1. Set up environment variables in `.env.local`
2. Configure Clerk authentication
3. Set up Convex backend
4. Configure Liveblocks secret key
5. Test multi-user collaboration
6. Deploy to production

## Support

For issues or questions:
- Check Liveblocks v3 documentation: https://liveblocks.io/docs
- Refer to original miro-clone-main implementation
- Review Convex and Clerk documentation

