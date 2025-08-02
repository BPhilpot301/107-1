// imports
import { useState, useEffect } from "react";
import DataService from "../services/DataService";
import Product from "../components/Product";
// logic
function Catalog() {
    //State to store the products
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // load catalog fuction
    const loadCatalog = async () => {
        try {
            setLoading(true);
            const prods = await DataService.getProducts();
            setProducts(prods);
        } catch (error) {
            console.error("Error loading products", error);
        } finally {
            setLoading(false);
        }
    };

    //useEffect to load products when component mounts
    useEffect(() => {
        loadCatalog();
    }, []);//Empty dependency array

    if (loading) {
        return (
            <p>Loading products...</p>
        )
    }

    return (
        <div>
            <h2>Product Catalog</h2>
            <p>Showing {products.length}</p>
            <div>
                {products.map(product => <Product data={product} />)}
            </div>
            {/*
         for (i=0;i<products.lenght;i++)
         {
         product=products[i]
        }
        */}
        </div>
    )

}

// export
export default Catalog;