
import './App.css';
import Episodes from "./components/Episode/Episodes";
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./components/Character/Characters";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episode'}/>}/>
                <Route path={'/episode'} element={<Episodes/>}/>
                <Route path={'/characters'} element={<Characters/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
