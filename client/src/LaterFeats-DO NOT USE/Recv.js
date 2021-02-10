import React from 'react'

//Orders not yet received and partial with actions go here
export default function Recv (props) {
    return (
      <div className="Recv "> 
        <h2>Current Team Orders</h2> 
        {/* list items from form here */}
        { 
            props.inventories.map = (inventory => (
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

                        <tr 
                            className="pure-table-odd"
                        >
                           

                            <td 
                                key={ inventory.name }
                            >
                              { inventory.ordDate }
                              </td>
                            <td>{ inventory.vendor }</td>
                            <td>{ inventory.team }</td>
                            <td>{ inventory.item }</td>
                            <td>{ inventory.size }</td>
                            <td>{ inventory.qty }</td>
                             
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
       ))}
                             
      </div>
    )
}

  
    
 





/***********************For MOCKUP DISPLAY ONLY****************************** */

        /* <div className="table container"> 
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
                      <td>Medium</td>
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
} */





//Later Feat: Search bar for item, vendor, invoice
    //Later Feat: Recvd Edit button => partial/full notes textarea, save/cancel button


    /***********This page will render all data from MYSQL database****************
 * 
 *           Condition: GET ALL Only if Partial = Yes or empty
 * 
 *          
 * 
 * *              
 *              
 *                
 *              
 * 
    *******************************************************************************/