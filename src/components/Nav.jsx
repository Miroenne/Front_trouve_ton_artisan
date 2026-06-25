import {useEffect, useState, useRef} from 'react'
import logo from '../assets/img/Logo.png';
import searchIcon from '../assets/img/search_icon.svg'
import burgerMenuIcon from '../assets/img/burger-menu.svg'
import { NavLink, useNavigate } from 'react-router-dom';

/**
 * Displays the main navigation, category links, and search controls.
 *
 * The search form queries artisans by name, then redirects to the detail route
 * with the matching artisan id.
 *
 * @param {object} props - Component properties.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} [props.onDisplay] - Updates page content visibility on small screens.
 * @returns {JSX.Element} Navigation bar.
 */
const Nav = ({onDisplay}) => {

    const [searchFormSm, setSearchFormSm] = useState(false);
    const [catMenu, setCatMenu] = useState(false);  
    const API_URL = process.env.API_URL;
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef(null);

    /**
     * Searches an artisan by name and navigates to the matching detail page.
     *
     * @returns {Promise<void>} Resolves after the search request and navigation handling.
     */
    const handleSearch = async () => { 
        
        if(!searchInput.trim()) return;

        try{
            
            const searchSociety = await fetch('${API_URL}/societies/' + searchInput);
            const data = await searchSociety.json();
            
            navigate('/artisans/' + data[0].id_Artisan)
            
        }catch(error){
            console.error('Erreur lors du chargement de la société')
        }
        setSearchInput('');
        setSearchFormSm(false);
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    /**
     * Toggles the small-screen search form and restores the page content.
     *
     * @returns {void}
     */
    function displaySearchForm() {     
    setSearchFormSm(prev => !prev);
    setCatMenu(false);
    onDisplay(true);
    }

    /**
     * Toggles the small-screen category menu and page content visibility.
     *
     * @returns {void}
    */
    function displayCategoriesMenu() {     
        setCatMenu(prev => !prev);
        setSearchFormSm(false);
        onDisplay(prev => !prev);        
    } 

    /**
     * Handles keyboard submission for the search form.
     *
     * @param {React.KeyboardEvent<HTMLInputElement>} e - Keyboard event.
     * @returns {Promise<void>} Resolves after the search request and navigation handling.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const searchSociety = await fetch('${API_URL}/societies/' + searchInput);
            const data = await searchSociety.json();
            console.log("Fetched Data : " + data)
            if(e.key === 'Enter'){
                navigate('/Artisan/id/' + data.id_Artisan)
            }

        }catch(error){
            console.error('Erreur lors du chargement de la société')
        }
        setSearchInput('');
        searchFormSm.classList.add('d-none');
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    const [categories, setCategories] = useState([]);
    
        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const resCategories = await fetch('${API_URL}/categories/');
                    const data = await resCategories.json();
                    if (Array.isArray(data)) {
                        setCategories(data);
                    } else {
                        console.error(`L'API n'a pas retourné des données valides`, data);
                        setCategories([]);
                    }
    
                } catch (error) {
                    console.error('Erreur lors du chargement des catégories')
                    setCategories([]);
                }
            }
    
            fetchCategories();
        }, []);

        


    return(
        <nav className="border border-1 border-bottom shadow navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"  href="/"><img id='navBarLogo' src={logo} alt="Trouve ton artisan" /></a>
                <div>
                    
                    <div id='searchFormLg'>
                        <form  className="d-flex nav-form" role="search" onSubmit={(e) => {
                            e.preventDefault();
                            handleSearch();
                        }}>
                            <div className='search-container px-3 pb-1 container-fluid'>
                                <div className='container-fluid p-0 m-0 row justify-content-between'>
                                    <input className='p-0 align-self-start col-6 search-input' value={searchInput} 
                                    onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder='Recherche' aria-label='search' />
                                    <button className='col-2 p-0 search-btn form-btn' type='button' id='searchBtn' onClick={handleSearch}>
                                        <img src={searchIcon} className='col-6 search-icon' alt="Icône rechercher" />
                                    </button>
                                    
                                </div>
                                
                            </div>                                          
                        </form>
                    </div>
                    
                    <div className="collapse mt-3 navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" id="categoriesMenu">
                            {categories.map((catégorie) => (
                                <li className="nav-item" key={catégorie.id_Catégorie}>
                                    <NavLink className="link" to={`/catégories/${catégorie.nom_Catégorie}`} 
                                    state={{category: catégorie.nom_Catégorie}}>
                                        {catégorie.nom_Catégorie}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>                
                    </div>                
                </div>
                <div className='row justify-content-end me-0' id='smBtnContainer'>
                    <div id='searchFormBtnContainer' className='col-4 me-3'>                          
                        <button type="button" className='mt-2 p-0 form-btn' id='displaySmSearchFormBtn' onClick={displaySearchForm}>
                            <img src={searchIcon} className=' search-icon' alt="Icône rechercher" />
                        </button>                                                 
                    </div>
                    <div id='categoriesMenuBtnContainer' className='col-4'>                          
                        <button type="button" className='mt-2 p-0 form-btn' id='categoriesMenuBtn' onClick={displayCategoriesMenu}>
                            <img src={burgerMenuIcon} className=' burger-icon' alt="Burger menu icon" />
                        </button>                                                 
                    </div>
                </div>
                              
            </div>
            <div id='searchFormSm' className={searchFormSm ? '' : 'd-none'}>
                <form  className="d-flex nav-form" role="search" onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='search-container px-3 pb-1 container-fluid'>
                        <div className='container-fluid p-0 m-0 row justify-content-between'>
                            <input className='p-0 align-self-start col-6 search-input' value={searchInput} 
                            onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder='Recherche' aria-label='search' />
                            <button className='col-2 p-0 form-btn' type='button' id='submitSearchBtn' onClick={handleSearch}>
                                <img src={searchIcon} className='col-6 search-icon' alt="Icône rechercher" />
                            </button>
                            
                        </div>
                        
                    </div>                                          
                </form>
            </div>
            <div className={catMenu ? 'mt-3' : 'mt-3 d-none'} id="categoriesMenuSm">
                <ul className="text-center navbar-nav mb-2 mb-lg-0">
                    {categories.map((catégorie) => (
                        <li className="nav-item mt-4 fs-4" key={catégorie.id_Catégorie}>
                            <NavLink className="link" to={`/catégories/${catégorie.nom_Catégorie}`} 
                            state={{category: catégorie.nom_Catégorie}}>
                                {catégorie.nom_Catégorie}
                            </NavLink>
                        </li>
                    ))}
                </ul>                
            </div>  
        </nav>
    )
}

export default Nav;
