import React from 'react'
import { Table, Button } from 'react-bootstrap'

export default function Inventory (props) {

  //check data
  console.log('PartOrders' + JSON.stringify(props[0]))
  console.log('PartOrders', props.allOrders);

  //pulls column data as keys from DB and displays it
  const columns= props.allOrders[0] && Object.keys(props.allOrders[0])



    return (
        <div className="Inventory">
            <h2>All Orders</h2>
            
            <Table size="sm" className="Table" cellPadding={10} cellSpacing={2}>

                <thead className="headers">
                    {/* can dynamically add data into table.
                    Start with guard clause in case no data inserted .
                    You need to define columns as a separate entity as const*/}
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Vendor</th>
                        <th>Team</th>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Qty</th>
                        <th>Partial Order</th>
                        <th>Full Order</th>
                    </tr>
                    {/* <tr>{ props.orders[0] && 
                            props.orders[0] && columns.map( (heading, index) =><th key={index}>{ heading }</th>)}</tr> */}
                </thead>

                <tbody className="tbody">
                    {/* map data inside body, it goes over each column using map func
                    key needs to be unique can use index and pass as param*/}
                { props.allOrders && 
                    props.allOrders.map( ( allOrder ) => (
                     
                    <tr className="keyrow" key={allOrder.ord_id}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (e) =>  (
                            <td key={allOrder.ord_id}>{allOrder[e]}</td>
                        ))}
                            
                    </tr>
                ))}

                </tbody>

            </Table>
        </div>
    )
}