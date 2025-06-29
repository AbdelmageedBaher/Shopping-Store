import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCategories(){
    async function getCategories(){
        let {data}= await axios.get(`https://dummyjson.com/products/categories`)
        return data;
    }

    return useQuery({
        queryKey:['Categories'],
        queryFn:getCategories
    })
}