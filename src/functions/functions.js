import axios from "axios";

export const httpRequestPublications = async (state)=>{
    const peticion=await axios.get('https://jsonplaceholder.typicode.com/posts');
    state(peticion.data)
}