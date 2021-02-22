// feeds data from mysql from Receiving table
import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


export default function FullOrders (props) {   //this would be props for the component
    //check data
    console.log('FullOrders' + JSON.stringify(props[0]))
    console.log('FullOrders', props.fullOrders);
    //pulls column data as keys from DB and displays it
    const columns= props.fullOrders[0] && Object.keys(props.fullOrders[0])
    
//Event handler for delete triggered by onDelete to send data back up to App.js
    function handleClickDelete (fo) {
        props.onDeleteFullOrder(fo)

    }

    //Event handler for edit triggered by onUpdate to send data back up to App.js
    function handleClickEdit (fo) {
        //check correct ord_id was select
        console.log("Edit was clicked", fo)
        props.onGetFullOrdId(fo)
    }


    return (
        <div className="FullOrders">
            <h2>Full Orders</h2>
            
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
                   
                </thead>

                <tbody className="tbody">
                    {/* map data inside body, it goes over each column using map func
                    key needs to be unique can use index and pass as param*/}
                { props.fullOrders && 
                    props.fullOrders.map( ( fullOrder ) => (
                     
                    <tr className="keyrow" key={fullOrder.ord_id}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (e) =>  (
                            <td key={fullOrder.ord_id}>{fullOrder[e]}</td>
                        ))}
                            <td>
                                <Link to={`/full_orders/edit/${fullOrder.ord_id}`}>
                                    <Button 
                                        id="edit"
                                        className="Edit"
                                        onClick={() => handleClickEdit(fullOrder.ord_id)}
                                        type="button"
                                    >
                                        <EditIcon/>
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Button
                                    id="delete"
                                    className="Delete"
                                    onClick={() => handleClickDelete(fullOrder.ord_id)}
                                    type="button"
                                >
                                    <DeleteIcon />
                                </Button>
                            </td>
                    </tr>
                ))}

                </tbody>

            </Table>
        </div>
    )
}