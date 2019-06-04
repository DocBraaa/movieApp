const API_TOKEN = 'daade523b39423e37174ffc4f7282efe';
import axios from 'axios';

export function search(text,page){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`
    return axios.get(url)
        .then(response => {
            return response.data;
        });
}

export function findAllTrends(page){
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_TOKEN}&language=fr&page=${page}`
    return axios.get(url)
        .then(response => {
            return response.data;
        },
        err=>{
            console.err(err)
        });
}

export function getById(id){
    
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`
    return axios.get(url)
        .then(response => {
            return response.data;
        },
        err=>{
            console.err(err)
        });
}

export function getImage(name){
    return 'https://image.tmdb.org/t/p/w300' + name;
}