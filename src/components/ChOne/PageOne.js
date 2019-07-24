import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assignName, assignShipName } from '../../ducks/reducer';

class PageOne extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  assignName = (e) => {
    this.setState({ charName: this.state.name });
  };

  //   assignShipName = () => {
  //     this.setState({ shipName: this.state.ship });
  //   };

  render() {
    console.log(this.props.charName);
    const { charName, shipName } = this.props;
    return (
      <div>
        <h1>It all starts here...</h1>
        <p>Enter your name:</p>
        <input type='text' name='name' onChange={this.getName} />
        <button onClick={() => this.props.assignName(this.state.name)}>
          Begin your adventure
        </button>
        {charName ? (
          <div>
            <p>Hello, {charName}.</p>
            <p>
              Welcome to Stranded - a choose your own adventure game built in
              React.
            </p>
            <p>
              Before we begin, perhaps you should name your ship. It is your
              pride and joy afterall...
            </p>
            <input type='text' name='ship' onChange={this.getName} />
            <button onClick={() => this.props.assignShipName(this.state.ship)}>
              Name Your Ship
            </button>
          </div>
        ) : null}
        {charName && shipName ? (
          <div>
            <p>{shipName}? Interesting... but I like it!</p>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { assignName, assignShipName }
)(PageOne);
