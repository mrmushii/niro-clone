"use client"
import { useOrganization } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {api} from "@/convex/_generated/api"

import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"



const EmptyBoard = () => {
  const {organization} = useOrganization()
  const {mutate,pending} = useApiMutation( api.board.create)

  const onClick = () =>{
    if(!organization) return

    mutate({
      orgId: organization.id,
      title: "untitled"
    })
    .then((id)=>{
      toast.success("Niro Created")
    })
    .catch(()=> toast.error("Failed to create Niro"))
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/note.svg'} height={110} width={110} alt="empty"/>

      <h2 className="text-2xl font-semibold mt-6">Create your first Niro</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a Niro for your organization
      </p>
      <div>
        <Button disabled={pending} onClick={onClick} size={'lg'} className="mt-6">
            Create Niro
        </Button>
      </div>
    </div>

  )
}

export default EmptyBoard