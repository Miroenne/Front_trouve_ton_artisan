import Home from './pages/Home'
import Error from './pages/Error'
import Category from './pages/Category'
import {Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/error' element={<Error />}/>
        <Route path='/catégorie' element={<Category />}/>
      </Routes>
    </div>
  );
}

export default App;
