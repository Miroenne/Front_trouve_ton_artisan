import DisplayCard from "../components/Card";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {useEffect, useState} from 'react'

/**
 * Displays the homepage with the main SEO heading, usage instructions, and featured artisans.
 *
 * @returns {JSX.Element} Homepage.
 */
const Home = () => {
    
    const [pageContent, setPageContent] = useState(true) ; 
    const [top3, setTop3] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchTop3 = async () => {
            try {
                const resTop3 = await fetch(`${API_URL}/top3/`);                
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
                <Nav onDisplay={setPageContent}/>
            </header>

            <main className="px-25">   
                <div className={pageContent ? "container-fluid mt-5 p-0 page-content" : "container-fluid mt-5 p-0 page-content d-none" }>
                    <section id='presentation' className="w-50 mt-50 container justify-self-center text-center">
                        <h1 className="">Trouve ton artisan en Auvergne-Rhône-Alpes</h1>
                        <h2>Comment trouver mon artisan?</h2>
                        <p className="mx-auto">
                            (1) Après avoir choisi la catégorie dans le menu, (2) sélectionnez un artisan et <br />
                            (3) le contacter via le formulaire de contact. (4) Une réponse sera apportée sous 48H.
                        </p>
                    </section>
                    <div className="container p-0">
                        <div className="separate"></div>
                    </div>
                    
                    <section id='monthSocities' className="container-fluid p-0">
                        <h2 className="text-center">Artisans du mois</h2>
                        <div className="row justify-content-evenly">
                            {top3.map((top3) => (
                            <div className="col-md-6 col-lg-4" key={top3.id_Artisan}>
                                <DisplayCard
                                    display="d-none"
                                    societyId={top3.id_Artisan}
                                    societyName={top3.nom}
                                    note={top3.note}
                                    speciality={top3.nom_Spécialité}
                                    city={top3.nom_Ville}
                                />
                            </div>
                        ))}
                        </div>
                        
                    </section>  
                </div>            
                    
            </main>
            <footer>
                <Footer />
            </footer>
        </div>                     
        

    )
}

export default Home;
