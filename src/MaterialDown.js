const PropTypes = require('prop-types');
const {useEffect} = require('react');

// const parse = require('remark-parse');
// const PropTypes = require('prop-types');


const MaterialDown = (props) => {
  const data = props.children || '';
  const style = props.style || '';

  useEffect(() => {
    console.log(style);
  });
  return data;
};

MaterialDown.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};

module.exports = MaterialDown;
