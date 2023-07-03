export default function Cards() {
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="card-img-top" role="img" alt="..." preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: Image cap">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
        
    )
}
