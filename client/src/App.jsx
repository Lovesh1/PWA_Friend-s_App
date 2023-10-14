import { useState } from 'react';
import './index.css'; 

function App() {
  
  const [ID, setPersonID] = useState('');
  const [FriendID, setFriendID] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)

   
    const res = await fetch('/server/route/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ID, FriendID, password}),
     })
      
     const data = await res.json()
     console.log(data)
     if(data.success == false){
      seterror(data.message);
      setloading(false);
      return
     }

     setloading(false)
    
    setPersonID('');
    setFriendID('');
    setPassword('');
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className='text-bold text-3xl text-center my-4'> Add your Friend</h1>

  
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      
          <input type="text" className="p-3 rounded-xl border border-slate-600 outline-none" placeholder='Your ID' value={ID} onChange={(e) => setPersonID(e.target.value)} />
      
          <input type="text" className="p-3 rounded-xl border border-slate-600 outline-none" placeholder='FriendID' value={FriendID} onChange={(e) => setFriendID(e.target.value)} />
        
          <input type="password" className="p-3 rounded-xl border border-slate-600 outline-none" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
       
          <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-xl hover:opacity-90 disabled:opacity-80'>{loading ? 'Loading..': 'Add friend'} </button>
      </form>

           {
              error && <p className='text-xl font-bold text-red-400'>{error}</p>
            }
    </div>
  );
}

export default App;
