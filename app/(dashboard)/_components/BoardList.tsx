"use client"

import EmptyBoard from "./EmptyBoard";
import EmptyFav from "./EmptyFav";
import EmptySearch from "./EmptySearch";

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
      <EmptySearch/>
    )
  }
  if(!data?.length && query.favorites){
    return(
      <EmptyFav/>
    )
  }

  if(!data?.length){
    return(
     <EmptyBoard/>
    )
  }

  return (
    <div>{JSON.stringify(query)}</div>
  )
}

export default BoardList