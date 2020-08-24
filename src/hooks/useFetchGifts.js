import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifts"

export const useFetchGifts = ( category , limit) => {

    const [State, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs( category, limit )
            .then( img => {               
                setState({
                    data: img,
                    loading: false
                })        
            })
    }, [ category, limit ])

  
    return State;
}
