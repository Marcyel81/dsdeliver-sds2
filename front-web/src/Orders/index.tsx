import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect } from 'react';

function Orders() {

    useEffect(() => {
        console.log('component orders iniciou')
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}

export default Orders;