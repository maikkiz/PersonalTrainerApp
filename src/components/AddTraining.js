import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import moment from 'moment';


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
              date: this.state.date,
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
                 <Button style={{margin: 10}} color="primary" onClick={this.handleClickOpen}>
                Add Training
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
              type="date"
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
            <Button onClick={this.handleClose} color="primary">
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