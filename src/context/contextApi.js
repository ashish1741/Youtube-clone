import React,{createContext,useState,useEffect} from "react";
import { fetchDataFromApi } from "../utlis/api";
export const Context   = createContext();


export const AppContext = (props) =>{
    //state 
    const [loading, setloading] = useState(false)
    const [searchResult, setsearchResult] = useState([]);
    const [selectCategories, setselectCategories] = useState("new")
    const [mobileMenu, setmobileMenu] = useState(false);

//use effect hooks 

useEffect(() => {
    fetchselectCategorieData(selectCategories)


}, [selectCategories]);




const fetchselectCategorieData = (query)  =>{
    setloading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
        setloading(false)
        setsearchResult(contents);
    })

}


return(
    <Context.Provider value={{
        loading,
        setloading,
        searchResult,
        setsearchResult,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setmobileMenu,
    }}>
        {props.children}
    </Context.Provider>
)
};
