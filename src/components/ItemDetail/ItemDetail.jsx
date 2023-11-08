import './style.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ itemSelected }) => {
  return (
  <div>
  <h2 className="card-title">{itemSelected?.title}</h2>
  <img src={itemSelected?. image} alt={itemSelected?.title} width={200} />
  <div className="card-description">
  <p>{itemSelected?.description}</p>
  </div>
  <h1>${itemSelected?.price}</h1>
    <h3>Añadir al carrito</h3>
    <ItemCount />
  </div>
  );
  };
  export default ItemDetail;