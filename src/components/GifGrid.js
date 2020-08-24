//import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem'


const GifGrid = ( { category, limit } ) => {

    const { data: images, loading } = useFetchGifts( category, limit );        

    return (
       <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>  
            <h2 className="animate__animated animate__fadeIn">Gifts: { limit }</h2>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">        
            {
                images.map( img => (
                    <GifGridItem 
                    key={img.id}
                    {...img}  />
            ))
            }
        
            </div>
       </>
    )
}


export default GifGrid
