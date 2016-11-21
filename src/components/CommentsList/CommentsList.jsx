import React from 'react';
import Comment from '../Comment/Comment.jsx';
import './CommentsList.sass';

export default class CommentsList extends React.Component {
    render() {
        return (
            <div className="comments-list">
                {
                    this.props.items.map(comment => {
                        return <Comment
                            key={comment.id}
                            showCommentDialog={this.props.showCommentDialog}
                            { ...comment }
                            />;
                    })
                }
            </div>
        );
    }
}
