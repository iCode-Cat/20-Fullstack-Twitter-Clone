import { useAppSelector, useAppDispatch } from '../redux/hooks';

export const useHookState = () => {
  const state = useAppSelector((state) => state);
  return state;
};

export const useDispatchHook = () => {
  const dispatch = useAppDispatch();

  return { dispatch };
};
