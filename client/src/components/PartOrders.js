import React from 'react'
//ref video: https://youtu.be/d1r0aK5awWk


export default function PartOrders( props) {   //this would be props for the component
    //check data
    console.log('PartOrders', props)
    console.log('PartOrders', props.orders);
    //pulls column name as keys from DB and displays it
    const columns= props.orders[0] && Object.keys(props.orders[0])
    
    return (
        <div className="PartOrders">
            <table cellPadding={10} cellSpacing={2}>

                <thead>
                    {/* can dynamically add data into table.
                    Start with guard clause in case no data inserted .
                    You need to define columns as a separate entity as const*/}

                    <tr>{ props.orders[0] && columns.map( (heading) =><th>{ heading }</th>)}</tr>
                </thead>

                <tbody>
                    {/* map data inside body, it goes over each column using map func*/}
                { props.orders.map( (row) => (
                    <tr key={row.id}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (column) =>  (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    )
}