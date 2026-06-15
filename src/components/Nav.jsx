import {useEffect, useState} from 'react'

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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search"/>                   
                    </form>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    {categories.map((catégorie) => (
                        <li class="nav-item">
                            <a class="nav-link" >{catégorie.nom_Catégorie}</a>
                        </li>
                    ))}
                    </ul>                
                </div>                
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
            </div>
        </nav>
    )
}

export default Nav;