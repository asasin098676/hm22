import "./App.css";
import AddNewPost from "./Components/addNewPost/AddNewPost";
import Posts from "./Components/post/post";

function App() {
  return (
    <div className="allComp">
      <AddNewPost />
      <Posts />
    </div>
  );
}

export default App;
