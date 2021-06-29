export const parseGraphQLError = (error) => {
  if (!error || error === null || typeof error !== 'object') {
    return error;
  }

  if (error?.graphQLErrors && error.graphQLErrors.length > 0) {
    return error.graphQLErrors.map((error) => {
      return {
        name: error.extensions.code,
        code: error.extensions.code,
        message: error.message,
        stacktrace: error.extensions.exception.stacktrace,
      };
    })[0];
  }

  return {
    name: error.name,
    code: 'UNKNOWN',
    message: error.message,
    stacktrace: error.stacktrace,
  };
};
