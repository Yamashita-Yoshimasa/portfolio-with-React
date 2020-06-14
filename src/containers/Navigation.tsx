import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ToggleClass } from '../actions/toggle';
import NavBar from '../components/Navigation';
import { ToggleState } from '../reducer';

interface StateProps {
  BarClass: string;
  NavClass: string;
}

interface DispatchProps {
  ToggleClass: () => void;
}

const mapStateToProps = (state: ToggleState): StateProps => ({
  BarClass: state.BarClass,
  NavClass: state.NavClass,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ToggleClass: () => dispatch(ToggleClass()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
