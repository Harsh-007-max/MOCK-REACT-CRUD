import { lazy, Suspense } from 'react';
const CardImage = lazy(() => import('./CardImage'));
export default function UserCard(props) {
    return (
        <>
            <div className="card m-5 " style={{ width: "18rem" }}>
                {/* <img src={props.user.url||" "} loading="lazy" className="card-img-top" alt="..." /> */}
                <Suspense fallback={
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                }>
                    <CardImage url={props.user.url} className="card-image-top" />
                </Suspense>
                <div className="card-body container">
                    <h5 className="card-title">{props.user.name || " "}</h5>
                    <p className="card-text">{props.user.description || " "}</p>
                    <button onClick={props.onclick} type="button" className="btn btn-danger m-2">
                        Delete
                    </button>
                    <button onClick={props.open} type="button" className="btn btn-info m-2">Update</button>
                </div>
            </div>
        </>
    );
}