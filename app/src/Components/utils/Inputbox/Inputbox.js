import React from 'react';
import './Inputbox.css';

const ComponentsUtilsInputbox = ({ texto, tipo, desc, onChange, name, value }) => {
    return (
        <label className='componentsutilsinputbox__label'>
            {texto}
            <input
                type={tipo}
                placeholder={desc}
                name={name}
                className='componentsutilsinputbox__input'
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

export default ComponentsUtilsInputbox;