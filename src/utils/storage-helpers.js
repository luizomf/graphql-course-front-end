const defaultStorage = localStorage;

export const storageHelpers = {
  add(key, value) {
    return defaultStorage.setItem(key, JSON.stringify(value));
  },
  delete(key) {
    return defaultStorage.removeItem(key);
  },
  get(key) {
    const item = defaultStorage.getItem(key);
    if (!item) return item;
    return JSON.parse(item);
  },
};
