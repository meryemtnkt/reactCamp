import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    getByProductName(productName){
        return axios.get("https://jsonplaceholder.typicode.com/comments?title"+productName)
    }
}