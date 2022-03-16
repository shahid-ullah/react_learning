import React from "react";
import "./App.css";

function Item(props) {
  const items = props.items;
  const result = items.map((item, index) => {
    return (
      <div key={index} className="item">
        <p>{item}</p>
        <p className="remove_item" onClick={() => props.removeItem(index)}>
          X
        </p>
      </div>
    );
  });
  return result;
}

function ItemDisplay(props) {
  return (
    <div>
      <Item items={props.items} removeItem={props.removeItem} />
    </div>
  );
}

class Form extends React.Component {
  state = {
    item: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("handleChange", name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    this.props.addItem(this.state);
    this.setState({ item: "" });
  };

  render() {
    const item = this.state.item;
    return (
      <form>
        <label htmlFor="item">Add Item </label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    items: ["python", "Ruby", "Rust"],
  };

  addItem = (state) => {
    const items = this.state.items.slice();
    items.push(state.item);
    this.setState({ items: items });
  };
  removeItem = (remove_item_index) => {
    const filter_items = this.state.items.filter((item, index) => {
      return index != remove_item_index;
    });
    this.setState({ items: filter_items });
  };

  render() {
    return (
      <div>
        <ItemDisplay items={this.state.items} removeItem={this.removeItem} />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
