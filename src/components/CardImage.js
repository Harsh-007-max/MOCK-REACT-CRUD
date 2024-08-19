export default function CardImage(props){
    return(<img src={props.url||" "} loading="lazy" className="card-img-top" alt="..." />);
}