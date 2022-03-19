import * as FileSystem from 'expo-file-system';
import MAP from '../../constants/Map';

export const ADD_FONT = 'ADD_FONT'


export const addFont = (title, image, location) => {
    return async dispatch => {
        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`)
            const data = await response.json()
            const address = data.results[0].formatted_address;

            dispatch ({ 
                type: ADD_FONT, 
                payload: {
                    title, 
                    image: Path,
                    address: address,
                    lat: location.lat,
                    lng: location.lng,
                }
            })
            
        }catch(err){
            console.log(err)
            throw err;
        }

        
    }
}