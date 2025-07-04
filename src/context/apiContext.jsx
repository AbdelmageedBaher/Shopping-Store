import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export const apiContext = createContext()


export const ApiContextProvider =({children})=>{
    const url = 'https://dummyjson.com/products'
    const [allData , setAllData] = useState([])
    const [apiCategories , setApiCategories] = useState([])
  const [isLoading , setIsLoading]=useState(true);

  



  async function getAllData() {
    setIsLoading(true);
    const { data } = await axios.get(url);
    const sorted = [...data.products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setAllData(sorted);
    setIsLoading(false);
  }
async function GetAllCategories(){
    
    let {data} = await axios.get(`${url}/categories`) ;
    setAllData(data.products)
    setApiCategories(data)
}


async function getApiSpacificCategory(CatUrl) {
  const { data } = await axios.get(CatUrl);
  const sorted = [...data.products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  setAllData(sorted);
}


useEffect(()=>{
    getAllData()
    GetAllCategories()
    } , [])


return(
    <apiContext.Provider value={{allData , apiCategories , getApiSpacificCategory , isLoading , setIsLoading}}>
        {children}
    </apiContext.Provider>
)

}