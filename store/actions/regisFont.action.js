import { API_URL } from "../../constants/Database"

export const CONFIRM_FONT = 'CONFIRM_FONT'

export const confirmFont = (text) => {
    return async dispatch => {
        try{
            //ejecutar la peticion
            const response = await fetch(`${API_URL}/fontaneros.json`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: text,
                })
            })

            const result = await response.json();
            console.log(result)

            dispatch({
                type: CONFIRM_FONT,
                confirm: true,

            })

        }catch(error){
            console.log(error.message)
            dispatch({
                type: CONFIRM_FONT,
                confirm: false,
                error: error.message,
            })
        }
    }
}