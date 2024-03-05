import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import img from "../images/1.jpg";
export default function UpdateUser(props) {
    const [data, setData] = useState({});
    const { id } = useParams();
    const apiURL = props.apiURL;
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${apiURL}/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);
    const onInputChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });
    const updateUser = (id) => {
        fetch(`${apiURL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(() => navigate(-1));
    };
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="card m-5 p-3" style={{ width: "20rem" }}>
                    <img src={data.url} loading="lazy" alt={img} className="card-img-top mb-3"/>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="url"
                        value={data.url ? data.url : ""}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="name"
                        value={data.name ? data.name : ""}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="description"
                        value={data.description ? data.description : ""}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button className="btn btn-primary" onClick={() => updateUser(id)}>
                        Update
                    </button>
                </div>
            </div>
        </>
    );
}
{/* <div className="card m-5 p-3" style={{ width: "18rem" }}>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="url"
                    value={data.url ? data.url : ""}
                    onChange={(e) => onInputChange(e)}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="name"
                    value={data.name ? data.name : ""}
                    onChange={(e) => onInputChange(e)}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="description"
                    value={data.description ? data.description : ""}
                    onChange={(e) => onInputChange(e)}
                />
                <button className="btn btn-primary" onClick={() => updateUser(id)}>
                    Update
                </button>
            </div> */}
