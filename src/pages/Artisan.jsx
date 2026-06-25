import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisplaySociety from "../components/Display_Artisan";
import Form from "../components/Form";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

/**
 * Displays the detail page for the artisan id received from the URL.
 *
 * @returns {JSX.Element} Artisan detail page or loading/empty state.
 */
const Artisan = () => {

    const [pageContent, setPageContent] = useState(true) ; 
    const {id} = useParams();
    const API_URL = process.env.API_URL;
    const [society, setSociety] = useState(null);
    console.log("L'ID est le : " + id)
    useEffect(() => {

        if (!id) {
            console.warn("Aucun identifiant d'artisan reçu dans l'URL");
            return;
        }

        const FetchSociety = async () => {
            try{
                const restSociety = await fetch(`${API_URL}/societies/id/` + id);
                const data = await restSociety.json()
                setSociety(data);
                
            }catch(error){
                console.error(`Erreur lors du chargement de l'artisan ` + id)
            }
        }        

        FetchSociety();

    }, [id]);

    if (!id) {
        return <p>Aucun artisan demandé.</p>;
    }

    if (!society) {
        return <p>Chargement de l'artisan {id}…</p>;
    }

    

    return(
        <div>
            <header>
                <Nav onDisplay={setPageContent} />
            </header>
            <main>    
                <div className={pageContent ? "container-fluid mt-5 p-0 page-content" : "container-fluid mt-5 p-0 page-content d-none" }>
                    <div className="container-fluid row p-0 m-0">
                        <div className="col-lg-6">
                            {society && 
                                ( 
                                    <DisplaySociety 
                                        picture={society.photo_url}
                                        name={society.nom}
                                        note={society.note}
                                        city={society.nom_Ville}
                                        speciality={society.nom_Spécialité}
                                        site={society.site_Web}
                                        about={society.A_propos}
                                    />
                                )
                            }
                        </div>
                        
                        <div className="society-container col-lg-6 mx-auto text-start" id='form'>
                           { society && (<Form email={society.email}/>)}
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

export default Artisan;
