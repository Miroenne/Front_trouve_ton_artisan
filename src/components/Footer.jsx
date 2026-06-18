const Footer = () => {

    



    return(

        <div className="container-fluid p-4 mt-5">
            <div className="container-fluid row justify-content-evenly">
                <div className="col-4 text-center">
                    <div className="mx-auto w-50 text-start">
                        <p>Conseil Régional</p>
                        <p>Auvergne-Rhône-Alpes</p>
                    </div>                    
                </div>
                <div className="col-4 text-center">
                    <div className="mx-auto w-50 text-start">
                        <p>Lyon</p>
                        <p>101 cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                    </div>                    
                </div>
            </div>
            <div className=" p-0 row">
                <div className="mx-auto white-separate separate"></div>
            </div>
            <div className="container text-center">
                <div className="mx-auto">
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Mentions légales</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Données personnelles</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Accessibilité : partiellement conforme</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Presse</a>    
                </div>
                <div>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Marché publics</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Venir à la Région</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Contacts</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Politique des cookies</a>
                    <a className="text-decoration-none mx-3 mx-md-5 text-reset" href="/error">Gestion des cookies</a>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;