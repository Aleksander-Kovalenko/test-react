import { Component } from 'react';
import { Wrapper, TriggerButton } from './Collapsible.styled';

class Collapsible extends Component {
  static defaultProps = {
    isOpen: false,
    isDisabled: false,
    triggerPosition: 'top',
    mt: 0,
    mr: 0,
    mb: 0,
    ml: 0,
  };
  state = {
    isOpen: this.props.isOpen,
    isDisabled: this.props.isDisabled,
  };

  toggle = () => {
    this.setState(stat => ({
      isOpen: !stat.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { children, isDisabled, triggerPosition, ...spacingProps } = this.props;
    return (
      <Wrapper {...spacingProps}>
        <TriggerButton
          type="button"
          onClick={this.toggle}
          disabled={isDisabled}
          position={triggerPosition}
        >
          Trigger Button
        </TriggerButton>
        {isOpen && <p>{children}</p>}
      </Wrapper>
    );
  }
}

export default Collapsible;
