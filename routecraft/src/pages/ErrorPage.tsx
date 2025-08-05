import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
      </main>
    </>
  );
};

export default ErrorPage;
