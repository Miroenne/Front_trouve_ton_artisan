const DisplayCard = (props) => {


    return (
        <div className="card" >            
            <div className="card-body">
                <img className={props.display + 'mt-5'} src={props.pictures} alt={props.picturesAlt} />
                <h5 className="card-title">{props.societyName}</h5>
                <p className="card-text">{props.note}</p>
                <p className='card-text'>{props.speciality}</p>
                <p className='card-text'>{props.city}</p>
            </div>
        </div>
    )
}

export default DisplayCard;