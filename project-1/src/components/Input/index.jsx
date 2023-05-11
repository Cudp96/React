import React from 'react'

const Input = (props) => {
    return (
        <>
            <div className='input'>
                <input type="text"  onChange={props.valueOnChange} placeholder={props.placeholder} />
                
             </div>
        </>
    )
}

export default Input