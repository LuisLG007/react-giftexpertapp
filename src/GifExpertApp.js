import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragón Ball'];

    const [categories, setCategories] = useState(['One Punch'])
    const [limit, setLimit] = useState(2)
    /*
    const handleAdd = () => {
        setCategories( cats => [... categories, 'HunterXHunter']);
    }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }
                setLimit={ setLimit } />
            <hr/>
        
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                            limit={ limit } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
