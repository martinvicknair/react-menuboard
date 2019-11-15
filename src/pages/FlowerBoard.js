import React, {Component} from "react";

class FlowerBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flowers: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/flowers"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let flowers = data.map((flowers, index) => {
        return (
          <div key={index}>
            <h3>{flowers.strainName}</h3>
            <p>{flowers.strainType}</p>
            <p>{flowers.priceTier}</p>
            <p>{flowers.inventoryQuantity} ea</p>
          </div>
        )
      })
      this.setState({flowers:flowers})
    })
  }

  render() {
    return (
      <div className="FlowerBoard">
        {this.state.flowers}
      </div>
    );
  }
}

export default FlowerBoard
