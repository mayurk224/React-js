import React from "react";
import useFetch from "../hooks/useFetch";

function CommentsList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h1>Fetching Comments Please Wait</h1>;
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {data?.comments?.length > 0
          ? data.comments.map((commentsItem) => (
              <li key={commentsItem?.id}>{commentsItem?.body} </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default CommentsList;
