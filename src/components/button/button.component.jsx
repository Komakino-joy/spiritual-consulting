import React from 'react'

import './button.styles.css'

const Button = ({children, ...props  }) => {
    return (
        <div>
            <button
            style={{
                color:props.color,
                backgroundColor:props.bgcolor
            }}
            >{children}</button>
        </div>
    )
}

export default Button
