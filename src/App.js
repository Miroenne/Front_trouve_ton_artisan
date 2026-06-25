import Home from './pages/Home'
import Error from './pages/Error'
import Category from './pages/Category'
import Artisan from './pages/Artisan'
import {Routes, Route} from "react-router-dom"

/**
 * Defines the public client-side routes for the React application.
 *
 * Category and artisan detail pages use URL parameters so they can be opened
 * directly, shared, and indexed more easily than state-only routes.
 *
 * @returns {JSX.Element} Application routes.
 */
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/error' element={<Error />}/>
        <Route path='/catégories/:categoryName' element={<Category />}/>
        <Route path='/artisans/:id' element={<Artisan />}/>
      </Routes>
    </div>
  );
}

export default App;
