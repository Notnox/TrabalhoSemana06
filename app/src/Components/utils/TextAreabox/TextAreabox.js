import React from 'react';
import './TextAreabox.css';

const ComponentsUtilsTextAreabox = ({ texto }) => {
    return (
        <label className='componentsutilsinputbox__label'>
            {texto}
            <textarea className='componentsutilsinputbox__textarea'/>
        </label>
    );
}

export default ComponentsUtilsTextAreabox;