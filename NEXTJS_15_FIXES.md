# Next.js 15 Compatibility Fixes

## Overview
Fixed runtime errors related to Next.js 15's async params/searchParams API changes and Liveblocks v3 compatibility.

## Errors Fixed

### 1. ✅ SearchParams Async Access
**Error**: `A searchParam property was accessed directly with searchParams.favorites`

**Fix**: Updated `app/(dashboard)/page.tsx`
- Changed `searchParams` type from object to `Promise<object>`
- Used `React.use()` to unwrap the promise before accessing properties

```typescript
// Before
const DashboardPage = ({searchParams}: DashboardPageProps) => {
  return <BoardList query={searchParams} />
}

// After
const DashboardPage = ({searchParams}: DashboardPageProps) => {
  const resolvedSearchParams = use(searchParams);
  return <BoardList query={resolvedSearchParams} />
}
```

### 2. ✅ Params Async Access
**Error**: `A param property was accessed directly with params.boardId`

**Fix**: Updated `app/board/[boardId]/page.tsx`
- Changed `params` type from `{ boardId: string }` to `Promise<{ boardId: string }>`
- Used `React.use()` to unwrap the promise before accessing `boardId`

```typescript
// Before
const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return <Room roomId={params.boardId} />
}

// After
const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const resolvedParams = use(params);
  return <Room roomId={resolvedParams.boardId} />
}
```

### 3. ✅ LiveList Initialization Error
**Error**: `items is not iterable` in Liveblocks LiveList constructor

**Fix**: Updated `components/room.tsx`
- Liveblocks v3 requires LiveList to be initialized with an array
- Changed from `new LiveList<string>()` to `new LiveList([])`

```typescript
// Before
initialStorage={{
  layers: new LiveMap<string, LiveObject<Layer>>(),
  layerIds: new LiveList<string>(),
}}

// After
initialStorage={{
  layers: new LiveMap<string, LiveObject<Layer>>(),
  layerIds: new LiveList([]),
}}
```

## Next.js 15 Breaking Changes

### Async Params and SearchParams
In Next.js 15, `params` and `searchParams` in Page components are now **Promises** and must be unwrapped using `React.use()`.

**Why?**
- Improves performance with streaming and Suspense
- Aligns with React's async data patterns
- Enables better optimization in Turbopack

**Migration Pattern:**
1. Import `use` from React
2. Change type definitions to wrap values in `Promise<>`
3. Unwrap at the component level with `use()`

```typescript
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ query: string }>;
}

function Page({ params, searchParams }: PageProps) {
  const { id } = use(params);
  const { query } = use(searchParams);
  // Use resolved values
}
```

## Files Modified

1. ✅ `app/(dashboard)/page.tsx` - Async searchParams handling
2. ✅ `app/board/[boardId]/page.tsx` - Async params handling  
3. ✅ `components/room.tsx` - LiveList initialization fix

## Testing Checklist

- [x] No more searchParams warning
- [x] No more params warning
- [x] No more LiveList error
- [x] Dashboard page loads correctly
- [x] Board page loads correctly
- [x] Liveblocks room initializes properly

## References

- [Next.js 15 Async Request APIs](https://nextjs.org/docs/messages/sync-dynamic-apis)
- [Liveblocks v3 Migration Guide](https://liveblocks.io/docs/platform/upgrading/2.0-to-3.0)
- [React.use() Documentation](https://react.dev/reference/react/use)

