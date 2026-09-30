import { useState } from 'react';
import './CartItem.css';
function CartItem(props){
    const [count, setQuantity] = useState(1);
    return(
        <div className="cart-item">
            <h3>{props.name}</h3>
            <p>اﻟﺴﻌﺮ: {props.price} دوﻻر</p>
            <p>الكمية: {count}</p>
            <button onClick={() => setQuantity(count + 1)}> إﺿﺎﻓﺔ</button>
            <button onClick={() => setQuantity(count > 0 ? count - 1 : 0)}>إﻧﻘﺎص</button>
            <p>المجموع: {count * props.price} دوﻻر</p>
        </div>
    );

}
export default CartItem;