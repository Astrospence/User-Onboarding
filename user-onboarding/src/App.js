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

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
  warriorClass: ''
}

const initialWarriors = [];
const initialDisabled = true;


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [warrior, setWarrior] = useState(initialWarriors);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
