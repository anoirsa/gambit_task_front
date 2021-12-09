import './App.css';
import Header from './components/Header';
import GetAll from './pages/getall/GetAll';
import {Routes, Route} from "react-router-dom"
import Search from './pages/search/Search';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<GetAll />} />
        <Route exact path="/search" element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
