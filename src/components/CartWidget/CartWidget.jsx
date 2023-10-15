import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
    <div>
        <Icon.Cart 
        size={28}/>
        <div>
            <span>3</span>
        </div>
    </div>
    );
};

export default CartWidget
