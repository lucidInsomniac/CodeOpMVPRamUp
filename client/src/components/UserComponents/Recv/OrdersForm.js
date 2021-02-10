import React, {useState} from 'react'
import './OrdersForm.css'

//Order input
export default function OrdersForm (props) {

  //hooks for form input values: 
  //ordDate
  const [ordDate, setOrdDate] = useState('');
  //team
  const [vendor, setVendor] = useState('')
  //item
  const [team, setTeam] = useState('');
  //item
  const [item, setItem] = useState('');
  //size
  const [size, setSize] = useState('');
  //qty
  const [qty, setQty] = useState('');
  //part order
  const [part_ord, setPartOrd] = useState('');
  //full order
  const [full_ord, setFullOrd] = useState('');

  //Event hanlder for event listener onSubmit when triggered
  //by submit event
  function handleSubmit(event) {
    //prevent entire doc from reloading, only target event source
    event.preventDefault()

    //save all date in state obj to be sent to parent

    const order = {

      ordDate: ordDate,
      vendor: vendor,
      team: team,
      item: item,
      size: size,
      qty: qty,
      part_ord: part_ord,
      full_ord: full_ord
    }
      //check inventory has value
      console.log('form', order)

    // onSubmit, send the state obj with all the data to parent
    props.onSubmit(order)

    //reset all fields
    setOrdDate("")
    setVendor("")
    setTeam("")
    setItem("")
    setSize("")
    setQty("")
    setPartOrd("")
    setFullOrd("")

  }


  //Event handler for event listener onClick when triggered by
  //on-click event
  function handleChange (event) {
    let {name, value} = event.target

        switch(name) {
            case 'ordDate':   
                setOrdDate(value);
                break;
            case 'vendor':
                setVendor(value);
                break;
            case 'team':
                setTeam(value);
                break;
            case 'item':
                setItem(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'qty':
                setQty(value);
                break;
            case 'part_ord':
                setPartOrd(value);
                break;
            case 'full_ord':
                setFullOrd(value);
                break;
            default:
                  break;
        }
  }

      //render form here
      // divs, input, className, and htmlFor formated in Pure CSS
      // Link to Documentation: https://purecss.io/forms/
    return (
      <div className="OrdersForm"> 
        {/*create dive for form title */}
        <div className="form-title">
            <h2> Add New Orders Here</h2>
        </div>

            {/*create div for form */}
          <div className="form-container">
            
            {/*Start form here */}
            <form 
                  onSubmit={handleSubmit}
                  className="pure-form pure-form-stacked"
            >
              <fieldset>
                <div className="pure-g">
                  <div className="pure-u-1 pure-u-md-1-3">
                    <label 
                          className="ord-date"
                          htmlFor="multi-ord-date"
                    >
                      Order Date
                    </label>
                      <input 
                            //need id attrtibute in input to allow "htmlFor" attribut in label to 
                            //create accessibility
                            id="multi-order-date"
                            placeholder="mm/dd/yy"
                            className="pure-input-1-3"
                            //this is for handleChange to set the value to ordDate
                            name="ordDate"
                            //Text input field
                            type="text"
                            //event listender to trigger even handler when a value is changed
                            onChange={handleChange}
                            //this will be the value to be set to the event target to match the name in the input
                            value={ordDate}
                      />
                  </div>
                

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label 
                            className="vendor"
                            htmlFor="multi-vendor"
                    >
                      Vendor
                    </label>
                      <input
                            id="multi-vendor" 
                            placeholder="Vendor Name"
                            className="pure-u-2-5"
                            name="vendor"
                            type="text"
                            onChange={handleChange}
                            value={vendor}
                      />
                  </div>

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label 
                            className="team"
                            htmlFor="multi-team"
                    >
                      Team
                    </label>
                      <input
                            id="multi-team"
                            placeholder="Team Name"
                            className="pure-u-2-5"
                            name="team"
                            type="text"
                            onChange={handleChange}
                            value={team}
                      />
                  </div>

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label 
                            className="item"
                            htmlFor="multi-item"
                    >
                      Item
                    </label>
                      <textarea
                            id="multi-item"
                            placeholder="Item Name"
                            className="pure-u-2-5"
                            name="item"
                            type="text"
                            onChange={handleChange}
                            value={item}
                      />
                  </div>

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label 
                            className="size"
                            htmlFor="multi-size"
                    >
                      Size
                    </label>
                      <input
                            id="multi-size"
                            placeholder="Size"
                            className="pure-u-1-8"
                            name="size"
                            type="text"
                            onChange={handleChange}
                            value={size}
                      />
                  </div>

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label  
                            className="qty"
                            htmlFor="multi-qty"
                    >
                      QTY
                    </label>
                      <input
                            id="multi-qty"
                            placeholder="QTY #"
                            className="pure-u-1-8"
                            name="qty"
                            type="text"
                            onChange={handleChange}
                            value={qty}
                      />

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label  
                            className="part-ord"
                            htmlFor="multi-part-ord"
                    >
                      Partial Order
                    </label>
                      <select
                              id="multi-part-ord"
                              type="select"
                              name="part_ord"
                              className="pure-u-1-8"
                              onChange={handleChange}
                              value={part_ord}

                      >
                        <option>Select </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                  </div>
                  </div>

                  <div className="pure-u-1 pure-u-md-1-3">
                    <label  
                            className="full-ord"
                            htmlFor="multi-full-ord"
                    >
                      Full Order
                    </label>
                    <select
                              id="multi-full-ord"
                              type="select"
                              name="full_ord"
                              className="pure-u-1-8"
                              onChange={handleChange}
                              value={full_ord}

                      >
                        <option>Select </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                  </div>

                </div>
                  {/*Button goes before </form> */}
                <button className="submit"
                        type="submit"
                > 
                  Submit
                </button>
              </fieldset>
            </form>            
          </div>
        
      </div>
    )
}