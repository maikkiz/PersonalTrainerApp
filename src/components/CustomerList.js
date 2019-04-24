import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount() {
        this.fetchCustomers();
    }
    
    fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(jsondata => this.setState({customers: jsondata.content}))
    }

    render() {

        const columns = [
            {
                id: "Name",
                Header: "Name",
                sortable: true,
                filterable: true,
                accessor: row => row.firstname + ' ' + row.lastname,
              
            },
            {
                id: "Address",
                Header: "Address",
                sortable: true,
                filterable: true,
                accessor: row => row.streetaddress + ', ' + row.postcode + ' ' + row.city
            },
            {
                Header: "Email",
                sortable: true,
                filterable: true,
                accessor: "email"
            },
            {
                Header: "Phone",
                sortable: true,
                filterable: true,
                accessor: "phone"
            }
        ]
        return (
            <div>
                <h1>Customers</h1>

                <ReactTable filterable={true} onFilteredChange={filtered => this.setState({ filtered })} sortable={true} data={this.state.customers} columns={columns}/>
            </div>
        );
    }
}

export default CustomerList;