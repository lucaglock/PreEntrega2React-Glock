import './style.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    
    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=> setProductList(data))
        .catch((error)=>console.log(error));
    }

    useEffect(()=>{
        fetchProducts();
    }, [])

return <div>
    <h1>ILC</h1>
    <ItemCount />
    <ItemList productList={productList}/>
</div>
}

export default ItemListContainer;