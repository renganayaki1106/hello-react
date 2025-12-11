import React,{useContext, useState} from 'react'
import ThemeContext from '../../context/ThemeContext';
import AuthContext from '../../context/AuthContext';

const UseContext = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const themeStyle = {
        backgroundColor : theme === 'light' ? 'white' : 'black',
        color : theme === 'light' ? 'black' : 'white'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email,password);
        setEmail('');
        setPassword('');
    }


  return (
    <div style={themeStyle} className='all-app'>
        <h1>Theme Context</h1>
        <button onClick={toggleTheme} className='btn'>Toggle Theme</button>

        <h1>Auth Context</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" className='btn' />
        </form>
    </div>
  )
}

export default UseContext