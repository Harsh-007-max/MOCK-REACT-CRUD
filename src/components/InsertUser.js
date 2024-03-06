import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../images/1.jpg";
const apiURL = "https://65ded7efff5e305f32a09deb.mockapi.io/api/users";

export default function InsertUser(props) {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {

    if (id) {
      fetch(`${apiURL}/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }

  }, [])
  const insertUser = () =>
    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() =>
      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => props.setData(res))
    );
  const onInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const updateUser = (id) => {
      fetch(`${apiURL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      }).then(()=>navigate(-1));
  };
  return (
    <>
      <div className="card m-5 p-3" style={{ width: "18rem" }}>
      <img src={id?data.url:img} loading="lazy"  className="card-img-top mb-3"/>
        <input
          type="text"
          className="form-control mb-3"
          name="url"
          placeholder="Enter Image URL"
          value={id ? data.url : ""}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="name"
          placeholder="Enter Name"
          value={id? data.name  : ""}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="description"
          placeholder="Enter Description"
          value={id ? data.description : ""}
          onChange={(e) => onInputChange(e)}
        />
        {id ?<button className="btn btn-primary" onClick={() => updateUser(id)}>Update</button>:<button className="btn btn-primary" onClick={() => insertUser()}>Submit</button>}
      </div>
    </>
  );
}
