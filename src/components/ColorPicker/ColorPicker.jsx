import React, { Component } from 'react';

import { ColorPickerContainer, ColorPickerTitle, ButtonOptions } from './ColorPicker.styled.jsx';

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  handleClickColor = index => {
    this.setState({ activeOptionInd: index });
  };
  render() {
    return (
      <ColorPickerContainer>
        <ColorPickerTitle>Color Picker</ColorPickerTitle>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <ButtonOptions
              onClick={() => this.handleClickColor(index)}
              key={label}
              style={{
                backgroundColor: color,
                border: index === this.state.activeOptionInd ? '2px solid black' : 'none',
              }}
            ></ButtonOptions>
          ))}
        </div>
      </ColorPickerContainer>
    );
  }
}

export default ColorPicker;
