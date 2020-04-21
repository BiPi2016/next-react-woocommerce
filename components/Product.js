import Link from 'next/link';
const Product = (props) => {
    //console.log(props.product);
    const prod = props.product;
    const gearBoxAttr = prod.attributes.filter( p => p.name.toLowerCase() == 'växellåda');
    const gearBox = gearBoxAttr.length == 1 ? gearBoxAttr[0].options[0] : 'N/A';
    const yearModelAttr = prod.attributes.filter( p => p.name.toLowerCase() == 'årsmodell');
    const yearModel = yearModelAttr.length == 1  ? yearModelAttr[0].options[0] : 'N/A';
    const drivmedelAttr = prod.attributes.filter( p => p.name.toLowerCase() == 'drivmedel');
    const drivmedel = drivmedelAttr.length == 1 ? drivmedelAttr[0].options[0] : 'N/A';
    const odometerAttr = prod.attributes.filter( p => p.name.toLowerCase() == 'mätarställning');
    const odometer = (odometerAttr && odometerAttr.length > 0) ? odometerAttr[0].options[0] : 'N/A';    
    const horsePowerAttr = prod.attributes.filter( p => p.name.toLowerCase() == 'hästkraft');
    const horsePower = (horsePowerAttr && horsePowerAttr.length > 0) ? horsePowerAttr[0].options[0] : 'N/A';
    
    return(   
        <Link href={`/product/?slug=${prod.slug}&id=${prod.id}`} as={`/product/${prod.slug}/${prod.id}`}>  
        <a>              
        <div className="carCard">
            <img src={prod.images[0].src} alt={prod.name} className="prodImage"/>
            <div className="carData">
                <p className="carName">{prod.name}</p>
                <Price 
                    price={prod.price} 
                    salePrice={prod.sale_price} 
                    regularPrice={prod.regular_price}/>
                <p className="infoField">
                    <span className="attributeLabel">Växellåda</span>
                    <span className="attributeValue">
                        { gearBox }
                    </span>
                </p>
                <p className="infoField">
                    <span className="attributeLabel">Drivmedel</span>
                    <span className="attributeValue">
                        {drivmedel}
                    </span>
                </p>
                <p className="infoField">
                    <span className="attributeLabel">Årsmodell</span>
                    <span className="attributeValue">
                        {yearModel}
                    </span>
                </p>
                <p className="infoField">
                    <span className="attributeLabel">Mätarställning</span>
                    <span className="attributeValue">
                        {odometer} Km
                    </span>
                </p>
                <p className="infoField">
                    <span className="attributeLabel">Hästkraft</span>
                    <span className="attributeValue">
                        {horsePower}
                    </span>
                </p>
            </div>
        </div> 
        </a>       
        </Link> 
    );
}

const Price = (props) => {
    if(props.salePrice) {
        console.log("salePrice is " + props.salePrice + " and price is " + props.regularPrice);
        return(
            <p className="salePriceDisplayer">
                <span className="oldPrice">{props.regularPrice}</span>
                <span className="discountedPrice">{props.salePrice} sek</span>
            </p>
        );
    }
    return(
        <p className="carPrice">{props.price} sek</p>
    );
}

export default Product