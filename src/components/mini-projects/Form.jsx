import React, {useState} from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`${name},${email},${phone},${password}`);
      alert("Your Form Submitted successfully");
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
    }
  return (
    <div className="all-app">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
