import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import Form from './Form';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: '',
  warriorClass: ''
}


function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
