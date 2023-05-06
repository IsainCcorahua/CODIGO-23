import PropTypes from "prop-types";

const Product = (props) => {
    const {item} = props;

  return (
    <div className="card">
        <img src="{item.image}" className="car-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <button className="btn- btn-sm btn-primary">Ver producto</button>
        </div>
     
    </div>
      <div>Product</div>
      )
};
Product.propTypes = {
    item: PropTypes.object.isRequired
};

export default Product  