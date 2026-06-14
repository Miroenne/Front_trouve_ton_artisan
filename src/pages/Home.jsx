import DisplayCard from "../components/Card";
import {useEffect, useState} from 'react'

const Home = () => {
    
    const [top3, setTop3] = useState([]);

    useEffect(() => {
        const fetchTop3 = async () => {
            try {
                const resTop3 = await fetch('http://localhost:3000/top3/');
                console.log(`resTop3 : `+ resTop3)
                const data = await resTop3.json();
                console.log(`Data : ` + data)
                if (Array.isArray(data)) {
                    console.log(data)
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
        <main className="py-25">
            <h1>TEST</h1>
            {top3.map((top3) => (
                <div className="" key={top3.id_Artisan}>
                    <DisplayCard
                        display="none"
                        societyName={top3.nom}
                        note={top3.note}
                        speciality={top3.nom_Spécialité}
                        city={top3.nom_Ville}
                    />
                </div>
                    

            ))}
            
        </main>
        
    )
}

export default Home;