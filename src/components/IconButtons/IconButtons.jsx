import PropTypes from 'prop-types';
import './IconButtons.css';

export const IconButtons = ({ children, onCLick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onCLick} {...allyProps}>
    {children}
  </button>
);

IconButtons.defaultProps = {
  onClick: () => null,
  children: null,
};

// IconButtons.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };
