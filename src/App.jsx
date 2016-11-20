import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CommentToolbar from './components/CommentToolbar/CommentToolbar.jsx';
import CommentsList from './components/CommentsList/CommentsList.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <CommentToolbar />
                    <CommentsList items={this.props.comments} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps)(App);
