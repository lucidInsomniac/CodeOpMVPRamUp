import React from 'react'
//import mockup charts
import fullorders from '../Images/fullorders.png'
import partialorders from '../Images/partialorders.png'
import workflow from '../Images/workflow.png'

export default function Home () {
    return (
        <div className="Home">
            <h2>Welcome to RampUp '!'</h2>

            {/* Mockup Chart for partial orders and inventory category. These have no actual functions */}
            <div className="part-chart">
            <img className ="partialorders" src={partialorders} alt="partial orders chart"/>
            <img  className="donut-chart" src={workflow} alt="donut-chart" />
            </div>

            {/* Mockup Chart for full orders and inventory category. These have no actual functions */}
            <div className="full-chart">
                <img className ="fullorders" src={fullorders} alt="full orders chart"/>
            </div>
        </div>
    )
}