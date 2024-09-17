import  { useState } from 'react';
import InputBox from '../components/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === '' || password === '') {
      setError('Please enter both username and password');
    } else {
     
      console.log('Login successful');
      setError(null);
    }
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
       
        <InputBox
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <br />
      
        <InputBox
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;