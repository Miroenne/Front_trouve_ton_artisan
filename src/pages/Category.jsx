import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisplayCard from "../components/Card";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";



/**
 * Displays artisans filtered by the category received from router state.
 *
 * @returns {JSX.Element} Category results page.
 */
const Category = () => {

    const location = useLocation();
    const categorie = location.state.category;
    const [category, setCategory] = useState([]);    
    const [refresh, setRefresh] = useState(categorie);

    useEffect(() => {
        const fecthCategory = async () => {
            try{
                const resCategory = await fetch('http://localhost:3000/societies/categorized/' + categorie);
                const data = await resCategory.json();
                if(Array.isArray(data)){
                    setCategory(data);
                }else{
                    console.error(`L'API n'a pas retourné des données valides`, data);
                    setCategory([]);
                }
            }catch(error){
                console.error('Erreur lors du chargement des artisans de la catégorie ' + categorie);
                setCategory([]);
            }
        }

        fecthCategory();

    }, [categorie]);
   

    

    return(
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <div id="category" className="page-content">
                    <div className="container-fluid">
                        <h1 className="text-start ms-4">{categorie}</h1>
                        <div className="row justify-content-evenly">
                            {category.map((artisan) => (
                            <div className="col-md-6 col-lg-4" key={artisan.id_Artisan}>
                                <DisplayCard
                                    display="d-none"
                                    societyName={artisan.nom}
                                    note={artisan.note}
                                    speciality={artisan.nom_Spécialité}
                                    city={artisan.nom_Ville}
                                />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>           
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

export default Category;
