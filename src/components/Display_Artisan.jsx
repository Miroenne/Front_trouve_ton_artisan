import fullStar from "../assets/img/full_star.svg";
import halfStar from "../assets/img/half_star.svg";
import emptyStar from "../assets/img/empty_star.svg";
import renderStars from "../utils/renderStars";


const DisplaySociety = (props) => {
    
    const rateNote = renderStars(props.note);
    
   
    return(
        <div className="container-fluid p-0">
            <div className="container mx-0 p-0 row mb-5">
                <div className="col-6 text-start">
                    <img id="societyPic" src={props.picture} alt={"photo " + props.name} />
                </div>
                <div className="col-6 text-start">
                    <div className="container">
                        <h1>{props.name}</h1>
                    </div>                    
                    <div className="text-start">
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
            </div>
            <div className="container row text-start society-details">
                <div className="col-6">
                    <p><strong>{props.city}</strong></p>
                </div>
                <div className="col-6">
                    <p><strong>{props.speciality}</strong></p>
                </div>
                <div className="col-6">
                    <a href={props.site} target="_blank" rel="noreferrer">{props.site}</a>
                </div>   
            </div>
            <div className="container row society-details">
                <div className="col-8 text-start">
                    <p className="text-decoration-underline">A propos :</p>
                    <p className="light-blue">{props.about}</p> 
                </div>
                     
            </div>
        </div>
    )
}

export default DisplaySociety;
