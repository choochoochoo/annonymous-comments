import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './Comment.sass';

export default class Comment extends React.Component {
    userName = this.props.userName;

    date = this.props.date;

    message = this.props.message;

    childComments = this.props.childComments;

    parentId = this.props.parentId;

    isRoot = !this.parentId;

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
                    <FlatButton label="Ответить" primary={true} />
                </div>
                <div className="comment__childs">
                    {
                        this.childComments.map(comment => {
                            return <Comment key={comment.id} { ...comment } />;
                        })
                    }
                </div>

            </div>
        );
    }
}
