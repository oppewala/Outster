import React from 'react'

const DateModal = ({ date }) => {
    if (!date){
        return <div style={{display: 'hidden'}}></div>
    }
    return (<div>
        <p>This is the modal</p>
        <p>{date.description}</p>
    </div>)
}

export default DateModal