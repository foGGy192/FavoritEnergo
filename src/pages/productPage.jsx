import { Product } from "../components/product/Product";
import { PhoneForm } from "../components/contacts";
import { useParams } from 'react-router-dom';
import { productData } from "../components/product/data";


export const ProductPage = () =>{

    const { id } = useParams();
    const product = productData.products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Товар не найден</div>;
      }

    return(
        <main>
            <Product product={product} />
            <PhoneForm/>
        </main>
    );
}