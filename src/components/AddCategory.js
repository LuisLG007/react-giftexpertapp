import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, setLimit }) => {

    const [inputValue, setinputValue] = useState('');
    const [inputLimit, setInputLimit] = useState('');

    

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleLimitChange = ( e ) => {
        setInputLimit( e.target.value );        
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();       
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ]);
            setinputValue('');
            setLimit( inputLimit );           
            setInputLimit('');
        }
    }
    return (
        <div>
            <input 
            type = "text"
            placeholder = "Buscar"
            value = { inputValue }
            onChange = { handleInputChange }
            />
            <input 
            type = "number"
            placeholder = "Número de Gifts"
            value = { inputLimit }
            onChange = { handleLimitChange }
            />
            <button onClick={ handleSubmit }>Buscar...</button>
        </div>
    )
}

//se escribe propType y al asignar es PropTypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


