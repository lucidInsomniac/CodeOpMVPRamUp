import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './EditFullOrdForm.css'


export default function FullOrdEditForm (props) {
   //check props
   console.log("Update FULL form", JSON.stringify(props))
   console.log("Update FULL form", props.fullOrders[0])
 //   console.log("Update partial form", props.partOrders[0].ord_id)
 
   //initial state that pre-fills the input fields 
   const [ currentOrd, setCurrentOrder ] = useState({
     ordDate: props.fullOrders[0].ord_date,
     vendor: props.fullOrders[0].vendor,
     team: props.fullOrders[0].team,
     item: props.fullOrders[0].item,
     size: props.fullOrders[0].size,
     qty: props.fullOrders[0].qty,
     part_ord: props.fullOrders[0].part_ord,
     full_ord: props.fullOrders[0].full_ord
   })

  //check updated state
  console.log("BEFORE SUBMIT", currentOrd)

  //event handler when submit is triggered to 
  //send data back to parent and update DB
  function handleSubmit(event) {
    event.preventDefault()
    //use new data for selected employee
    props.onUpdateFullOrder(currentOrd);
    //check update order
    console.log("AFTER SUBMIT", currentOrd)

    //reset all fields
    setCurrentOrder("")
  }
  
  //Event handler to handle value changes
  function handleOnChange (event) {
    let {name, value} = event.target
    //if name of input matches, set value to that variable
    if (name) {
        setCurrentOrder(value)
    }
  }

    return (
        <div className="EditForm"> 

        <h2>Edit Full Orders Order Here</h2>

        {/* React-Bootsrap syntax, container for the form component starts here */}
        <Form className="Form" onUpdateFullOrder={handleSubmit}>
            
            {/* This is the first row with Order Date and Vendor */}
          <Form.Row className="row1">
              {/* The Group prop for form acts like a div */}
              <Form.Group controlId="group">
                  <Form.Label>Order Date</Form.Label>
                  {/* Form.Control is the same as saying <input> <select> or <textarea>*/}
                      <Form.Control onChange={handleOnChange} name="ordDate" value={currentOrd.ordDate} id="order-date"type="text" placeholder="mm/dd/yy" />
              </Form.Group>
              <Form.Group controlId="group">
                  <Form.Label>Vendor</Form.Label>
                      <Form.Control onChange={handleOnChange} name="vendor"value={currentOrd.vendor} id="vendor" type="text" placeholder="Vendor Name" />
              </Form.Group >
          </Form.Row>


            {/* Row 2 is a single line */}
          <Form.Group className="row2" controlId="group">
              <Form.Label>Team</Form.Label>
                  <Form.Control onChange={handleOnChange} name="team" value={currentOrd.team} id="team" type="text" placeholder="Team Name" />
          </Form.Group>


            {/* Row 3 is a single line  */}
          <Form.Group className="row3" controlId="group">
              <Form.Label>Item</Form.Label>
                  <Form.Control onChange={handleOnChange} name="item" value={currentOrd.item} id="item" as="textarea" rows={5} type="text" placeholder="Item Name and Description" />
          </Form.Group>


            {/* This is a row 4 with Qty and Size */}
          <Form.Row className="row4">
              <Form.Group controlId="group">
                  <Form.Label>Qty</Form.Label>
                      <Form.Control onChange={handleOnChange} name="qty" value={currentOrd.qty} id="qty" type="text" placeholder="QTY" />
              </Form.Group>
              <Form.Group controlId="group">
                  <Form.Label>Size</Form.Label>
                  {/* This creates the dropdown selection */}
                      <Form.Control onChange={handleOnChange} name="size" value={currentOrd.size} id="size" as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>XS / YXL</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>2XL</option>
                          <option>3XL</option>
                          <option>4XL</option>
                      </Form.Control>
              </Form.Group>
          </Form.Row>

          {/* This is row 5 with partial and full orders */}
          <Form.Row className="row5">
              <Form.Group controlId="group">
                  <Form.Label>Partial Order</Form.Label>
                    <Form.Control onChange={handleOnChange} name="part_ord" value={currentOrd.part_ord} id="part-order" as="select" defaultValue="Select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                    </Form.Control>
              </Form.Group>
              <Form.Group controlId="group">
                  <Form.Label>Full Order</Form.Label>
                    <Form.Control onChange={handleOnChange} name="full_ord"value={currentOrd.full_ord} id="full-order" as="select" defaultValue="Select">
                          <option>Select</option> 
                          <option>Yes</option>
                          <option>No</option>
                    </Form.Control>
              </Form.Group>
          </Form.Row>

          {/* The Update button starts here */}
          <Link to="/inventory">
              {/* The submit button goes here */}
            <Button 
                className="update-btn-full-ord" 
                type="submit"
            >
              Update Order
            </Button>
          </Link>

          {/* The Cancel button starts here */}
          <Link to="/full_orders">
             <Button className="cancel-btn" type="submit">Cancel</Button>
          </Link>
        </Form>
        
      </div>
    )
    
  
}
    
