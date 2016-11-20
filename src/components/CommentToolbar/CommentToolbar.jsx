import React, { PropTypes, Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import AddCommentForm from '../AddCommentForm/AddCommentForm.jsx';

export default class CommentToolbar extends Component {
    handleOpenCommentForm = (event, index, value) => {

    }

    render() {
        return (
            <div className="comment-toolbar">
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Обсуждение" />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton
                            label="Написать комментарий"
                            primary={true}
                            onTouchTap={this.handleOpenCommentForm}
                            />
                    </ToolbarGroup>
                </Toolbar>
                <AddCommentForm addComment={this.props.addComment} />
            </div>
        );
    }
}