// feeds data from mysql from Receiving table
import React from 'react'


export default function Inventory (props) {
    return (
        <div className="Inventory">
            <h2>Inventory</h2>
            <div className="table container"> 
            <table class="pure-table">
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
                    <tr class="pure-table-odd">
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
