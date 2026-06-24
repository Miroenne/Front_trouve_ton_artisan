import Home from './pages/Home'
import Error from './pages/Error'
import Category from './pages/Category'
import Artisan from './pages/Artisan'
import {Routes, Route} from "react-router-dom"

/**
 * Defines the client-side routes for the React application.
 *
 * @returns {JSX.Element} Application routes.
 */
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/error' element={<Error />}/>
        <Route path='/catégorie' element={<Category />}/>
        <Route path='/artisan' element={<Artisan />}/>
      </Routes>
    </div>
  );
}

export default App;
