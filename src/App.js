
import './App.css';
import Users from "./components/User/Users";
import Posts from "./components/Post/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="App">
        <div className={'top'}>
            <div className={'user'}><Users/></div>
            <div className={'post'}><Posts/></div>
        </div>
        <div><Comments/></div>
    </div>
  );
}

export default App;
