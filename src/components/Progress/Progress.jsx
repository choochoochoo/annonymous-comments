import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import './Progress.sass';

export default class extends React.Component {
    render() {
        return (
            <Dialog
                className="progress"
                contentClassName="progress__content"
                modal={true}
                open={this.props.open}
                >
                <CircularProgress size={80} thickness={5}/>
            </Dialog>
        );
    }
}
