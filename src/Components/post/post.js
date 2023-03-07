import { useSelector } from "react-redux";
import "../post/post.css";
import React from "react";
import Buttons from "../buttons/Buttons";

function Posts() {
  const postList = useSelector((state) => state.post);
  const newItem = postList.map(function (item, i) {
    return (
      <div className="post" key={item.date}>
        <div className="postHeader">
          <div className="postHeaderAva">
            <img className="autorImg" src={item.authorPhoto} alt="" />
          </div>

          <div className="postHeaderName">{item.author}</div>
          <div>
            <img
              className="imgAfter"
              src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png"
            ></img>
          </div>
          <div className="postHeaderNickname">{item.nickname}</div>
          <div className="postHeaderDate">{item.date}</div>
        </div>
        <div className="postContent">
          <div className="postContentText">{item.textPost}</div>
          <div>
            <img src={item.postPhoto} alt="" />
          </div>
          <div className="post-meta">
            <Buttons />
          </div>
        </div>
      </div>
    );
  });

  return <div className="post-list">{newItem}</div>;
}
export default Posts;
