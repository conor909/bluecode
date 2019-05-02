import React from 'react';
import logo from '../../images/logo.svg';

export default () => (
    <div style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 0.2rem 0.25rem rgba(0,0,0,.075)',
        background: '#fefefe',
        height: '90px',
        width: '100%',
        padding: '1rem 1rem'
    }}>
        <img src={ logo } width={ '150px' } height={ 'auto' } alt='bluecode' />
        <div>
            <a href='https://www.conor-ui.com/' target='_blank'>
                conor mcgrath ui
            </a>
        </div>
    </div>
)