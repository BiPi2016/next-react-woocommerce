import fetch from 'isomorphic-unfetch';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

import Product from './product.js';

const Products = (props) => {
    console.log(props.products[0]);
    if(props.products.length == 0) {
        return null;
    }
    return(
        <div>
            <ul className="productShowcase">
                {props.products.map( product => {
                    return <Product product={product} key={product.name} />
                })}
            </ul>
        </div>
    );
}

export default Products; 
 