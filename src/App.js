// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
'use client';

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Publications from './pages/publication';
// import Education from './pages/education';
// import Experience from './pages/experience';
// import Teaching from './pages/teaching';
// import Accomplishments from './pages/accomplishments';

import Footer from './Footer';
import './styles.css' 


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About Me />} />
                <Route path='/publication' element={<Publications />} />
                {/* <Route path='/education' element={<Education />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/teaching' element={<Teaching />} />
                <Route path='/accomplishments' element={<Accomplishments />} /> */}
                
            </Routes>
            <Footer />
        </Router>
        
    );
}
 
export default App;