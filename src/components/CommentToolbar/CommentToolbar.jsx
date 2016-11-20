import React, { PropTypes, Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default class CommentToolbar extends Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    };

    handleTouch = (event, index, value) => this.props.addComment(
        null,
        "Витя 1",
        "18 ноября 2016 1",
        "Все круто 1",
        []
    );

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Обсуждение" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton 
                        label="Написать комментарий" 
                        primary={true} 
                        onTouchTap={this.handleTouch}
                        />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}