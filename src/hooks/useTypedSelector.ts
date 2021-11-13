import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/RootState';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
