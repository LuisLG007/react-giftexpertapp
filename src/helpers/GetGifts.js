export const getGifs = async( category, limit ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category  ) }&limit=${ encodeURI( limit  ) }&api_key=KmRKEUZr2yEQ2LAnbmvbGN3UbypS5rWm`
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gits = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gits;
}