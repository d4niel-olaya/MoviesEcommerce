import { get } from "../../service/api";


export class Shopping
{
    constructor(movies){
        this.movies = movies;
    }
    render(){
        this.movies.forEach(element => {
            console.log(element.id);
        });
    }

}