import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    // Retrieve user role from local storage or API
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user")); // Adjust this based on your implementation

      // Redirect to appropriate route if the user role is not admin
      if (!user || !user.isAdmin) {
        router.push("/login"); // Adjust the redirection route as needed
        return null; // Optional: Render a loading state or error message instead of null
      }
    }
    // Render the wrapped component if the user role is admin
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
