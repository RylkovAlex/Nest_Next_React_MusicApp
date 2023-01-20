import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCrators from '@/store/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCrators, dispatch);
};
