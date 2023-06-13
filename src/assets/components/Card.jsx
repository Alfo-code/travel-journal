export default function Card(props) {
  
  return (
    <>
    <div className="card">
        <img className="image" src={props.imageUrl} alt="image" />
        <span className="location">{props.location}</span>
        <span className="link"><a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
        <h1 className="title">{props.title}</h1>
        <span className="date">{props.startDate}</span>
        <span className="date">{props.endDate}</span>
        <p className="description">{props.description}</p>
    </div>
    <div className="line"></div>
    </>
  )
}
