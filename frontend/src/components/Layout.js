import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPosts } from '../actions';
import { getPostsByCategory } from '../ReadableAPI';
class Layout extends Component {
	loadPostsAndRedirect = path => {
		const { loadPosts } = this.props;
		getPostsByCategory(path).then(response => {
			loadPosts(response.data);
		});
		this.props.history.push(path);
	};

	render() {
		const { location, categories } = this.props;
		return (
			<div>
				<Grid container className="root">
					<Grid item xs={12}>
						<Grid container justify="center">
							{/* START SIDEBAR */}
							<Grid key={0} xs={2} className="sidebar" item>
								<Paper className="paper">
									<div className="App-logo">
										<img alt="logo" src={require('../assets/img/logo.png')} />
									</div>

									<MenuList className="root-menu-list">
										{categories &&
											categories.map(category => (
												<MenuItem
													key={category.name}
													classes={{ selected: 'menu-item-selected' }}
													selected={location.pathname === `/${category.name}`}
													className="root-menu-item"
													onClick={() => this.loadPostsAndRedirect(category.name)}
												>
													<ListItemIcon>
														<img
															alt={category.name}
															className="root-menu-icon"
															src={require(`../assets/img/${category.name}.png`)}
														/>
													</ListItemIcon>
													<ListItemText className="menu-item" primary={category.name} inset />
												</MenuItem>
											))}
									</MenuList>
								</Paper>
							</Grid>
							{/* END SIDEBAR */}

							{/* START CONTENT */}
							<Grid key={1} xs={10} item className="content-container">
								{this.props.children}
							</Grid>
							{/* END CONTENT */}
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps({ categories }) {
	return {
		...categories
	};
}

Layout = connect(
	mapStateToProps,
	{ loadPosts }
)(Layout);

export default withRouter(Layout);
