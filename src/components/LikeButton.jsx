// Q14: Toggle Like / Liked
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button className={liked ? "liked" : ""} onClick={() => setLiked(!liked)}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
