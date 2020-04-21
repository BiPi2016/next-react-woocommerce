import Layout from '../components/Layout';

//import fetch from 'isomorphic-unfetch';

import clientConfig from '../clientConfig';
import {url} from '../util/woocommerce';

import {withRouter} from 'next/router';
const Product = (props) => {
    console.log(url);
    return(
        <Layout>
            Implementing the product page
            <main>
                <h1>{url}</h1>
                <h1>{props.router.pathname}</h1>
                <h1>{Object.entries(props.router.query)}</h1>
            </main>
        </Layout>
    );
}

Product.getInitialProps = async (ctxt) => {
    const {query:{slug, id}} = ctxt;
    console.log(slug);
    console.log(id);
    const result = await fetch(`${url}/product/${slug}`, {
        mode: 'no-cors'
    });
    console.log(result);
    const prodData = await result.json();
    return {
        product: prodData
    }
 }



export default withRouter(Product);