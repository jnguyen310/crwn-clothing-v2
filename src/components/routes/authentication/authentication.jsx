import { useState } from 'react';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const defaultSignInFormFields = {
  email: '',
  password: '',
};

const Authentication = () => {
  const { signInFormFields, setSignInFormFields } = useState(
    defaultSignInFormFields
  );

  // const { email, password } = signInFormFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setSignInFormFields({ ...signInFormFields, [name]: value });
  };

  return (
    <div className='authentication-container'>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
