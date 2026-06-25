import fullStar from "../assets/img/full_star.svg";
import halfStar from "../assets/img/half_star.svg";
import emptyStar from "../assets/img/empty_star.svg";
import { Link} from "react-router-dom";
import renderStars from "../utils/renderStars";



/**
 * Displays an artisan summary card as a real navigation link.
 *
 * @param {object} props - Component properties.
 * @param {number|string} props.societyId - Artisan id used to build the detail page URL.
 * @param {string} props.societyName - Artisan or society name.
 * @param {number} props.note - Artisan rating displayed as stars.
 * @param {string} props.speciality - Artisan specialty.
 * @param {string} props.city - Artisan city.
 * @param {string} [props.display] - CSS class used to show or hide the optional picture container.
 * @param {string} [props.pictures] - Optional picture URL.
 * @param {string} [props.picturesAlt] - Alternative text for the optional picture.
 * @returns {JSX.Element} Linked card that navigates to the artisan detail page.
 */
const DisplayCard = (props) => {
  
    const rateNote = renderStars(props.note);
    
    return (

        <Link className="card mb-4 text-decoration-none text-reset"
            to={`/artisans/${props.societyId}`}
        >                   
            <div className="card-body">
                <div className={props.display}>
                    <img className='mt-5' src={props.pictures} alt={props.picturesAlt} />
                </div>
                <div className="row text-start mb-2">                    
                    <h3 className="card-title" >{props.societyName}</h3>
                </div>
                <div className="row justify-content-between">
                    <div className="col-6 text-start align-content-center">
                        <h4 className='card-subtitle'>{props.speciality}</h4>
                    </div>
                    
                    <div className="col-6 text-end">
                        {rateNote.map((type, i)=> {
                            if(type === "full"){
                                return <img className="rate-star" key={i} src={fullStar} alt="Full star" />;
                            }
                            if (type === "half"){
                                return <img className="rate-star" key={i} src={halfStar} alt="Half star" />;
                            }
                            if (type === "empty"){
                                return <img className="rate-star" key={i} src={emptyStar} alt="Empty star" />;
                            }

                            return null;
                        })}
                    </div>                
                    <div className="col-6 text-start mt-2 align-content-center">
                        <h4 className='card-subtitle'>{props.city}</h4>
                    </div>                    
                </div>                
            </div>            
        </Link>
        
    )
}

export default DisplayCard;
