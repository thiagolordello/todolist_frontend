import PropTypes from 'prop-types';
import React, { useState } from 'react';
import todolistContext from './to-do-list-Context';

export default function Provider({ children }) {
    const [ nameUser, setNameUser ] = useState('');
    const [ idUser, setIdUser ] = useState('');
    
    const myContext = {
        nameUser,
        setNameUser,
        idUser,
        setIdUser,
    };

    return (
        <todolistContext.Provider value={ myContext }>
            {children}
        </todolistContext.Provider>    
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};