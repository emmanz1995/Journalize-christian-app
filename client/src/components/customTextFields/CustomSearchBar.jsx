import React from 'react';
import styled from 'styled-components';

function CustomSearchBar({ type, name, className, placeholder, inputValue, changeInput }) {
    return (
        <div className="form-control">
            <input type={type} name={name} value={inputValue} onChange={changeInput} className={className} placeholder={placeholder} />
        </div>
    );
}

export default CustomSearchBar;
