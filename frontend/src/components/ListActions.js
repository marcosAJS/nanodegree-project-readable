import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

class ListActions extends React.Component {
	state = {
		anchorEl: null
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleCloseWithAction = (action = null) => {
		if (action) {
			action.func();
		}
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div style={this.props.style}>
				<IconButton
					aria-label="More"
					aria-owns={open ? 'long-menu' : null}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					<MoreVertIcon />
				</IconButton>
				<Menu anchorEl={anchorEl} open={open} onClose={this.handleClose}>
					<MenuItem
						style={{ fontSize: '0.7rem', height: '10px' }}
						// selected={action === 'Pyxis'}
						onClick={() => this.handleCloseWithAction('Editar')}
					>
						Editar
					</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default ListActions;
