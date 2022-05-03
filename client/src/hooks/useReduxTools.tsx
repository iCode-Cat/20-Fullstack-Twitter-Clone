import { useAppSelector, useAppDispatch } from '../redux/hooks';

export const useHookState = () => {
  const state = useAppSelector((state) => state);
  return state;
};

export const useDispatchHook = (f: () => void) => {
  const dispatch = useAppDispatch();
  dispatch(f);

  return;
};
