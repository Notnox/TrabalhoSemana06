import React from 'react';
import './TextAreabox.css';

const ComponentsUtilsTextAreabox = ({ texto, onChange, name }) => {
    return (
        <label className='componentsutilsinputbox__label'>
            {texto}
            <textarea
                className='componentsutilsinputbox__textarea'
                name={name}
                onChange={onChange}
            />
        </label>
    );
}

export default ComponentsUtilsTextAreabox;