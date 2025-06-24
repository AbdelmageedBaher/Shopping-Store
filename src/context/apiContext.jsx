import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export const apiContext = createContext()


export const ApiContextProvider =({children})=>{
    const url = 'https://dummyjson.com/products'
    const [allData , setAllData] = useState([])
    const [apiCategories , setApiCategories] = useState([])


   async function getAllData(){

    let {data} = await axios.get(url) ;
    setAllData(data.products)
    
    
    
}
async function GetAllCategories(){
    
    let {data} = await axios.get(`${url}/categories`) ;
    setAllData(data.products)
    setApiCategories(data)
}

async function getApiSpacificCategory(CatUrl) {
    let {data} = await axios.get(CatUrl)
    setAllData(data.products)
    }

    useEffect(()=>{
        getAllData()
        GetAllCategories()
    } , [])


return(
    <apiContext.Provider value={{allData , apiCategories , getApiSpacificCategory}}>
        {children}
    </apiContext.Provider>
)

}