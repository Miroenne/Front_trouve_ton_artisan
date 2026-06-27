import fullStar from "../assets/img/full_star.svg";
import halfStar from "../assets/img/half_star.svg";
import emptyStar from "../assets/img/empty_star.svg";
import renderStars from "../utils/renderStars";

/**
 * Displays the detailed information for one artisan profile.
 *
 * @param {object} props - Component properties.
 * @param {string} props.picture - Artisan picture URL.
 * @param {string} props.name - Artisan or society name.
 * @param {number} props.note - Artisan rating displayed as stars.
 * @param {string} props.city - Artisan city.
 * @param {string} props.speciality - Artisan specialty.
 * @param {string} props.site - Artisan website URL.
 * @param {string} props.about - Artisan presentation text.
 * @returns {JSX.Element} Artisan detail section.
 */
const DisplaySociety = (props) => {
    
    const rateNote = renderStars(props.note);
    
   
    return(
        <div className="container-fluid p-0">
            <section id='societyPresentation' className="container mx-0 p-0 row mb-5">
                <div className="col-6 text-start">
                    <img id="societyPic" src={props.picture} alt={"photo " + props.name} />
                </div>
                <div className="col-6 text-start">
                    <div className="container">
                        <h1 id="societyNameTitle">{props.name}</h1>
                    </div>                
                                        <div className="text-start" title={"Note de l'artisan : " + props.note}>
                        {rateNote.map((type, i)=> {
                            if(type === "full"){
                                return <img className="rate-big-star" key={i} src={fullStar} alt="Full star" />;
                            }
                            if (type === "half"){
                                return <img className="rate-big-star" key={i} src={halfStar} alt="Half star" />;
                            }
                            if (type === "empty"){
                                return <img className="rate-big-star" key={i} src={emptyStar} alt="Empty star" />;
                            }

                            return null;
                        })}
                    </div>
                </div>
            </section>
            <section id='societyInfos' className="container row text-start justify-content-between society-details">
                <div className="col-6">
                    <h2 className="fw-normal">{props.city}</h2>
                </div>
                <div className="col-6">
                    <h2 className="fw-normal">{props.speciality}</h2>
                </div>
                <div className="col-12 mb-3">
                    <h3 className="fw-normal fs-4"><a href={props.site} target="_blank" rel="noreferrer">{props.site}</a></h3>
                </div>   
            </section>
            <article id='societyAbout' className="container row society-details">
                <div className="col-8 text-start">
                    <p className="text-decoration-underline">A propos :</p>
                    <p className="light-blue">{props.about}</p> 
                </div>
                     
            </article>
        </div>
    )
}

export default DisplaySociety;
