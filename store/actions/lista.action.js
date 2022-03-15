import { API_URL } from "../../constants/Database"

export const GET_FONT = 'GET_FONT'

export const getFont = () => {
    return async dispatch => {
        try{
            dispatch({
                type: GET_FONT,
                status: 'loading',
              })

            //ejecutar la peticion
            const response = await fetch(`${API_URL}/fontaneros.json`)

            const result = await response.json();
            console.log('raw',result)

            const listaFontaneros = Object.keys(result).map(key =>({
                ...result[key],
                id: key,

            }))

            console.log('array', listaFontaneros )

            dispatch({
                type: GET_FONT,
                item: listaFontaneros, //.........................item por payload
                status: 'success',
            })

        }catch(error){
            console.log(error.message)
            dispatch({
                type: GET_FONT,
                status: 'error',
            })
        }
    }
}