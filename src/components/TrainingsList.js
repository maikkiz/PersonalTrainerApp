import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'react-moment';

class TrainingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {trainings: []};
    }

    componentDidMount() {
        this.fetchTrainings();
    }
    
    fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(jsondata => this.setState({trainings: jsondata}))
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
            //    Cell: ({props}) => (<span>{moment.utc(props.value).format('DD.MM.YYYY HH:mm:ss')}</span>)
            },
            {
                Header: "Duration",
                accessor: "duration"
            }
        ]
        return (
            <div>
                <h1>Trainings</h1>
                <ReactTable filterable={true} sortable={true} data={this.state.trainings} columns={columns}/>
            </div>
        );
    }
}

export default TrainingsList;