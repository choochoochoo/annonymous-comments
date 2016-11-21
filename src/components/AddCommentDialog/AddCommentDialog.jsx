import React from 'react';
import Dialog from 'material-ui/Dialog';
import AddCommentForm from '../AddCommentForm/AddCommentForm.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Dialog
                    title="Создание комментария"
                    modal={true}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                    >
                    <AddCommentForm
                        addComment={this.props.addComment}
                        addCommentToDb={this.props.addCommentToDb}
                        hideCommentDialog={this.props.hideCommentDialog}
                        targetCommentId={this.props.targetCommentId}
                        showProgress={this.props.showProgress}
                        hideProgress={this.props.hideProgress}
                        />
                </Dialog>
            </div>
        );
    }
}
