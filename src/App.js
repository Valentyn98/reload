import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import UserDetails from "./components/UserDetails";



function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to={'/'}>HOme</Link></li>
        <li><Link to={'/Layout'}>Layout</Link></li>
      </ul>

      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Layout'} element={<Layout/>}>
            <Route path={'users'} element={<Users/>}>
                <Route path={':id'} element={<UserDetails/>}/>
                <Route path={':id/posts'} element={<Posts/>}/>
        </Route>
            <Route path={'posts'} element={<Posts/>}/>
            <Route path={'comments'} element={<Comments/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
