import {useEffect, useState} from 'react'
import logo from '../assets/img/Logo.png';
import searchIcon from '../assets/img/search_icon.svg'

function displaySearchForm() {     
    console.log('dans la fonction displaysearchform')
    const searchFormSm = document.getElementById('searchFormSm') 
    
    if (searchFormSm.classList.contains('d-none')){
        console.log('classe d-none présente')
        searchFormSm.classList.remove('d-none');
    }else if (!searchFormSm.classList.contains('d-none')){
        console.log('classe d-none non présente')
        searchFormSm.classList.add('d-none')
    }      
 }

const Nav = () => {

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
        <nav class="border border-1 border-bottom shadow navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"  href="/"><img id='navBarLogo' src={logo} alt="logo" /></a>
                <div>
                    
                    <div id='searchFormMd'>
                        <form  class="d-flex" role="search">
                            <div className='search-container px-3 pb-1 container-fluid'>
                                <div className='container-fluid p-0 m-0 row justify-content-between'>
                                    <input className='p-0 align-self-start col-6' id='searchInput' type="search" placeholder='Recherche' aria-label='search' />
                                    <button className='col-2 p-0' id='searchBtn'><img src={searchIcon} id='' className='col-6 searchIcon' alt="Icône rechercher" /></button>
                                    
                                </div>
                                
                            </div>                                          
                        </form>
                    </div>
                    
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    {categories.map((catégorie) => (
                        <li class="nav-item">
                            <a class="nav-link" href={'/' + catégorie.nom_Catégorie}>{catégorie.nom_Catégorie}</a>
                        </li>
                    ))}
                    </ul>                
                </div>                
                </div>
                <div className='row justify-content-between' id='smBtnContainer'>
                    <div id='searchFormBtnContainer' className='col-4 '>                          
                        <button type="submit" className='mt-2 p-0' id='searchBtn' onClick={displaySearchForm}><img src={searchIcon} id='' className='col-6 searchIcon' alt="Icône rechercher" /></button> 
                                               
                </div>
                <button class="navbar-toggler col-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>  
                </div>
                              
            </div>
            <div id='searchFormSm' className=''>
                   <form  class="d-flex" role="search">
                        <div className='search-container px-3 pb-1 container-fluid'>
                            <div className='container-fluid p-0 m-0 row justify-content-between'>
                                <input className='p-0 align-self-start col-6' id='searchInput' type="search" placeholder='Recherche' aria-label='search' />
                                <button className='col-2 p-0' id='searchBtn'><img src={searchIcon} id='' className='col-6 searchIcon' alt="Icône rechercher" /></button>
                                
                            </div>
                            
                        </div>                                          
                    </form>
            </div>
        </nav>
    )
}

export default Nav;