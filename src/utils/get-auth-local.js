import { storageHelpers } from './storage-helpers';

export const authDataKey = '__localLogged__';

export const getAuthLocal = () => {
  const authLocalData = storageHelpers.get(authDataKey);

  let authData = {
    userId: '',
    userName: '',
  };

  if (!authLocalData) return authData;

  authData = {
    userId: authLocalData?.userId,
    userName: authLocalData?.userName,
  };

  return authData;
};
