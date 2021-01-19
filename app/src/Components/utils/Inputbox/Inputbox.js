import React from 'react';
import './Inputbox.css';

const ComponentsUtilsInputbox = ({ texto, tipo, desc }) => {
    return (
        <label className='componentsutilsinputbox__label'>
            {texto}
            <input
                type={tipo}
                placeholder={desc}
                className='componentsutilsinputbox__input'
            />
        </label>
    );
}

export default ComponentsUtilsInputbox;