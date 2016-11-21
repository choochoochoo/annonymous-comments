import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CommentToolbar from '../components/CommentToolbar/CommentToolbar.jsx';
import CommentsList from '../components/CommentsList/CommentsList.jsx';
import AddCommentDialog from '../components/AddCommentDialog/AddCommentDialog.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions';
import * as commentApi from '../api/comments';
import store from '../Store.js';
import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyDp4Q5j7yKxaCxHhL6oyRRiLJuJMKPV7FI",
    authDomain: "annonymous-comments.firebaseapp.com",
    databaseURL: "https://annonymous-comments.firebaseio.com",
    storageBucket: "annonymous-comments.appspot.com",
    messagingSenderId: "1040440423116"
};
firebase.initializeApp(config);

commentApi.readComments().then(comments => {
    store.dispatch(CommentsActions.loadComments(comments));
});

//commentApi.writeComment('dima 1', 'мое сообщение 1', null, new Date().getTime());

const App = ({ comments, global, actions }) => (
    <MuiThemeProvider>
        <div className="app">
            <CommentToolbar showCommentDialog={actions.showCommentDialog} />
            <CommentsList items={comments} showCommentDialog={actions.showCommentDialog} />
            <AddCommentDialog
                open={global.commentFormOpen}
                hideCommentDialog={actions.hideCommentDialog}
                addComment={actions.addComment}
                targetCommentId={global.targetCommentId}
                />
        </div>
    </MuiThemeProvider>
);

const mapStateToProps = state => ({
    comments: state.comments,
    global: state.global
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CommentsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
