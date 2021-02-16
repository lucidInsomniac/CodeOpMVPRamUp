// feeds data from mysql from Receiving table
import React from 'react'



export default function FullOrders (props) {   //this would be props for the component
    //check data
    console.log('Table', props)
    console.log('Table', props.inventories);
    //pulls column name as keys from DB and displays it
            //Need to figure a way to create column names separately
    const columns= props.inventories[0] && Object.keys(props.inventories[0])
    
    return (
        <div className="FullOrders">
            <h2>Completed Orders</h2>
            <table cellPadding={10} cellSpacing={2}>

                <thead>
                    {/* can dynamically add data into table by mapping inventories.
                    Start with guard clause in case no data inserted .
                    You need to define columns as a separate entity as const*/}

                    <tr>{ props.inventories[0] && columns.map( (heading, index) =><th key={index}> {heading}</th>)}</tr>
                </thead>

                <tbody>
                    {/* map data inside body, it goes over each column using map func*/}
                { props.inventories.map( (row, index) => (
                    <tr key={index}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (column, index) =>  (
                            <td key={index}>{row[column]}</td>
                        ))}
                            <td>
                                <button className="Edit">Edit</button>
                                <button className="Delete">Delete</button>
                            </td>
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    )
}


/***********************For MOCKUP DISPLAY ONLY****************************** 

            <div className="table container"> 
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Vendor</th>
                        <th>Team</th>
                        <th>Item</th>
                        <th>Size</th>
                        <th>QTY</th>
                        <th>Partial Order</th>
                        <th>Full Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pure-table-odd">
                        <td>01/14/19</td>
                        <td>Volleyball</td>
                        <td>BSN</td>
                        <td>Game Balls</td>
                        <td>Official</td>
                        <td>30</td>
                        <td>Yes</td>
                        <td>No</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

*/