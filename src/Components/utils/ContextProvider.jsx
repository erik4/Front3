import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
	const [odontologos, setOdontologos] = useState([]);

	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => setOdontologos(res.data))
		.catch((error) => console.log(error));

	return (
		<ContextGlobal.Provider value={{ odontologos, setOdontologos }}>
			{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider;

export const useContextGlobal = () => {
	return useContext(ContextGlobal);
};