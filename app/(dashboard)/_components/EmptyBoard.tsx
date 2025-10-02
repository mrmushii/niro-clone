import { Button } from "@/components/ui/button"
import Image from "next/image"


const EmptyBoard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/note.svg'} height={110} width={110} alt="empty"/>

      <h2 className="text-2xl font-semibold mt-6">Create your first Niro</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a Niro for your organization
      </p>
      <div>
        <Button size={'lg'} className="mt-6">
            Create Niro
        </Button>
      </div>
    </div>

  )
}

export default EmptyBoard