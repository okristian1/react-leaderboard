var React = require('react');

class Loading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text,
			speed: 300
		};
	}
	componentDidMount() {
		var stop=this.props.text + '...';
		this.interval=window.setInterval(function() {
			if(this.state.text===stopper) {
				this.setState(function() {
					return {
						text: this.props.text
				}
			});
		} else {
			this.setState(function(prevState) {
				retur {
					text: prevState.text + '.'
				}
			});
		}
		}.bind(this), this.props.speed)
	}
	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	render() {
		return (
			<p className='Loader'>
				{this.state.text}
			</p>
		)
	}
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 300;
}

module.exports = Loading;
