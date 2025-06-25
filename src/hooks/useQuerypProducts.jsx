import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProducts(){
   
  function getProducts() {
    return axios.get(`https://dummyjson.com/products`);
  }

  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data?.data?.products,
  });
}