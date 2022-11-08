
function FeatureCard({ title, text, icon }) {
  return (
    <div className="feature-card text-center p-3">
      <div className="header">
        <i className={`${icon} icon`}></i>
      </div>
      <div className="body">
        <h3 className="fs-h5 my-3">{title}</h3>
        <p className="fs-p2 lh-md text-gray">{text}</p>
      </div>
    </div>
  )
}

export default FeatureCard