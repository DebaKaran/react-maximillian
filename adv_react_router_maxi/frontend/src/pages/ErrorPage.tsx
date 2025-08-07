import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  // Check if it's a thrown Response object (as per React Router)
  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      const data = JSON.parse(error.data);
      message = data.message;
    } else if (error.status === 404) {
      title = "Not Found!";
      message = "Could not find resource or page.";
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
