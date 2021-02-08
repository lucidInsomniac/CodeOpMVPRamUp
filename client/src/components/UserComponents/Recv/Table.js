//We need to import 4 things: useMemo, useTable, mock data, and columns
//Ref Video: https://youtu.be/hson9BXU9F8
import React, { cloneElement, useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNNS } from './Columns'


export default function BasicTable () {
    //we create a state obj by passing the imported data into an emtpy array
    const columns = useMemo(() => COLUMNNS, [])
    //useMemo ensures MOCK_DATA isn't recreated on every render, waste too much energy and space
    const data = useMemo(() => MOCK_DATA, [])

    //hook for table, this returns a table instance, we can store in a const
    const tableInstance = useTable({
        //we pass an obj as arg: specify 2 props: columns and rows
        //here we set columns to the imported "COLUMNS"
        columns, //don't to write columns: columns because of const columns and data
        //here we set data to imported "MOCK_DATA"
        data 
        //There is a catch, you need another hook for memory called "useMemo", import that.
    })

    //Here is where we render the HTML Table
    //Then use the tableInstance with JSX to render all UI
    
    //by creating props and methods from tableInstance that come with react-table library
    const { 
        //need to be destructured on <table> with method {...getTableProps()}
        getTableProps, 
        //need to be destructured on <tbody> with method {...getTableBodyProps()}
        getTableBodyProps, 
        //need to be destructured in btwn <thead> with map because it is an array
        // { headerGroups.map((headerGroup) => (
        //  <tr {...headerGroup.getHeaderGroupProps()}> 
        //  { 
        //      headerGroup.headers,map( ( column ) => ( 
        //        <th {...column.getHeaderProps()}> {column.render('Header')}</th>
        //  ))}
        //
        //))}
        headerGroups, 
        //goes inside <tbody>
        rows, 
        prepareRow 
    } = tableInstance

    return (
        <div className="BasicTable">
             <h2>Current Team Orders</h2> 

            <div className="table container"> 
            
                <table 
                    { ...getTableProps() }
                    className="pure-table"
                >
                    <thead>
                    { headerGroups.map((headerGroup) => (
                       <tr {...headerGroup.getHeaderGroupProps()}> 
                         { headerGroup.headers.map( ( column ) => ( 
                            //   This is the Header section for the table
                             <th {...column.getHeaderProps()}> {column.render('Header')}</th>
                          ))}
                       </tr>
                    
                    ))}
                                
                    </thead>
                    {/* rows array go inside tbody */}
                <tbody { ...getTableBodyProps() }>
                    { rows.map((row) => {
                            //call prepareRow method and pass row as arg
                            prepareRow(row)
                            //then return <tr> and destrucre row.getRowProps()
                            return(
                                <tr 
                                    className="pure-table-odd"
                                    {...row.getRowProps()}>
                                    {/*   this gives access to individual row cell */}
                                        {row.cells.map( (cell) => {
                                            //return <td>
                                            return <td { ...cell.getCellProps() }>{ cell.render('Cell') }</td>
                                        })}
                                </tr>
                            )
                        })
                    }

                        <tr>
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