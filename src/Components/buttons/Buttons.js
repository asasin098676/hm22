import React from "react";
import { useState } from "react";
import "../buttons/Buttons.css";

const Buttons = () => {
  const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };
  const [coment, setComent] = useState(110),
    [isComent, setIsComent] = useState(false),
    onComentButtonClick = () => {
      setComent(coment + (isComent ? -1 : 1));
      setIsComent(!isComent);
    };
  const [repost, setRepost] = useState(120),
    [isRepost, setIsRepost] = useState(false),
    onRepostButtonClick = () => {
      setRepost(repost + (isRepost ? -1 : 1));
      setIsRepost(!isRepost);
    };
  const [share, setShare] = useState(130),
    [isShare, setIsShare] = useState(false),
    onShareButtonClick = () => {
      setShare(share + (isShare ? -1 : 1));
      setIsShare(!isShare);
    };

  return (
    <div>
      <button
        className={"button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <button
        className={"button " + (isComent ? "liked" : "")}
        onClick={onComentButtonClick}
      >
        {"Coment"} | {coment}
      </button>
      <button
        className={"button " + (isRepost ? "liked" : "")}
        onClick={onRepostButtonClick}
      >
        {"Repost"} | {repost}
      </button>
      <button
        className={"button " + (isShare ? "liked" : "")}
        onClick={onShareButtonClick}
      >
        {"Share"} | {share}
      </button>
    </div>
  );
};

export default Buttons;
