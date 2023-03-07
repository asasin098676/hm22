import React from "react";
import "../addNewPost/AddNewPost.css";
import Select from "react-select";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddNewPost = () => {
  const addPost = (e) => {
    e.preventDefault();
    const action = {
      type: "ADD_POST",
    };
    dispatch(action);
  };

  const options = [
    {
      value:
        "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
      label: "gagarin",
      nick: "@gagarin",
    },
    {
      value:
        "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
      label: "romeoo228",
      nick: "@romeoo228",
    },
    {
      value:
        "https://image.shutterstock.com/z/stock-photo-portrait-of-an-african-man-on-a-blue-background-a-black-man-on-the-background-of-a-lease-fashion-2040533642.jpg",
      label: "vanill_zoro",
      nick: "@vanill_zoro",
    },
  ];

  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <div className="inputDiv">
      <div className="inputBlock">
        <h2 className="textInput">text</h2>
        <input id="textInput"></input>
      </div>
      <div className="inputBlock">
        <h2 className="textInput">link to picture</h2>
        <input id="postPhoto"></input>
      </div>
      <div className="inputBlock">
        <h2>autor</h2>
        <Select className="select" onChange={handleChange} options={options} />
      </div>
      <div className="authorBlock">
        <p className="white" id="selectImg">
          {selected.value}
        </p>
        <img className="autorImg" src={selected.value}></img>
        <p id="selectLabel">{selected.label}</p>
        <p id="selectNick">{selected.nick}</p>
      </div>

      <button className="addButton" onClick={addPost}>
        add new post
      </button>
    </div>
  );
};

export default AddNewPost;

{
  /* <div className="newPost">
        <h1>your post will look like this</h1>

        <div className="autorInfo">
          <img className="autorImg" src={autorImage}></img>

          <h2>{autor}</h2>
        </div>
        <div>
          <img className="postImg" src={image}></img>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div> */
}
