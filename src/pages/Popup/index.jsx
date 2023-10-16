import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  MemoryRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import store from '../../redux/store';

import '../../lang';
import '../../styles/main.css'

import Register from './register';
import { setUser } from '../../redux/Auth/actions';
import { setupSentry } from '../../sentry';
import {
  getKeyFromLocalStorage,
} from '../../utils';

const Popup = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getKeyFromLocalStorage('user');
      setUsername(user?.username)
      dispatch(setUser(user));
    };

    fetchUser();
  }, []);

  return (
    <>
      <MemoryRouter initialEntries={['/menu']}>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route
            path="menu"
            element={
              <PrivateRoute>
                <>Menu, hello {username}</>
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </>
  );
};

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.Auth.user);

  if (user === null) {
    return null;
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/register" />;
  }
};

setupSentry();

const container = document.getElementById('popup');
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <Popup />
    </Provider>
  </>
);
