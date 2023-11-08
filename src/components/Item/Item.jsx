import './style.css'

const Item = ({ title, description, price, image }) => {
  return (
    <div className='card-container'>
        <h4 className='card-title'>{title}</h4>
        <img src={image} alt={title} width={70} />
        <div className='card-description'>
            <p>{description}</p>
        </div>

        <h5>${price}</h5>
    </div>
  );
};

export default Item