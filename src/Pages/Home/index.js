import React, { useState } from 'react';
import { useWindowSize } from '../../hooks';
import { Form, Bar } from '../../Components';
import { checkSum } from '../../utils';

function Home() {

    const windowSize = useWindowSize();
    const [ inputNumber, setInputNumber ] = useState('');
    const [ colors, setColors ] = useState({ primary: '#2196f3', secondary: 'pink' })

    function handleUpdateForm(val) {
        if (val.toString().length > 19) return;
        setInputNumber(val)
    }

    
    function getCheckSum() {
        return checkSum(inputNumber);
    }

    function handlePrimaryColorChange(color) {
        setColors({
            ...colors,
            primary: color
        })
    }

    function handleSecondaryColorChange(color) {
        setColors({
            ...colors,
            secondary: color
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: windowSize === 'small' ? 'column-reverse' : 'row',
            height: '100%'
        }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: '90px', background: 'white' }}>
                    <Form
                        colors={ colors }
                        handlePrimaryColorChange={ handlePrimaryColorChange }
                        handleSecondaryColorChange={ handleSecondaryColorChange }
                        checkSum={ getCheckSum() }
                        input={ inputNumber }
                        updateForm={ (value) => handleUpdateForm(value) } />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '90px',background: '#004799' }}>
                    {
                        inputNumber.split('').map((num, i) => (
                            <Bar key={ i } number={ parseInt(num) } color={ colors.primary } />)
                        )
                    }
                    {
                        inputNumber.split('').length > 0 &&
                            <Bar number={ getCheckSum() } color={ colors.secondary } />
                    }
                </div>
        </div>
    );
}

export default Home;