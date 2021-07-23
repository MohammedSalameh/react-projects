import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import classes from './UserFinder.module.css';
import Users from './Users';

class UserFinder extends Component {
	//context
	static contextType = UsersContext;

	constructor(props) {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: '',
		};
	}

	componentDidMount() {
		// send http request
		this.setState({ filteredUsers: this.context.users });
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			// if the previous state is different from the current state.
			// Update the list.
			this.setState({
				filteredUsers: this.context.users.filter((user) =>
					user.name.toLowerCase().includes(this.state.searchTerm)
				),
			});
		}
	}

	render() {
		return (
			<Fragment>
				<input
					className={classes.finder}
					type='search'
					onChange={this.searchChangeHandler.bind(this)}
				/>
				<ErrorBoundary>
					<Users users={this.state.filteredUsers} />
				</ErrorBoundary>
			</Fragment>
		);
	}
}

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState('');

// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<input type='search' onChange={searchChangeHandler} />
// 			<Users users={filteredUsers} />
// 		</Fragment>
// 	);
// };

export default UserFinder;
