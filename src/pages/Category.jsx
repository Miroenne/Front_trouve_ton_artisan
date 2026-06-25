import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisplayCard from "../components/Card";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";



/**
 * Displays artisans filtered by the category name received from the URL.
 *
 * @returns {JSX.Element} Category results page.
 */
const Category = () => {

    const [pageContent, setPageContent] = useState(true) ; 
    const {categoryName} = useParams();
    const API_URL = process.env.REACT_APP_API_URL;
    const [category, setCategory] = useState([]);   

    useEffect(() => {
        const fecthCategory = async () => {
            try{
                const resCategory = await fetch(`${API_URL}/societies/categorized/` + categoryName);
                const data = await resCategory.json();
                if(Array.isArray(data)){
                    setCategory(data);
                }else{
                    console.error(`L'API n'a pas retourné des données valides`, data);
                    setCategory([]);
                }
            }catch(error){
                console.error('Erreur lors du chargement des artisans de la catégorie ' + categoryName);
                setCategory([]);
            }
        }

        fecthCategory();

    }, [categoryName]);
   

    

    return(
        <div>
            <header>
                <Nav onDisplay={setPageContent}/>
            </header>
            <main>
                <div id="category" className={pageContent ? "container-fluid mt-5 p-0 page-content" : "container-fluid mt-5 p-0 page-content d-none" }>
                    <div className="container-fluid">
                        <h1 className="text-start">{categoryName}</h1>
                        <h2 className="text-start text-decoration-underline">Ci-dessous la liste des artisans correpondants :</h2>
                        <div className="row justify-content-evenly">
                            {category.map((artisan) => (
                            <div className="col-md-6 col-lg-4" key={artisan.id_Artisan}>
                                <DisplayCard
                                    display="d-none"
                                    societyId={artisan.id_Artisan}
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
