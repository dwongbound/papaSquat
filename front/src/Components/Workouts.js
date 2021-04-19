import React, { useState, useEffect } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import pullups from '../images/pullups.jpg';


const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const apiUrl = '/api/getAllWorkouts'
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setWorkouts(data)
                console.log(workouts)
            })
            .catch((err) => console.log(err))
    })
    return (
        <div>
            { workouts.map(workout => (
                <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                        <img className="workout-image" src={pullups} alt="Pullups" />
                    </div>
                    <a href="/Description">
                        <div className="workout-bottom-half" >
                            <h1 className="workout-title">{workout.title}</h1>
                            <h2 className="workout-author">{workout.creator}</h2>
                            <p className="workout-description">{workout.desc}</p>

                            <div className="upvotes">
                                <h2>
                                    {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                                    <i className="fas fa-chevron-up" />
                                    <span className="upvote-count">{workout.vote}</span>
                                    <i className="fas fa-chevron-down" />
                                </h2>
                            </div>

                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Workouts