import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CommentToolbar from '../components/CommentToolbar/CommentToolbar.jsx';
import CommentsList from '../components/CommentsList/CommentsList.jsx';
import AddCommentDialog from '../components/AddCommentDialog/AddCommentDialog.jsx';
import Progress from '../components/Progress/Progress.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
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

store.dispatch(Actions.showProgress());

commentApi.readComments().then(comments => {
    store.dispatch(Actions.loadComments(comments));
    store.dispatch(Actions.hideProgress());
}).catch(exception => {
    console.log(exception);
    store.dispatch(Actions.hideProgress());
});

const App = ({ comments, global, actions }) => (
    <MuiThemeProvider>
        <div className="app">
            <CommentToolbar showCommentDialog={actions.showCommentDialog} />
            <CommentsList items={comments} showCommentDialog={actions.showCommentDialog} />
            <AddCommentDialog
                open={global.commentFormOpen}
                hideCommentDialog={actions.hideCommentDialog}
                addComment={actions.addComment}
                addCommentToDb={commentApi.writeComment}
                targetCommentId={global.targetCommentId}
                showProgress={actions.showProgress}
                hideProgress={actions.hideProgress}
                />
            <Progress open={global.progressFormOpen} />
        </div>
    </MuiThemeProvider>
);

const mapStateToProps = state => ({
    comments: state.comments,
    global: state.global
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
