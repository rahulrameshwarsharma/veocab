export const handleErrors = (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 401:
          return "Unauthorized. Please log in again.";
        case 403:
          return "You do not have permission to perform this action.";
        case 404:
          return "The requested resource was not found.";
        default:
          return data?.message || "An error occurred. Please try again.";
      }
    }
    return "Network error. Please check your connection.";
  };
  