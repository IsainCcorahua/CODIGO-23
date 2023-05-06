const producto = (props) => (
<div className="col-md-3">
  <div className="card" style="width: 18rem;">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.prop.title}</h5>
      <p className="card-text">{props.prop.description}</p>
      <a href="#" className="btn btn-primary">Ver más</a>
      </div>
    </div>
</div>

);

export default producto