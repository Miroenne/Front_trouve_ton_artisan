import fullStar from "../assets/img/full_star.svg";
import halfStar from "../assets/img/half_star.svg";
import emptyStar from "../assets/img/empty_star.svg";
import { useNavigate } from "react-router-dom";
import renderStars from "../utils/renderStars";




const DisplayCard = (props) => {
  
    const navigate = useNavigate();
    const rateNote = renderStars(props.note);

    return (
        <div className="card mb-4" onClick={() => navigate('/Artisan', {state:{
            name: props.societyName
        }})} >            
            <div className="card-body">
                <div className={props.display}>
                    <img className='mt-5' src={props.pictures} alt={props.picturesAlt} />
                </div>
                <div className="row text-start mb-2">                    
                    <h5 className="card-title" >{props.societyName}</h5>
                </div>
                <div className="row justify-content-between">
                    <p className='card-text col-6 text-start'>{props.speciality}</p>
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
                    
                    <p className='card-text col-6 text-start'>{props.city}</p>
                </div>
                
            </div>
        </div>
    )
}

export default DisplayCard;
