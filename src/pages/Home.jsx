import DisplayCard from "../components/Card";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {useEffect, useState} from 'react'

const Home = () => {
    
    const [top3, setTop3] = useState([]);

    useEffect(() => {
        const fetchTop3 = async () => {
            try {
                const resTop3 = await fetch('http://localhost:3000/top3/');                
                const data = await resTop3.json();                
                if (Array.isArray(data)) {                    
                    setTop3(data);
                } else {
                    console.error(`L'API n'a pas retourné des données valides`, data);
                    setTop3([]);
                }

            } catch (error) {
                console.error('Erreur lors du chargement du top 3 du mois')
                setTop3([]);
            }
        }

        fetchTop3();
    }, []);
    
    
    return (
        <div>
            <header>
                <Nav/>
            </header>

            <main className="px-25">               
                <div  className="w-50 mt-50 container justify-self-center text-center">
                    <h2>Comment trouver mon artisan?</h2>
                    <p className="mx-auto">
                        (1) Après avoir choisi la catégorie dans le menu, (2) sélectionnez un artisan et <br />
                        (3) le contacter via le formulaire de contact. (4) Une réponse sera apportée sous 48H.
                    </p>
                </div>
                <div className="container p-0">
                    <div className="separate"></div>
                </div>
                
                <div className="container-fluid p-0">
                    <h2>Artisans du mois</h2>
                    <div className="row justify-content-evenly">
                        {top3.map((top3) => (
                        <div className="col-md-6 col-lg-4" key={top3.id_Artisan}>
                            <DisplayCard
                                display="d-none"
                                societyName={top3.nom}
                                note={top3.note}
                                speciality={top3.nom_Spécialité}
                                city={top3.nom_Ville}
                            />
                        </div>
                    ))}
                    </div>
                    
                </div>      
            </main>
            <footer>
                <Footer />
            </footer>
        </div>                     
        

    )
}

export default Home;