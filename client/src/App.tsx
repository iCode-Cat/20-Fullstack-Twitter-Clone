import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Pages/Auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile, fetchUserStatus } from './redux/userSlice';
import { Home } from './Pages/Home';
import { useAppDispatch } from './redux/hooks';
import { useState } from './hooks/useReduxTools';
import Layout from './Components/layout';
import InitialPopup from './Components/InitialPopup';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useState();

  useEffect(() => {
    dispatch(fetchUserStatus());
    dispatch(fetchProfile());
  }, []);

  return (
    <div>
     {user?.isAuth && !user?.profile?.username && user?.profile?.userId && <InitialPopup/> }
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
            {user.isAuth && user?.profile?.userId &&  (
              <>
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
                      <Home />
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
