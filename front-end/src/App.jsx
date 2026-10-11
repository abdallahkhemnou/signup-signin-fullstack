import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Sign-up';
import SignIn from './components/Sign-in';
function App() { 
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};
export default App;