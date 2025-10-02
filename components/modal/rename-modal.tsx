"use client"

import { useRenameModal } from "@/store/use-rename-model"
import { Dialog, DialogDescription, DialogHeader, DialogContent, DialogTitle, DialogFooter, DialogClose  } from "../ui/dialog"
import {  FormEventHandler, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"


const RenameModal = () => {
  const {mutate,pending} = useApiMutation(api.board.update)

  const {
    isOpen,onClose,initialValues
  } = useRenameModal()
const [title, setTitle] = useState(initialValues.title)

  useEffect(()=>{
    setTitle(initialValues.title)
  },[initialValues.title])

  const onSubmit: FormEventHandler<HTMLFormElement> = (e)=>{
    e.preventDefault()
    mutate({
      id: initialValues.id,
      title
    })
    .then(()=> {toast.success("Niro renamed")
      onClose()
    })
    .catch(()=>toast.error("Failed to rename Niro"))
    
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Niro title
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Enter a new title for this Niro
        </DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input disabled={pending}
          required
          maxLength={60}
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          placeholder="Niro title"/>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant={'outline'}>
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>

        
      </DialogContent>
    </Dialog>
  )
}

export default RenameModal
