import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

export default class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.entries(this.state.fishes).map(([key, value]) => (
              <Fish
                key={key}
                details={value}
                addToOrder={this.addToOrder}
                index={key}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
