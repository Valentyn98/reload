
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Episodes from "./components/Episode/Episodes";
import EpisodeDetailPict from "./components/Episode/EpisodeDetailPict";
import EpisodeDetails from "./components/Episode/EpisodeDetails";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episode'}/>}/>
                <Route path={'episode'} element={<Episodes/>}/>
                <Route path={'/episodeDetails'} element={<EpisodeDetails/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
