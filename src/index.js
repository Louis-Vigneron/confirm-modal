import React from "react";
import ReactDOM from "react-dom";
import Modal from "./lib/Modal"
import './lib/modal.css';

const App = () => (  
    
    <Modal title ='Modal Confirmation' handleCancelClick={''} handleConfirmClick={''}/>
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

