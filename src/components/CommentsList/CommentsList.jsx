import React from 'react';
import './CommentsList.sass';
import Comment from '../Comment/Comment.jsx';

export default class CommentList extends React.Component {
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
