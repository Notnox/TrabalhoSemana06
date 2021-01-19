import React from 'react';

const ComponentsUtilsInputbox = ({ texto, tipo, desc }) => {
    return (
        <label>
            {texto}
            <input type={tipo} placeholder={desc}/>
        </label>
    );
}

export default ComponentsUtilsInputbox;