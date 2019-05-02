import React from 'react';

export default function NumberInput(props) {

    const styles = {
        borderRadius: '5px',
        border: `2px solid ${ props.color }`,
        background: 'white',
        color: `${ props.color }`,
        fontSize: '2rem',
        lineHeight: 1,
        textAlign: 'center',
        width: '100%'
    }

    return (
        <input
            type='number'
            placeholder='Enter up to 19 digits'
            onChange={ (e) => props.onChange(e.target.value) }
            value={ props.value }
            style={ styles } />
    )
}