import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';

import Form from "./../forms/Form";
import Badge from "./../Badge";
import Button from '../Button';
import * as formConfig from './login-form-config';

import cometBadge from '/logos/ctsw-logo_dark_badge.png';

function LogIn({ props }) {
    const [linkText, setLinkText] = useState('I do not have an account yet...');
    const [authenticated, setAuthenticated] = useState(false);
    const { dispatch } = useContext(LayoutContext);
    const navigate = useNavigate();

    function handleLinkText(action) {
      setLinkText(action === 'hover' ? 'Register a new account!' : 'I do not have an account yet...');
    }

    function handleNavigation() {
      closeModal();
      navigate('/create-account');
    }

    function closeModal() {
      dispatch({ type: 'toggle/modal' });
      setTimeout(() => {
          dispatch({ type: 'toggle/scroll' });
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
              />
              <Button type="primary" action={() => null} text={authenticated ? "Ready to launch!" : "It's a no-go"} isDisabled={!authenticated} />
              <div onMouseEnter={() => handleLinkText('hover')} onMouseLeave={() => handleLinkText('leave')}>
                <Button type="link" action={handleNavigation} text={linkText} />
              </div>
        </article>
      </main>
    );
}

export default LogIn;