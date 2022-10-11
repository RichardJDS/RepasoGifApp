export const getGifs = async (category)=>{
    const key = "771idINteBFk5yLpyPyzKc0LrFfAt6Db";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&limit=10&api_key=${key}`;
    // COLOCAMOS encondeURI para que lo coloque en formato de URL %20 etc,,,
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url,
        }
    })
    // console.log(gifs);
    // setImages(gifs);

    return gifs;

}