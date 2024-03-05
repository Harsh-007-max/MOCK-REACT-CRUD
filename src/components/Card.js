export default function UserCard(props) {
    return (
        <>
            <div className="card m-5 " style={{ width: "18rem" }}>
                <img src={props.user.url} loading="lazy" className="card-img-top" alt="..." />
                <div className="card-body container">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <button onClick={props.onclick} type="button" className="btn btn-danger m-2">
                        Delete
                    </button>
                    <button onClick={props.open} type="button" className="btn btn-info m-2">Update</button>
                    {/* <Link to={`update/${props.user.id}`}  className="btn btn-info m-2">Update</Link> */}
                </div>
            </div>
        </>
    );
}