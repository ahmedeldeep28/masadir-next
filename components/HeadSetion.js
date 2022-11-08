
function HeadSetion({ title, text }) {
    return (
        <div className="row my-3">
            <div className="col-md-6">
                <h2 className="fs-h3 text-primary mb-2">{title}</h2>
                <p className="fs-p1 text-gray lh-md">{text}</p>
            </div>
        </div>
    )
}

export default HeadSetion