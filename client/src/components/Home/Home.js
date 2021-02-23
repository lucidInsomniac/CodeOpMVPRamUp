import React from 'react'
import fullorders from '../Images/fullorders.png'
import partialorders from '../Images/partialorders.png'
import workflow from '../Images/workflow.png'

export default function Home () {
    return (
        <div className="Home">
            <h2>Welcome to RampUp '!'</h2>

            <div className="part-chart">
            <img className ="partialorders" src={partialorders} alt="partial orders chart"/>
            <img  className="donut-chart" src={workflow} alt="donut-chart" />
            </div>

            <div className="full-chart">
                <img className ="fullorders" src={fullorders} alt="full orders chart"/>
            </div>
        </div>
    )
}