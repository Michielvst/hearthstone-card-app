import React, { Props } from 'react';

class ExpansionPicker extends React.Component<any> {

  render() {
    return (
      <React.Fragment>
        <select onChange={this.props.loadCards} style={{ width: "200px", marginTop: "10px" }}>
          <option value="none">Choose Card Set</option>
          {Array.from(this.props.sets).map((el: any) => {
            return (
              <option key={el} value={el}>{el}</option>
            );
          })}
        </select>
        <select onChange={this.props.setTypesFilter}>
          <option value="all">All</option>
          {Array.from(this.props.types).map((el: any) => {
            return (
              <option key={el} value={el}>{el}</option>
            );
          })}
        </select>
      </React.Fragment>
    );
  }
}

export default ExpansionPicker;