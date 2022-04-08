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

function App() {
  const dispatch = useAppDispatch();
  const { user } = useState();

  useEffect(() => {
    dispatch(fetchUserStatus());
    dispatch(fetchProfile());
  }, []);

  return (
    <div>
      <Routes>
        {!user.isAuth && <Route path='/auth' element={<Auth />} />}
        {user.isAuth && (
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
        <Route
          path='*'
          element={<Navigate to={user.isAuth ? '/home' : 'auth'} />}
        />
      </Routes>
    </div>
  );
}

export default App;