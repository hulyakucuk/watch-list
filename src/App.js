import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<WatchList/>}></Route>
        <Route path="/watched" element={<Watched/>}></Route>
        <Route path="/add" element={<Add/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
