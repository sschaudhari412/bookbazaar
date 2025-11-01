import React, { useState, useContext } from 'react';
import api, { setAuthToken } from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { setToken } = useContext(AuthContext);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  const submit = async (e) => {
    e.preventDefault();
    if(!emailRegex.test(email)) return setErr('Invalid email format');
    if(!passwordRegex.test(password)) return setErr('Password must have 1 uppercase and 1 digit and min 6 chars');
    try {
      const res = await api.post('/users/login', { email, password });
      const token = res.data.token;
      setAuthToken(token);
      setToken(token);
      window.location = '/';
    } catch (err) {
      setErr(err.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3>Login</h3>
        {err && <div className="alert alert-danger">{err}</div>}
        <form onSubmit={submit}>
          <input className="form-control mb-2" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input className="form-control mb-2" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}
