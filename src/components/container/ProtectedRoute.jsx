import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectTo, element }) {
  if(isAllowed){
    return element
  }else {
    return <Navigate to={redirectTo} />
  }
}

ProtectedRoute.propTypes = {
    isAllowed: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
    
}

export default ProtectedRoute
