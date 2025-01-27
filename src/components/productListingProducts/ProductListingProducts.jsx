import React from 'react'
import testPhoto from "../../assets/testPhoto";
import ProductItem from "../productItem/ProductItem";
import ProductListingPagination from "../productListingPagination/ProductListingPagination";

const productsList = [
    {
        "brand":{
            "idb":1,
            "name":"Fossil"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":399.99,
        "discountPrice":null,
        "photoList":[
            {
                "photoId":1212121,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":2,
            "name":"Rolex"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":12999.99,
        "discountPrice":11300.99,
        "photoList":[
            {
                "photoId":13232332,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":9,
            "name":"Casio"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":69.99,
        "discountPrice":62.99,
        "photoList":[
            {
                "photoId":1322212,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":8,
            "name":"Swatch"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":129.99,
        "discountPrice":99.99,
        "photoList":[
            {
                "photoId":1388712,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    }
]

const ProductListingProducts = ({filtersHidden})=>{
    return(
        <>
            <div className={`w-full ${filtersHidden && "sm:col-span-2"} order-4 sm:order-none`}>
                <div className={`grid grid-cols-1  ${filtersHidden?"sm:grid-cols-2":"sm:grid-cols-1"} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 gap-4`}>
                    {productsList.map((item,index)=>{
                        return <ProductItem key={index} product={item}/>
                    })}
                    {productsList.map((item,index)=>{
                        return <ProductItem key={index} product={item}/>
                    })}
                    {productsList.map((item,index)=>{
                        return <ProductItem key={index} product={item}/>
                    })}
                </div>
                <ProductListingPagination/>
            </div>
        </>
    )
}

export default ProductListingProducts
