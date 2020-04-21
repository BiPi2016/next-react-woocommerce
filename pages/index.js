import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

import clientConfig from '../clientConfig';
import Products from '../components/Products';

const Index = (props) => {
    return(
        <Layout>
            <p>All Products</p>
            <Products products={props.products} /> 
        </Layout>
    );
}

 Index.getInitialProps = async () => {
    const result = await fetch(`${clientConfig.siteURL}/products`);
    const prodData = await result.json();
    return {
        products: prodData
    }
 }

export default Index;