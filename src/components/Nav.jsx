import {useEffect, useState} from 'react'
import logo from '../assets/img/Logo.png';
import searchIcon from '../assets/img/search_icon.svg'
import burgerMenuIcon from '../assets/img/burger-menu.svg'
import { NavLink } from 'react-router-dom';

function displaySearchForm() {     
    console.log('dans la fonction displaysearchform')
    const searchFormSm = document.getElementById('searchFormSm');
    searchFormSm.classList.toggle('d-none');
}

function displayCategoriesMenu() {     
    
    const catMenu = document.getElementById('categoriesMenuSm') ;  
    const pageContent = document.querySelector('.page-content');  
    catMenu.classList.toggle('d-none');   
    pageContent.classList.toggle('d-none')
}

function resetContentDisplay () {    

    if(window.innerWidth > 993){
        const pageContent = document.querySelector('.page-content')        
        pageContent.classList.toggle('d-none')
    }
}

resetContentDisplay();
window.addEventListener('resize', resetContentDisplay);

const Nav = (props) => {

    function handleClick() {
        const script = props.script;
        return script;
    }

    

    const [categories, setCategories] = useState([]);
    
        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const resCategories = await fetch('http://localhost:3000/categories/');
                    console.log(`resCategories : `+ resCategories)
                    const data = await resCategories.json();
                    console.log(`Data : ` + data)
                    if (Array.isArray(data)) {
                        console.log(data)
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
                <a className="navbar-brand"  href="/"><img id='navBarLogo' src={logo} alt="logo" /></a>
                <div>
                    
                    <div id='searchFormLg'>
                        <form  className="d-flex" role="search">
                            <div className='search-container px-3 pb-1 container-fluid'>
                                <div className='container-fluid p-0 m-0 row justify-content-between'>
                                    <input className='p-0 align-self-start col-6' id='searchInput' type="search" placeholder='Recherche' aria-label='search' />
                                    <button className='col-2 p-0' id='searchBtn'><img src={searchIcon} id='' className='col-6 search-icon' alt="Icône rechercher" /></button>
                                    
                                </div>
                                
                            </div>                                          
                        </form>
                    </div>
                    
                    <div className="collapse mt-3 navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" id="categoriesMenu">
                            {categories.map((catégorie) => (
                                <li className="nav-item">
                                    <NavLink className="link" to={'/catégorie'} 
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
                        <button type="submit" className='mt-2 p-0' id='searchBtn' onClick={displaySearchForm}><img src={searchIcon} 
                        id='' className=' search-icon' alt="Icône rechercher" /></button>                                                 
                    </div>
                    <div id='categoriesMenuBtnContainer' className='col-4'>                          
                        <button type="submit" className='mt-2 p-0' id='categoriesMenuBtn' onClick={displayCategoriesMenu}><img src={burgerMenuIcon} 
                        id='' className=' burger-icon' alt="Burger menu icon" /></button>                                                 
                    </div>
                </div>
                              
            </div>
            <div id='searchFormSm' className='d-none'>
                <form  className="d-flex" role="search">
                    <div className='search-container px-3 pb-1 container-fluid'>
                        <div className='container-fluid p-0 m-0 row justify-content-between'>
                            <input className='p-0 align-self-start col-6' id='searchInput' type="search" placeholder='Recherche' aria-label='search' />
                            <button className='col-2 p-0' id='submitSearchBtn'><img src={searchIcon} id='' className='col-6 search-icon' alt="Icône rechercher" /></button>
                            
                        </div>
                        
                    </div>                                          
                </form>
            </div>
            <div className=" mt-3 d-none" id="categoriesMenuSm">
                <ul className="text-center navbar-nav mb-2 mb-lg-0" id="">
                    {categories.map((catégorie) => (
                        <li className="nav-item mt-4 fs-4">
                            <NavLink className="link" to={'/catégorie'} 
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


/* <button className="navbar-toggler col-4 ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button> */