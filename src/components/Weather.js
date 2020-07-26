import React from 'react';

const Weather = (props) => {
    return (
       <ul>
        {
            props.tempreature && <li><strong>Tempreature: </strong><span> {props.tempreature} </span></li>
        }
        {
            props.city && <li><strong>City: </strong><span>{props.city} </span></li>
        }
        {
            props.country && <li><strong>Country: </strong><span>{props.country} </span></li>
        }
        {
            props.humidity && <li><strong>Humidity: </strong><span>{props.humidity} </span></li>
        }
        {
            props.description && <li><strong>Description: </strong><span>{props.description} </span></li>
        }
        {
            props.error && <li><span>{props.error} </span></li>
        }
       </ul>
);

}

export default Weather;