import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Pages/Auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile, fetchUserStatus } from './redux/userSlice';
import { Home } from './Pages/Home';
import { useAppDispatch } from './redux/hooks';
import { useHookState } from './hooks/useReduxTools';
import Layout from './Components/layout';
import InitialPopup from './Components/InitialPopup';
import Explore from './Pages/Explore';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useHookState();

  useEffect(() => {
    dispatch(fetchUserStatus());
    dispatch(fetchProfile());
  }, []);

  return (
    <div>
      {user?.isAuth && !user?.profile?.username && user?.profile?.userId && (
        <InitialPopup />
      )}
      <Routes>
        {user?.isAuth === null ? (
          ''
        ) : (
          <>
            {!user?.isAuth && (
              <>
                <Route path='/auth' element={<Auth />} />
                <Route path='*' element={<Navigate to='/auth' />} />
              </>
            )}
            {user.isAuth && user?.profile?.userId && (
              <>
                <Route
                  path='/profile/:id'
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path='/home'
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path='/explore'
                  element={
                    <Layout>
                      <Explore />
                    </Layout>
                  }
                />
                <Route
                  path='/bookmarks'
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
              </>
            )}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
