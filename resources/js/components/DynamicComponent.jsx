import React from 'react'

const DynamicComponent = ({Component,children,...props}) => {
    Component = Component || Div;
    return (
        <>
            <Component {...props}>
                {children}
            </Component>
        </>
    )
}

const Div = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DynamicComponent
