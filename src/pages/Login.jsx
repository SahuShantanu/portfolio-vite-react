import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    alert(isLogin ? 'Login successful! (Demo only)' : 'Signup successful! (Demo only)');
  };

  return (
    <section className="login-section">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete={isLogin ? 'current-password' : 'new-password'}
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <div className="login-toggle">
        {isLogin ? (
          <span>Don't have an account?{' '}
            <button type="button" onClick={() => setIsLogin(false)} className="toggle-btn">Sign Up</button>
          </span>
        ) : (
          <span>Already have an account?{' '}
            <button type="button" onClick={() => setIsLogin(true)} className="toggle-btn">Login</button>
          </span>
        )}
      </div>
    </section>
  );
}
