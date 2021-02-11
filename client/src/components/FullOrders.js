// feeds data from mysql from Receiving table
import React from 'react'



export default function FullOrders (props) {   //this would be props for the component
    //check data
    console.log('Table', props)
    console.log('Table', props.inventories);
    //pulls column name as keys from DB and displays it
    const columns= props.inventories[0] && Object.keys(props.inventories[0])
    
    return (
        <div className="FullOrders">
            <h2>Completed Orders</h2>
            <table cellPadding={10} cellSpacing={2}>

                <thead>
                    {/* can dynamically add data into table.
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
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    )
}

/***********This page will render all data from MYSQL database****************
 * 
 *           Condition: GET ALL Only if Full Order = Yes
 * 
 *          
 * 
                    <table class="pure-table">
                        {props.inventory && 
                            props.inventory.map =(i => (
                            
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
                                    <tr 
                                        key={ i.id }
                                        class="pure-table-odd">
                                            <td>{ i.ordDate }</td>
                                            <td>{ i.vendor }</td>
                                            <td>{ i.team }</td>
                                            <td>{ i.item }</td>
                                            <td>{ i.size }</td>
                                            <td>{ i.qty }</td>
                                            <td>{ i.partOrd }</td>
                                            <td{ i.fullOrd }</td>
                                    </tr>
                                </tbody>
                    </table>
                ))}
  
    
 *              
 *              
 *                
 *              
 * 
*******************************************************************************






{/***********************For MOCKUP DISPLAY ONLY****************************** 

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