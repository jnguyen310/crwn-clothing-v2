import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import Button from '../../button/button.component';

const SignIn = () => {
  // useEffect(() => {
  //   async function getRedirectResultFunc() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getRedirectResultFunc();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign In with Google Popup
      </Button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Popup
      </button> */}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
