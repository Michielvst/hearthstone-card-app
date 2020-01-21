import React, { Props } from 'react';

class ExpansionPicker extends React.Component<any> {
  render() {
    return (
      <select onChange={this.props.loadCards} style={{ width: "200px", marginTop: "10px" }}>
        <option value="Basic">Choose Card Set</option>
        {Array.from(this.props.sets).map((el: any) => {
          return (
            <option key={el} value={el}>{el}</option>
          );
        })}
      </select>
    );
  }
}

export default ExpansionPicker;