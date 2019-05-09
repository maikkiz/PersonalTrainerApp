import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon } from 'antd';
import moment from 'moment';


class AddTraining extends Component {

    state = {
        open: false, date: "", activity: "", duration: "", customer: ""
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

      saveTraining = () => {
          const newTraining = {
              date: moment.utc(this.state.date).format('YYYY-MM-DD HH:mm'),
              activity: this.state.activity,
              duration: this.state.duration,
              customer: this.props.customer
          }

          this.props.addTraining(newTraining);
          this.handleClose();
      }

  
    render() {
        return (
            <div>
                 <Button color="primary" onClick={this.handleClickOpen}>
                Add Training <Icon type="plus-circle" className="icon" />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">New Training</DialogTitle>
                <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              type="datetime-local"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              name="activity"
              value={this.state.activity}
              onChange={this.handleChange}
              label="Activity"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              name="duration"
              value={this.state.duration}
              onChange={this.handleChange}
              label="Duration"
              fullWidth
            />
        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.saveTraining} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
                
            </div>
        );
    }
}

export default AddTraining;