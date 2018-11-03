import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Navigation from './Navigation';

const pages = [
  {
    path: '/',
    title: 'Search'
  }
];

function mapStateToProps() {
  return {pages};
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: (path) => dispatch(push(path))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);