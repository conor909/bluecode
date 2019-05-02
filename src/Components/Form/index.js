import React from 'react'
import { NumberInput, ColorPicker } from '../../Components';

export default function Form(props) {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <ColorPicker color={ props.colors.primary } onChange={ props.handlePrimaryColorChange } />
                <ColorPicker color={ props.colors.secondary } onChange={ props.handleSecondaryColorChange } />
            </div>

            <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem' }}>

                    <NumberInput
                        color={ props.colors.primary }
                        value={ props.input  }
                        onChange={ props.updateForm } />
                    
                    <h1 style={{
                        color: props.colors.secondary,
                        margin: '0 1rem',
                        padding: '0px 5px',
                        borderRadius: '5px',
                        border: `2px solid ${ props.colors.secondary }` } }>
                            { props.checkSum }
                    </h1>
        
            </div>

        </div>
    )

}