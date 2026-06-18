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
                <img id='errorPic' src={ErrorPic} alt="Error 404" />
                <p id="errorMessage" className="mx-auto">Oups, la page que vous avez demandée n'a pas été trouvée...</p>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

export default Error;