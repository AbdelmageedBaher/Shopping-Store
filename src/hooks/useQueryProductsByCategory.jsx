import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProductsByCategory(category){
    async function getProductByCategory(){
        let {data} = await axios.get(`https://dummyjson.com/products/category/${category}`)
        return data.products;
    }

    return useQuery({
        queryKey:['products',category],
        queryFn:getProductByCategory,
        enabled: !!category
    })
}