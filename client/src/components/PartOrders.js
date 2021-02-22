import React  from 'react'
//ref video: https://youtu.be/d1r0aK5awWk
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import PartOrdEditForm from './PartOrdEditForm'



export default function PartOrders( props) {   
    //check data
    console.log('PartOrders' + JSON.stringify(props[0]))
    console.log('PartOrders', props.partOrders);

    //pulls column data as keys from DB and displays it
    const columns= props.partOrders[0] && Object.keys(props.partOrders[0])

    //Event handler for delete triggered by onDelete to send data back up to App.js
    function handleClickDelete (po) {
        props.onDeletePartOrder(po)

    }

    function handleClickEdit (po) {
        //check correct ord_id was select
        console.log("Edit was clicked", po)
        props.onGetPartOrdId(po)
    }

    return (
        <div className="PartOrders">
            <h2>Partial Orders</h2>
            
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
                { props.partOrders && 
                    props.partOrders.map( ( partOrder ) => (
                     
                    <tr className="keyrow" key={partOrder.ord_id}> 
                        {  
                            // we pass row and incl column prop to access data in that cell
                        columns.map( (e) =>  (
                            <td key={partOrder.ord_id}>{partOrder[e]}</td>
                        ))}
                            <td>
                                <Link to={`/part_orders/edit/${partOrder.ord_id}`}>
                                    <Button 
                                        id="edit"
                                        className="Edit"
                                        onClick={() => handleClickEdit(partOrder.ord_id)}
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
                                    onClick={() => handleClickDelete(partOrder.ord_id)}
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