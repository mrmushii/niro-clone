import Image from "next/image"


const EmptyFav = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/noFav.svg'} height={140} width={140} alt="empty"/>

      <h2 className="text-2xl font-semibold mt-6">No favorite Niro</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try making a Niro favorite
      </p>
    </div>

  )
}

export default EmptyFav