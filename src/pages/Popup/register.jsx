import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { useDispatch } = require('react-redux');

// import mixpanel from '../../mixpanel';
import { setUser } from '../../redux/Auth/actions';

const Register = () => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginClick = async () => {
    chrome.storage.local.set({
      user: {
        isLogin: true,
        username: username,
      },
    }, () => {
      dispatch(setUser({ isLogin: true, username: username }));
      navigate('/menu');
    });
  };

  return (
    <div className='h-50'>
        enter your username
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className='rounded-lg bg-black text-white p-5' onClick={handleLoginClick}>
            Register
        </button>
    </div>
  );
};

export default Register;