//Define columns we want to display in table
//We export const COLUMNS, and array of objs
//For table we will specify 7 columns, with each rep as obj in COLUMNS
export const COLUMNNS= [
    {   //we specify column name with "Header"
        Header: "Id",
        //how  we access data from mock data
        accessor: "id"
    },
    {   
        Header: "Order Date",
        accessor: "ord_date"
    },
    {   
        Header: "Vendor",
        accessor: "vendor"
    },
    {   
        Header: "Team",
        accessor: "team"
    },
    {   
        Header: "Item",
        accessor: "item"
    },
    {   
        Header: "Size",
        accessor: "size"
    },
    {   
        Header: "QTY",
        accessor: "qty"
    },
    // {   
    //     Header: "Partial Order",
    //     accessor: "part_ord"
    // },
    // {   
    //     Header: "Full Order",
    //     accessor: "full_ord"
    // }
]

//After this is setup, we need to create a table instance, using
//react-table library. Create another component for table.
//So at the moment we need 3 tables: mock data, const for column, and table component