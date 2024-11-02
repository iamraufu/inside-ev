// src/components/SignIn.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already signed in and redirect to the data view page if so
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        navigate('/view-data'); // Redirect if user is authenticated
      }
      setLoading(false)
    });
    return unsubscribe; // Cleanup the observer on unmount
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/view-data'); // Redirect to the data view page after sign-in
      setLoading(false)
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in, please try again.");
      setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center mt-28">
        {loading && <p>Loading...</p>}
     { !loading && <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Admin Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-amber-600 text-white rounded">
         {loading? "Loading": "Sign In"}
        </button>
      </form>}
    </div>
  );
};

export default SignIn;
