import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
moment.locale('en-gb');
//BigCalendar.momentLocalizer(moment)

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
            
            start: moment.utc(this.state.trainings[i].date)._d,
            end: moment.utc(this.state.trainings[i].date).add(moment.utc(this.state.trainings[i].duration, 'minute'))._d,
            title: this.state.trainings[i].activity
         }
         calendarEvents.push({event});
         console.log(calendarEvents)
         }
      
    
        return (
            <div style ={{ height: 700}}>
            <BigCalendar
            localizer={localizer}
             events={calendarEvents}
              views={['month', 'week', 'day']}
              defaultDate={new Date()}
            />
          </div>
        );
    }
}

export default Calendar;