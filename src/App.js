
import './App.css';
import Episodes from "./components/Episode/Episodes";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Episodes/>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/episode'} element={<Episodes/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
