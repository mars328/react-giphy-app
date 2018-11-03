import {connect} from 'react-redux';
import {searchPerformed} from '../../actions/search';
import SearchForm from './SearchForm';

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: (searchTerm) => dispatch(searchPerformed(searchTerm))
  };
}

export default connect(() => ({}), mapDispatchToProps)(SearchForm);