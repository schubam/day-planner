import React from "react";

export default class WeekDataInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onChangeData = this.onChangeData.bind(this);
  }

  onChangeData(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <td>
        <input
          className="weight"
          value={this.state.value}
          type="number"
          size="6"
          step="0.1"
          onChange={this.onChangeData}
        />
      </td>
    );
  }
}
