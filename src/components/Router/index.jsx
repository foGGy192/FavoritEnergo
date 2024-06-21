import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Layout} from "../Layout/index.jsx";
import { ReviewPage } from "../../pages/review.jsx";
import { AboutPage } from "../../pages/About.jsx";
import { CatalogPage } from "../../pages/CatalogPage.jsx";
import { ProductPage } from "../../pages/productPage.jsx";
import { productData } from "../product/data.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "/",
				element: <CatalogPage/>
			},
			{
				path: "Review",
				element: <ReviewPage/>
			},
			{
				path: "About",
				element: <AboutPage/>
			},
			{
				path: "product",
				element: <ProductPage/>
			},
			{
				path: "product/:id",
				element: <ProductPage/>
			},
			
		]
		
	},	
]);


  


export const Router = () => {
	return (
			<>
				<RouterProvider router={router}/>
			</>
	);
};