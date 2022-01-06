import classNames from 'classnames';
import React, { Component } from 'react';
import './ColorP.css';

import { ColorPickerContainer, ColorPickerTitle, ButtonOptions } from './ColorPicker.styled.jsx';

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  handleClickColor = index => {
    this.setState({ activeOptionInd: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionInd,
    });
  };

  render() {
    const { activeOptionInd } = this.state;
    return (
      <ColorPickerContainer>
        <ColorPickerTitle>Color Picker</ColorPickerTitle>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              className={this.makeOptionClassName(index)}
              onClick={() => this.handleClickColor(index)}
              key={label}
              style={{
                backgroundColor: color,
              }}
            ></button>
          ))}
        </div>
      </ColorPickerContainer>
    );
  }
}

export default ColorPicker;
