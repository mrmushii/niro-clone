

"use client"

interface BoardCardProps{
  id:string;
  title:string;
  authorName:string;
  authorId:string;
  createdAt: number;
  imageUrl:string;
  orgId: string;
  isFavorite: boolean;

}

const BoardCard = (
  {id,title,authorId,authorName,createdAt,imageUrl,orgId,isFavorite}:BoardCardProps
) => {
  return (
    <div>BoardCard</div>
  )
}

export default BoardCard