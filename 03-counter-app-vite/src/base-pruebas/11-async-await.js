

export const getImagen = async() => {

    try {
//aNmmWIojaXOsG10xKoNWWN7eNP5OI3IY
        const apiKey = 'aNmmWIojaXOsG10xKoNWWN7eNP5OI3IY';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        // const { url } = data;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



