import { Banner } from "../components/banner/index.jsx";
import { Catalog } from "../components/catalog/index.jsx";
import { PhoneForm } from "../components/contacts/index.jsx";


export const CatalogPage = () =>{
    return(
        <main>
            <Banner/>
            <Catalog/>
            <PhoneForm/>
        </main>
    );
}