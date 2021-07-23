import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super();
		this.state = {
			hasError: false,
		};
	}
	componentDidCatch(error) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p>Somehting went wrong!</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
