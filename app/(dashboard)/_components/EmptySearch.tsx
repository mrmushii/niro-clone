import Image from "next/image"


const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={'/emSearch.svg'} height={140} width={140} alt="empty"/>

      <h2 className="text-2xl font-semibold mt-6">No result found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching something else
      </p>
    </div>

  )
}

export default EmptySearch