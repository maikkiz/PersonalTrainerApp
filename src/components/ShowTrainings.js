import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon } from 'antd';

class ShowTrainings extends Component {

    state = {
        open: false, activity: "", date: "", duration: ""
      };

      handleClickOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div>
                <Button className="Button" color="primary" onClick={this.handleClickOpen}> 
                    <Icon type="solution" className="icon" />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="simple-dialog-title">Customers trainings</DialogTitle>
                <div>
                    <List>
                        <ListItem>
                            <ListItemText primary={this.state.activity} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={this.state.date} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={this.state.duration} />
                        </ListItem>
                    </List>
                </div>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
                </Dialog> 
            </div>
        );
    }
}

export default ShowTrainings;