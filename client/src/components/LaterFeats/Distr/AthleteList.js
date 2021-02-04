import React from 'react'


//This shows an image gallery of athletes
//Done but not rendering
export default function AthleteList (props) {
    console.log('gear',props)
    
    return (
        <div className="AthleteList">
            <h2>Athlete List</h2>
            {/*use map method and img tag to display each athlete */}
            <ul>
                {props.athletes.map(athlete => (
                    <img 
                        className="athlete"
                        src={athlete.imageURL}
                        alt="profile pic displayed"
                        key={athlete.id} 
                        // this part is not rendering
                        onClick={event => props.onSelectedAth(athlete)} 
                    />
                ))}
            </ul>
        </div>
    )
}