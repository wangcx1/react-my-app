import {increment,decrement,incrementAsync} from '../redux/actions';
import {connect} from 'react-redux';
import Count from '../Count';
export default connect(
    state=>({
        count:state
    }),{increment,decrement,incrementAsync}
)(Count)