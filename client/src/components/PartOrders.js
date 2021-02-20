import React from 'react'
//ref video: https://youtu.be/d1r0aK5awWk
import { Table, Button } from 'react-bootstrap'

export default function PartOrders( props) {   
    //check data
    console.log('PartOrders' + JSON.stringify(props[0]))
    console.log('PartOrders', props.orders);
    
    //pulls column name as keys from DB and displays it
    const columns= props.orders[0] && Object.keys(props.orders[0])


    function handleClickDelete (o) {
        props.onDeleteOrder(o)

    }

    function handleClickUpdate (o) {
        props.onUpdateOrder(o)
    }
    
    /*Inline Text edit */


    return (
        <div className="PartOrders">
            <h2>Partial Orders</h2>
            
            <Table size="sm" className="Table">

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
                { props.orders && 
                    props.orders.map( ( order ) => (
                     
                    <tr className="keyrow" key={order.ord_id}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (e) =>  (
                            <td key={order.ord_id}>{order[e]}</td>
                        ))}
                            <td>
                                <Button 
                                    id="edit"
                                    className="Edit"
                                    onClick={() => handleClickUpdate(order)}
                                    // onClick={() =>props.onUpdateOrder(props.order[0].ord_id)}
                                    type="button"
                                >
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button
                                    id="delete"
                                    className="Delete"
                                    onClick={() => handleClickDelete(order.ord_id)}
                                    // onClick={() => props.onDeleteOrder(order.ord_id)}//note responding to id 
                                    type="button"
                                >
                                    Delete
                                </Button>
                            </td>
                    </tr>
                ))}

                </tbody>

            </Table>
        </div>
    )
}