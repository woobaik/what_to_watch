import React from 'react'
import './HorizontalDivider.styles.scss'

const HorizontalDivider = (props) => {
    return (
        <div className='HorizontalDivider'>
            {props.children}
        </div>
    )
}

export default HorizontalDivider
