import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(5, 'Username must be at least 5 characters long'),
    email: yup
        .string()
        .trim()
        .required('Email is required')
        .email('Must be a valid email address'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
    terms: yup.boolean(),
    warriorClass: yup
        .string()
        .oneOf(['Swordsman', 'Archer', 'Necromancer', 'Cleric', 'Mage'], 'You must declare a Warrior Class')
})

export default formSchema;