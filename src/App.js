
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Posts from "./components/PostPages/Posts";
import PostDet from "./components/PostPages/PostDet";
import Comment from "./components/PostPages/Comment/Comment";
import Users from "./components/UserPage/Users";
import UserDet from "./components/UserPage/UserDet";
import PostOfUser from "./components/UserPage/PostOfUser/PostOfUser";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/posts'} element={<Posts/>}>
                    <Route path={':id'} element={<PostDet/>}>
                        <Route path={':comments'} element={<Comment/>}/>
                    </Route>
                </Route>
                <Route path={'/users'} element={<Users/>}>
                    <Route path={':id'} element={<UserDet/>}>
                        <Route path={':posts'} element={<PostOfUser/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
