import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Comment.sass';

export default class Comment extends React.Component {
    userName = this.props.userName;

    date = this.props.date;

    message = this.props.message;

    childComments = this.props.childComments;

    parentId = this.props.parentId;

    isRoot = !this.parentId;

    handleOpenCommentForm = (event, parentComment) => {
        this.props.showCommentDialog(this.props.id);
    }

    render() {
        const classIsRoot = !this.parentId ? 'comment_root' : '';

        return (
            <div className={`comment ${classIsRoot}`}>
                <div className="comment__title">
                    <span className="comment__title-name">
                        {this.userName}
                    </span>
                    <span className="comment__title-date">
                        {this.date}
                    </span>
                </div>
                <div className="comment__message">
                    {this.message}
                </div>
                <div className="comment__manage">
                    <RaisedButton
                        label="Ответить"
                        primary={true}
                        onTouchTap={this.handleOpenCommentForm}
                        />
                </div>
                <div className="comment__childs">
                    {
                        this.props.childComments.map(comment => {
                            return <Comment
                                key={comment.id}
                                showCommentDialog={this.props.showCommentDialog}
                                { ...comment }
                                />;
                        })
                    }
                </div>
            </div>
        );
    }
}
