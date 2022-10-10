import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);


    useEffect(() => {
    getGifs();
    },[])
    /*Use Efect es para que solo se ejecute una funcion una unica vez recibe  
    useEffect(callback, lista de dependencias) , si la lista de dendencias es una arreglo
    vacio solo se ejecutara ese metodo una vez []
    */
    
    
    /*SOLO SE RENDERICA EL COMPONENTE DONDE ESTA colocado el hook, no renderiza componentes padres*/ 
    const getGifs = async ()=>{
        const key = "771idINteBFk5yLpyPyzKc0LrFfAt6Db";
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=${key}`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url:img.images?.downsized_medium.url,
            }
        })
        console.log(gifs);

    }
    // getGifs();


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <h2>{count}</h2>
        <h3>{category}</h3>
    </div>
  )
}
