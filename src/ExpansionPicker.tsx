import React, { Props } from "react";

class ExpansionPicker extends React.Component<any> {
  render() {
    return (
      <div className="expansionPicker">
        <select onChange={this.props.loadCards} style={{ width: "200px" }}>
          <option value="none">Choose Card Set</option>
          {Array.from(this.props.sets).map((el: any) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
        <select
          onChange={this.props.setTypesFilter}
          style={{ marginBottom: "10px" }}
        >
          <option value="all">All</option>
          {Array.from(this.props.types).map((el: any) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default ExpansionPicker;
