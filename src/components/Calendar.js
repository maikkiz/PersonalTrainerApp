import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//import { Alert } from 'antd';

class Calendar extends Component {

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
        const localizer = BigCalendar.momentLocalizer(moment)
        const calendarEvents = [];

        for (let i = 0; i < this.state.trainings.length; i++) {
            const event = {
                id: i,
                customer: this.state.trainings[i].customer.firstname + ' ' + this.state.trainings[i].customer.lastname,
                start: moment.utc(this.state.trainings[i].date)._d,
                end: moment.utc(this.state.trainings[i].date).add(this.state.trainings[i].duration, 'minute')._d,
                title: this.state.trainings[i].activity
            }
            calendarEvents.push(event);
            console.log(calendarEvents);
        }

        return (
            <div>
                <h2>Calendar</h2>
                <div className="Calendar">
                    <BigCalendar
                        localizer={localizer}
                        events={calendarEvents}
                        views={['month', 'week', 'day']}
                        defaultDate={new Date()}
                        onSelectEvent={event => alert(event.customer)}
                            /*  (<Alert
                            message= {event.customer}
                            type="info"
                            closable
                            />)}*/
                        />
                </div>
            </div>
        );
    }
}

export default Calendar;