import { createStore } from 'redux'
import { connect } from 'react-redux'
import setId from '../actions'
import ChainedSelect from '../components/ChainedSelect'

const mapStateToProps = (state) => {
  return {
    selectArray: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChange: (id) => {
      dispatch(setId(id))
    }
  }
}

const ChainedSelectContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(ChainedSelect)

export default ChainedSelectContainer;
