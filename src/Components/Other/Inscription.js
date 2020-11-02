import React from 'react';


export const Inscription = ({ inscription, simple = false }) => {
    let value = (!simple) ? "inscription" : "";
    return (
        <p className={value}>{inscription}</p>
    );
};