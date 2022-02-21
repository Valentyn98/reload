
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import PhotoByUrl from "./components/PhotoByUrl/PhotoByUrl";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<PhotoByUrl/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
