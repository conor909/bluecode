import React, { useState } from 'react';
import { SwatchesPicker } from 'react-color';

function ColorPicker (props) {

    const [ isOpen, setIsOpen ] = useState(false);

    function handleOnChangeComplete(color) {
        props.onChange(color.hex);
        setIsOpen(false);

    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100px', height: '100px', background: props.color }} onClick={ () => setIsOpen(!isOpen) } />
            {
                isOpen &&
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                        <SwatchesPicker color={ props.color } onChangeComplete={ handleOnChangeComplete } />
                    </div>
            }
        </div>
    )
}

export default ColorPicker;