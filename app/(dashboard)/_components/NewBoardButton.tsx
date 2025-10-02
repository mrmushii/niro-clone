"use cllient"

import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { useMutation } from "convex/react"
import { Plus } from "lucide-react"
import { toast } from "sonner"

interface NewBoardButtonProps {
  orgId: string
  disabled: boolean
}

const NewBoardButton = ({orgId,disabled}:NewBoardButtonProps) => {
  
  const {mutate, pending} = useApiMutation(api.board.create)

  const onClick = ()=>{
    mutate({
      orgId,
      title:"untitled"
    })
    .then((id) =>{
      toast.success("Niro created")
    })
    .catch(() =>{
      toast.error("Failed to created a Niro")
    })
  }

  return (
    <button 
    disabled={pending || disabled}
    onClick={onClick}
    className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6", (pending || disabled) && "opacity-75")}
    >
      <div/>
      <Plus className="h-12 w-12 text-white stroke-1"/>
      <p className="text-xs text-white font-light">New Niro</p>
    </button>
  )
}

export default NewBoardButton