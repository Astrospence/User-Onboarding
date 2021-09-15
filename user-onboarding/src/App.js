import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import Form from './Form';
import Warrior from './Warrior';

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
  const [warriors, setWarriors] = useState(initialWarriors);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

/////// HELPERS ///////

  const getWarriors = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setWarriors(res.data.data);
      }).catch(err => console.error(err))
  }

  const postNewWarrior = newWarrior => {
    axios.post('https://reqres.in/api/users', newWarrior)
      .then(res => {
        setWarriors([res.data, ...warriors]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

/////// EVENT HANDLERS ///////

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newWarrior = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: !!formValues.terms,
      warriorClass: formValues.warriorClass.trim()
    }
    postNewWarrior(newWarrior);
  }

/////// SIDE EFFECTS ///////

  useEffect(() => {
    getWarriors();
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      <div>
        <h2>Warrior Registry</h2>
        {warriors.map(warrior => {
          return (
            <Warrior values={warrior}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
