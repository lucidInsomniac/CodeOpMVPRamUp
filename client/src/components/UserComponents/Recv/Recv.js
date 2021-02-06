import React from 'react'

//Orders not yet received and partial with actions go here
export default function Recv (props) {
    return (
      <div className="Recv "> 
        <h2>Current Team Orders</h2> 
        {/* list items from form here */}



{/***********This page will render all data from MYSQL database****************
 * 
 *           Condition: GET ALL Only if Partial = Yes or empty
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
                                            <td>
                                                <select>
                                                    <option>Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option>Select</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </td>
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






{/***********************For MOCKUP DISPLAY ONLY****************************** */}

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
                      <td>5/24/20</td>
                      <td>ParsonsKellogg</td>
                      <td>Baketball</td>
                      <td> Reversible Pract. Jerseys</td>
                      <td>Large</td>
                      <td>50</td>
                      <td>
                            <select>
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </td>
                  </tr>
              </tbody>
          </table>
        </div>
       
      </div>
    )
}





//Later Feat: Search bar for item, vendor, invoice
    //Later Feat: Recvd Edit button => partial/full notes textarea, save/cancel button