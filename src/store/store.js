import { createStore } from "redux";

const initState = {
  post: [
    {
      author: "Anakin skywalker",
      authorPhoto:
        "https://cdn.oboi7.com/8f9299115b9c81f77c4df6a24aaabfe1e5c942d7/zvezdnye-vojny-dzhedaj-anakin-skajuoker-aktery-hajden-kristensen.jpg",
      nickname: "@dart_vader",
      date: "27/03  14:31",
      textPost: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      postPhoto:
        "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    },
  ],
};

const reducer = (state = initState, actions) => {
  console.log(state, actions);
  switch (actions.type) {
    case "ADD_POST":
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const formatedDate = `${day}/ ${month}/${year} ${hours}:${minutes}`;

      let authorName = document.getElementById("selectLabel").innerText;

      let authorNick = document.getElementById("selectNick").innerText;

      let authorImg = document.getElementById("selectImg").innerText;

      let text = document.getElementById("textInput").value;
      document.getElementById("textInput").value = "";

      let postPhoto = document.getElementById("postPhoto").value;
      document.getElementById("postPhoto").value = "";

      console.log(authorImg);
      if (authorName.length > 1 && text.length > 1 && postPhoto.length > 1) {
        return {
          ...state,
          post: [
            ...state.post,
            {
              author: authorName,
              authorPhoto: authorImg,
              nickname: authorNick,
              date: formatedDate,
              textPost: text,
              postPhoto: postPhoto,
            },
          ],
        };
      }

    default:
      return state;
  }
};

export const store = createStore(reducer);
