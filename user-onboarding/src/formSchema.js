import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(5, 'Username must be at least 5 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    terms: yup.boolean(),
    warriorClass: yup
        .string()
        .oneOf(['swordsman', 'archer', 'necromancer', 'cleric', 'mage'], 'You must declare a Warrior Class')
})

export default formSchema;