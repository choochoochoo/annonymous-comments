import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

export default class CommentToolbar extends Component {
    handleOpenCommentForm = (event, index, value) => {
        this.props.showCommentDialog();
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
            </div>
        );
    }
}