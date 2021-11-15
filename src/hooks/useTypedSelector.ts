import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/RootState';

/**
* function to define typeSafe state
*/
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
