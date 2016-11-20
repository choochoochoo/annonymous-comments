import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CommentToolbar from '../components/CommentToolbar/CommentToolbar.jsx';
import CommentsList from '../components/CommentsList/CommentsList.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommentsActions from '../actions';

const App = ({ comments, actions }) => (
    <MuiThemeProvider>
        <div className="app">
            <CommentToolbar addComment={actions.addComment} />
            <CommentsList items={comments} />
        </div>
    </MuiThemeProvider>
);

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CommentsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
