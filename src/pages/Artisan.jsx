import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisplaySociety from "../components/Display_Artisan";
import {useLocation} from "react-router-dom"
import { useEffect, useState } from "react";

const Artisan = () => {

    const location = useLocation();
    const societyName = location.state.name;
    const [society, setSociety] = useState(null);
    
    console.log(societyName);
    
    useEffect(() => {

        const FetchSociety = async () => {
            try{
                const restSociety = await fetch('http://localhost:3000/societies/' + societyName);
                const data = await restSociety.json()
                if(Array.isArray(data)){
                    console.log('society data : ' + data[0])
                    setSociety(data[0]);
                }else{
                    console.error(`L'API n'a pas retourné des données valides`, data);
                    setSociety([]);
                }
            }catch(error){
                console.error(`Erreur lors du chargement de l'artisan ` + societyName)
            }
        }        

        FetchSociety();

    }, []);


    return(
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <div className="container-fluid mt-5">
                    <div className="container-fluid row">
                        <div className="col-lg-5">
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
                        
                        <div className="society-container col-lg-5" id='form'>
                            <h1>test</h1>
                        </div>
                        
                    </div>       
                </div>
                
                
            </main>
            
            
        </div>
    )
}

export default Artisan;
