import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CommentToolbar from './components/CommentToolbar/CommentToolbar.jsx';
import CommentsList from './components/CommentsList/CommentsList.jsx';

export default class App extends React.Component {
    comments = [
        {
            id: 1,
            userName: "Вася",
            date: "15 ноября 2016",
            message: "Владельцы сего девайса, подскажите плиз, если дно посуды будет меньше по диаметру большой индукционной конфорки, то она будет греть или нет? На сколько дно может быть меньше конфорки? И какой диаметр большой индукционной конфорки?"
        },
        {
            id: 2,
            userName: "Петя",
            date: "17 ноября 2016",
            message: "Скажите, пожалуйста, царапается ли поверхность этой плиты. Много раз слышала, что стеклокерамика у многих поцарапалась, на других плитах, правда."
        }
    ];

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <CommentToolbar />
                    <CommentsList items={this.comments} />
                </div>
            </MuiThemeProvider>
        );
    }
}
