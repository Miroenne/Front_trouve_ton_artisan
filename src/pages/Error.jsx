import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ErrorPic from '../assets/img/error.jpg';


const Error = () => {



    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <div className="page-content text-center">
                    <img id='errorPic' className="mx-auto" src={ErrorPic} alt="Error 404" />
                    <p id="errorMessage" className="mx-auto">Oups, la page que vous avez demandée n'a pas été trouvée...</p>
                </div>
                
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

export default Error;