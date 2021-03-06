import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gameActions } from '../state/actions';

/**
* function to bind actions to state
*/
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(gameActions, dispatch);
};
