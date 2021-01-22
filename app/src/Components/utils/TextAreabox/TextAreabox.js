import React from 'react';
import './TextAreabox.css';

const ComponentsUtilsTextAreabox = ({ texto, onChange, name, value }) => {
    return (
        <label className='componentsutilsinputbox__label'>
            {texto}
            <textarea
                className='componentsutilsinputbox__textarea'
                name={name}
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

export default ComponentsUtilsTextAreabox;