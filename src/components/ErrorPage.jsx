
import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); 

  const errorMessage = error.statusText || error.message || "An error occurred";
  const errorCode = error.status || "Unknown";

  return (
    <div id="error-page" className="error-page flex flex-col items-center justify-center h-screen bg-gray-100">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        size="3x"
        className="error-icon text-red-500 mb-4"
      />
      <div className="error-content flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Oops!</h1>
        <p className="text-gray-700">Something went wrong.</p>
        <p className="text-gray-600 font-italic">
          Error details:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-gray-700">Error Message: {errorMessage}</li>
          <li className="text-gray-700">Error Code: {errorCode}</li>
        </ul>
      </div>
     
    </div>
  );
}
