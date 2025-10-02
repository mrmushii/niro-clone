import {v} from "convex/values"
import {defineSchema, defineTable} from "convex/server"

export default defineSchema({
  board: defineTable({
    titie: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_org",["orgId"])
    .searchIndex("search_title",{
      searchField:"titie",
      filterFields: ["orgId"]
    })
})