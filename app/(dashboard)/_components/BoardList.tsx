"use client"

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  }
}

const BoardList = ({orgId,query}:BoardListProps) => {
  const data = [];

  if(!data.length&& query.search){
    return(
      <div>
        try searching for something else
      </div>
    )
  }
  if(!data?.length && query.favorites){
    return(
      <div>
        no favorites
      </div>
    )
  }

  if(!data?.length){
    return(
      <div>
        no boards at all
      </div>
    )
  }

  return (
    <div>{JSON.stringify(query)}</div>
  )
}

export default BoardList