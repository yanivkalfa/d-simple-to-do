import PropTypes from 'prop-types';


export const ToDosType = PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.number,
  id: PropTypes.string,
  status: PropTypes.string,
  transaction: PropTypes.object,
  done: PropTypes.bool,
  name: PropTypes.string,
  deleteInProgress: PropTypes.bool,
}));

export const JustAnother = PropTypes.shape({
  key: PropTypes.number,
});
