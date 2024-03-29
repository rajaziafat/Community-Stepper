// App.js
import  { useState } from 'react';
import './App.css'
import Modal from './Components/Modal';

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen ">
      <button onClick={() => setShowSignupModal(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Open</button>

      {showSignupModal && <Modal onClose={() => setShowSignupModal(false)} />}
    </div>
  );
}





export default App;
