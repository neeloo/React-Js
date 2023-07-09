import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Nilu
    //     </a>
    //   </header>
    // </div>


//   start coding hear?*************************
    <>
  
{/*  1==adding Navbar.js ******************* */}

{/* <Navbar  title='TextUtil'/> */}

 {/*  2===change the name of titleand about   using prorpstype **************/}

 <Navbar  title='TextUtil'  About=' About us'/>     

{/*  3==for default proprs ************/} 
  {/* <Navbar/>     */}

  {/* adding textForm.js ***************************/}
  <div className="container  my-3" >
  <TextForm heading=" Enter the text to analyze"/>
  </div>
  


    </>
  );
}

export default App;
