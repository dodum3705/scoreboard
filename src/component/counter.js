import React from 'react';

export class Counter extends React.Component {

	incrementScore = (delta) => {
		console.log(this);
		this.props.changeScore(this.props.id, delta);
	}

	decrementScore = () => {
		this.setState(prevState => {
			return {score: prevState.score - 1}
		});
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.incrementScore(-1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.incrementScore(1)}> + </button>
			</div>
		);
	}
}