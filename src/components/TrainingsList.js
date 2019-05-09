import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Icon } from 'antd';

class TrainingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {trainings: [], open: false, message: ""};
    }

    componentDidMount() {
        this.fetchTrainings();
    }

    fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(jsondata => this.setState({trainings: jsondata}))
    }

    deleteTraining = (link) => {
        if (window.confirm("Are you sure you want to delete this training?")) {
            fetch('https://customerrest.herokuapp.com/api/trainings/' + link, {method: "DELETE"})
            .then(res => this.fetchTrainings())
            .then(res => this.setState({open: true, message: "Training deleted"}))
            .catch(err => console.error(err))
        }
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {

        const columns = [
            {
                Header: "Activity",
                accessor: "activity"
            },
            {
                Header: "Date",
                accessor: "date",
                Cell: props => (<span>{moment.utc(props.date).format('DD.MM.YYYY HH:mm')}</span>)
            },
            {
                Header: "Duration",
                accessor: "duration"
            },
            {
                id: "Customer",
                Header: "Customer",
                accessor: row => row.customer.firstname + ' ' + row.customer.lastname
            },
            {
                Header: "",
                filterable: false,
                sortable: false,
                width: 100,
                accessor: "id",
                Cell: ({value}) => <Button color="secondary" onClick={() => this.deleteTraining(value)}><Icon type="delete" /></Button>
            }
        ]
        return (
            <div>
                <h2>Trainings</h2>
                <ReactTable filterable={true} sortable={true} data={this.state.trainings} columns={columns}/>
                <Snackbar 
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                message= {this.state.message}
              />
            </div>
        );
    }
}

export default TrainingsList;