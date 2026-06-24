import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisplaySociety from "../components/Display_Artisan";
import Form from "../components/Form";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";

/**
 * Displays the detail page for the artisan selected through router state.
 *
 * @returns {JSX.Element} Artisan detail page or loading/empty state.
 */
const Artisan = () => {

    const location = useLocation();
    const societyId = location.state?.id || "";
    const [society, setSociety] = useState(null);
    
    useEffect(() => {

        if (!societyId) {
            console.warn("Aucun nom d'artisan reçu dans location.state");
            return;
        }

        const FetchSociety = async () => {
            try{
                const restSociety = await fetch('http://localhost:3000/societies/id/' + societyId);
                const data = await restSociety.json()
                if(Array.isArray(data)){
                    setSociety(data[0]);
                }else{
                    console.error(`L'API n'a pas retourné des données valides`, data);
                    setSociety([]);
                }
            }catch(error){
                console.error(`Erreur lors du chargement de l'artisan ` + societyId)
            }
        }        

        FetchSociety();

    }, [societyId]);

    if (!societyId) {
        return <p>Aucun artisan demandé.</p>;
    }

    if (!society) {
        return <p>Chargement de l'artisan {societyId}…</p>;
    }

    return(
        <div>
            <header>
                <Nav />
            </header>
            <main>    
                <div className="container-fluid mt-5 p-0 page-content">
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
