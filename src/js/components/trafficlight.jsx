import React, { useState } from "react";

import '../../styles/index.css'; // Assuming your CSS file is named TrafficLight.css

 

const TrafficLight = () => {

    const [color, setColor] = useState('red');

    const handleClick = (selectedColor) => {

        setColor(selectedColor)

    };

    return (

 

        <div id="traffic-light-app">

            <div id="traffic-top"></div>

            <div id="traffic-container">

                <div className="light-container">

                    <div

                        className={`light red ${color === 'red' ? 'selected' : ''}`}

                        onClick={() => handleClick('red')}

                    ></div>

                    <div

                        className={`light yellow ${color === 'yellow' ? 'selected' : ''}`}

                        onClick={() => handleClick('yellow')}

                    ></div>

                    <div

                        className={`light green ${color === 'green' ? 'selected' : ''}`}

                        onClick={() => handleClick('green')}

                    ></div>

                </div>

            </div>

        </div>

    );

};