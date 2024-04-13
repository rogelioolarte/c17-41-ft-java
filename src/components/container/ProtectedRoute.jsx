import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { UserContext, UserProvider } from '../../contexts/user.context';
import { TOKEN_GET } from '../../config/token';

function ProtectedRoute({  redirectTo, element }) {

  const { user } = UserProvider(UserContext);
  const [loggedIn, setLoggedIn] = useState(user || TOKEN_GET);

  useEffect(() => {
    setLoggedIn(user || TOKEN_GET );
  }, [user]);

  if(loggedIn){
    return element
  }else {
    return redirectTo
  }
}

ProtectedRoute.propTypes = {
    redirectTo: PropTypes.element.isRequired,
    element: PropTypes.element.isRequired,
    
}

export default ProtectedRoute
