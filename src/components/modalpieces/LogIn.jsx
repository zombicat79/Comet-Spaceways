import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';
import { AuthContext } from '../../contexts/AuthContext';

import Form from "./../forms/Form";
import Badge from "./../Badge";
import Button from '../Button';
import InfoPanel from './../InfoPanel';
import * as formConfig from './../../data/form-configs/login-form-config';

import { getUserAccount } from '../../services/userService';

import cometBadge from '/logos/ctsw-logo_dark_badge.png';

function LogIn({ props }) {
    const [formValues, setFormValues] = useState({});
    const [linkText, setLinkText] = useState('I do not have an account yet...');
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { dispatch } = useContext(LayoutContext);
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLinkText(action) {
      setLinkText(action === 'hover' ? 'Register a new account!' : 'I do not have an account yet...');
    }

    function handleNavigation(path) {
      closeModal();
      navigate(path);
    }

    function handleFormChange(newFormValues) {
      setFormValues(newFormValues['login-form']);
    }

    function handleCompletion(result) {
      result === 'ok' ? setAuthenticated(true) : setAuthenticated(false);
    }

    async function handleLogin() {
      const loginResponse = await getUserAccount(formValues.username);
      if (loginResponse === 'ko') {
        setErrorMsg('There was a problem while trying to log you in. Please try again later...');
        return;
      } else if (!loginResponse || (loginResponse.password !== formValues.password)) {
        setErrorMsg('Ooops! Wrong credentials. Please try again...');
        return;
      }

      setIsAuth(true);
      handleNavigation('/');
    }

    function closeModal() {
      dispatch({ type: 'toggle/modal' });
      setTimeout(() => {
          dispatch({ type: 'set/scroll', payload: true });
          dispatch({ type: 'fill/modal', payload: { content: null, props: {} }})
      }, 1000);
  }

    return (
      <main className="modalpiece">
        <article className="modalpiece__content">
            <Badge imgSrc={cometBadge}/>
            <h3 className="modalpiece__heading">Identify yourself, spacefarer!</h3>
            <Form 
                id="login-form"
                display="flex-column"
                formFields={formConfig.loginFormFields} 
                defaultValues={formConfig.loginFormDefaultValues} 
                formRules={formConfig.loginFormRules}
                onFormCheck={handleCompletion}
                onFormChange={handleFormChange}
            />
            <Button type="primary" action={handleLogin} text={authenticated ? "Ready to launch! 🚀" : "It's a no-go 🙁"} isDisabled={!authenticated} />
            {errorMsg !== '' && <InfoPanel type="alert">{errorMsg}</InfoPanel>}
            <div 
              className="btn-wrapper btn-wrapper--actionable" 
              onMouseEnter={() => handleLinkText('hover')} 
              onMouseLeave={() => handleLinkText('leave')}
              onClick={() => handleNavigation('/create-account')}
            >
              <Button type="link" text={linkText} />
            </div>
        </article>
      </main>
    );
}

export default LogIn;