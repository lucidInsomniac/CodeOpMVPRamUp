import React from 'react'

export default function Inventory (props) {

    //check data
    console.log('Inventory', props)
    console.log('Inventory', props.allOrders);
    //pulls column name as keys from DB and displays it
    const columns= props.allOrders[0] && Object.keys(props.allOrders[0])
    return (
         
        <div className="Inventory">
            <h2>Inventory</h2>
            <table cellPadding={10} cellSpacing={2}>

                <thead>
                    {/* can dynamically add data into table.
                    Start with guard clause in case no data inserted .
                    You need to define columns as a separate entity as const*/}

                    <tr>{ props.allOrders[0] && columns.map( (heading, index) =><th key={index}>{ heading }</th>)}</tr>
                </thead>

                <tbody>
                    {/* map data inside body, it goes over each column using map func
                    key needs to be unique can use index and pass as param*/}
                { props.allOrders.map( (row, index) => (
                    <tr key={index}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (column, index) =>  (
                            <td key={index}>{row[column]}</td>
                        ))}
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    

    )
}