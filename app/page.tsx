import { UserButton } from "@clerk/nextjs"


const page = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        this is a div for Authenticated users
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  )
}

export default page