import { useRouter } from "next/router";

const WithLoginAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    // Check if running on the client-side
    if (typeof window !== "undefined") {
      // Retrieve user role from local storage or API
      const user = JSON.parse(localStorage.getItem("user")); // Adjust this based on your implementation

      // Redirect to appropriate route if the user is already logged in
      if (user) {
        router.push("/"); // Adjust the redirection route as needed
        return null; // Optional: Render a loading state or error message instead of null
      }
    }

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default WithLoginAuth;
