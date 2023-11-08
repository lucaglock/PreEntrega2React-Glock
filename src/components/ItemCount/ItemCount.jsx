import { useState } from "react"
import './style.css'

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const stock = 5;

    const onAdd = () => {
        if (count === stock) return
        setCount(count + 1);
    }
    const onSubtract = () => {
        if(count === 0) return;
        setCount(count - 1);
    }
    return (
    <div>
        <button onClick={onSubtract}>-</button>
        <span className="count">{count}</span>
        <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount