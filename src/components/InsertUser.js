import { useState } from "react";
export default function InsertUser(props) {
  const [data, setData] = useState({});
  const insertUser = () =>
    fetch(props.apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() =>
      fetch(props.apiURL)
        .then((res) => res.json())
        .then((res) => props.setUsers(res))
    );
  const onInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <>
      <div className="card m-5 p-3" style={{ width: "18rem" }}>
        <input
          type="text"
          className="form-control mb-3"
          name="url"
          placeholder="Enter Image URL"
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="name"
          placeholder="Enter Name"
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="description"
          placeholder="Enter Description"
          onChange={(e) => onInputChange(e)}
        />
        <button className="btn btn-primary" onClick={() => insertUser()}>
            Submit
          </button>
      </div>
    </>
  );
}
