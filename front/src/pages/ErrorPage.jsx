import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();
  const errorMessage = new URLSearchParams(location.search).get("message");

  return (
    <div>
      <h1>{errorMessage}</h1>
    </div>
  );
}

export default ErrorPage;
