import {Navigation} from "../navigation/index.jsx";
import {Footer} from "../footer/index.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
	return (
			<>
				<Navigation/>
				<Outlet/>
				<Footer/>
			</>
	);
};