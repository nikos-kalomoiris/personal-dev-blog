import React from 'react';


const formatDate = (date) => {
    const formatedDate = new Date(date)

    let day = formatedDate.getDay()
    let month = formatedDate.getMonth()
    const year = formatedDate.getFullYear()

    day = day + formatDay(day)
    month = formatedDate.toLocaleString('en-us', { month: 'long' });

    return month + " " + day + ", " + year
}

const formatDay = (day) => {
    switch(day) {
        case 1:
        case 21:
        case 31:
            return 'st'
        case 2:
        case 22: 
            return 'nd'
        case 3:
        case 23:
            return 'rd'
        default:
            return 'th'
    }
}

const DateComponent = ({ date }) => {
    return (
        <div>
            <p className="mt-4">{formatDate(date)}</p>
        </div>
    );
}

export default DateComponent;
