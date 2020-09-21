import React from 'react';

export const Button = ({ onClick, children }) => {
    const link = <a href='google'>Link</a>;

    return (
        <>
            <button onClick={onClick} className="botao-reutilizavel">
                {children}
            </button>
            {/* {link} */}
        </>
    )
} 