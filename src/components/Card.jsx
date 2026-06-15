import fullStar from "../assets/img/full_star.svg";
import halfStar from "../assets/img/half_star.svg";
import emptyStar from "../assets/img/empty_star.svg";


function renderStars(note){
        const maxStars = 5;
        const fullStars = Math.floor(note);
        const hasHalfStar = note % 1 >= 0.5;

        const stars = [];

        for(let i = 0; i < maxStars; i++){
            if(i < fullStars){
                stars.push("full");
            }else if (i === fullStars && hasHalfStar) {
                stars.push("half");
            }else {
                stars.push("empty");                    
            }
        }

        return stars;
    }

const DisplayCard = (props) => {
  
    

    const rateNote = renderStars(props.note);

    return (
        <div className="card mb-4" >            
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
                                return <img className="rateStar" key={i} src={fullStar} alt="Full star" />;
                            }
                            if (type === "half"){
                                return <img className="rateStar" key={i} src={halfStar} alt="Half star" />;
                            }
                            if (type === "empty"){
                                return <img className="rateStar" key={i} src={emptyStar} alt="Empty star" />;
                            }
                        })}
                    </div>                
                    
                    <p className='card-text col-6 text-start'>{props.city}</p>
                </div>
                
            </div>
        </div>
    )
}

export default DisplayCard;