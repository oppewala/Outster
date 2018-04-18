import React from 'react'

const DateModal = ({ date }) => {
    if (!date){
        return <div style={{display: 'hidden'}}></div>
    }
    return (<div>
        <p>This is the modal</p>
        <p>{date.description}</p>
        <p>LINK</p>
        <p>Created by: USER</p>
        <p>Added on: DATETIME</p>
        <p>Notes:</p>
        <div className="dates">
            <ul>
                <li>27th Feb - somehow view all 'activities' on the 27th</li>
            </ul>
        </div>
    </div>)
}

export default DateModal