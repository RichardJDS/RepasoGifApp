import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
    getGifs(category)
      .then(setImages)
    },[])



/*
    getGifs(category)
    .then(setImages)
  si lo dejo sin el useEffect es un bucle, por que inicialmente carga el componente y ejecuta lo sincrono
  POR LO CUAL retorna un elemento JSX vacio, pero una vez que cargue el fetch al API, le diremos que lo aplique
  al SETIMAGES el cual es una funcion que maneja HOOOK un estado, y una vez que se ejecuta renderiza el componente
  y por ende como no hay ujn useEffet vuelve a ejecutar el getgifs y asi infinitas veces un bucle
*/
    /*Use Efect es para que solo se ejecute una funcion una unica vez recibe  
    useEffect(callback que se va a ejecutar, lista de dependencias) , si la lista de dendencias es una arreglo
    vacio solo se ejecutara ese metodo una vez []
    */
    
    
    /*SOLO SE RENDERICA EL COMPONENTE DONDE ESTA colocado el hook, no renderiza componentes padres*/ 
    // const getGifs = async ()=>{
    //     const key = "771idINteBFk5yLpyPyzKc0LrFfAt6Db";
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&limit=10&api_key=${key}`;
    //     // COLOCAMOS encondeURI para que lo coloque en formato de URL %20 etc,,,
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map((img)=>{
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url:img.images?.downsized_medium.url,
    //         }
    //     })
    //     console.log(gifs);
    //     setImages(gifs);

    
    // getGifs();




  return (
    <>
    <h3>{category}</h3>
    <div className='card-grid'>   
            {
                images.map((img)=>{
                  return  <GifGridItem {...img} key={img.id}/>;
                })
                // Map realiza una transformacion de la fuente de datos
            }
        
    </div>
    </>
  )
}
