import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default class extends Component {

    state = {
        userName: 'Аноним',
        message: 'Тестовое сообщение'
    };

    static propTypes = {
        addComment: PropTypes.func.isRequired
    };

    handleSave = (event, index, value) => {



        const userName = this.state.userName;
        const message = this.state.message;

        if (!userName) {
            alert('Введите имя пользователя');
            return;
        }

        if (!message) {
            alert('Введите сообщение');
            return;
        }

        const date = new Date().getTime();

        this.props.showProgress();

        this.props.addCommentToDb(
            userName,
            message,
            date,
            this.props.targetCommentId
        ).then((newKey) => {
            this.props.addComment(
                newKey,
                userName,
                message,
                date,
                this.props.targetCommentId
            );

            this.props.hideCommentDialog();
            this.props.hideProgress();
        }).catch(exception => {
            console.log(exception);
            this.props.hideProgress();
        });
    }

    handleClose = () => {
        this.props.hideCommentDialog();
    };

    // не выношу в общее состояние, т.к думаю что оно там не нужно
    handleChangeUserName = e => {
        this.setState({ userName: e.target.value })
    }

    handleChangeMessage = e => {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <form className="add-comment-form">
                <TextField
                    floatingLabelText="Ваше имя"
                    fullWidth={true}
                    onChange={this.handleChangeUserName}
                    value={this.state.userName}
                    /><br />
                <TextField
                    hintText="Сообщение"
                    floatingLabelText="Ваше сообщение"
                    floatingLabelFixed={true}
                    multiLine={true}
                    rows={4}
                    rowsMax={4}
                    fullWidth={true}
                    onChange={this.handleChangeMessage}
                    value={this.state.message}
                    /><br />
                <FlatButton
                    label="Отправить"
                    primary={true}
                    primary={true}
                    onTouchTap={this.handleSave}
                    />
                <FlatButton
                    label="Закрыть"
                    onTouchTap={this.handleClose}
                    />
            </form>
        );
    }
}
