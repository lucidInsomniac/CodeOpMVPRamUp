import React from 'react'


export default function Datatable ( { data }) {   //this would be props for the component
    //check data
    console.log('Table', data)
    //pulls column name as keys from DB and displays it
    // const columns= data.[0] && Object.keys(data[0])

    return (
        <table cellPadding={0} cellSpacing={0}>

            <thead>
                {/* can dynamically add data into table.
                Start with guard clause in case no data inserted .
                You need to define columns as a separate entity as const*/}

                {/* <tr>{ data[0] && columns.map( (heading) => <th>{ heading }</th>)} </tr> */}
            </thead>


            <tbody>
                {/* map data inside body, it goes over each column using map func*/}
              {/* { data.map( (row) => (
                <tr> 
                    {  
                        // we pass row and incl column prop to access data in that cell
                      columns.map( (column) =>  (
                        <td>{row[column]}</td>
                      ))}

                </tr>
              ))} */}

            </tbody>

        </table>
    )
}