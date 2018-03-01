import pathToRegexp from 'path-to-regexp';

const filterList = [
  '/',
  '/login',
  '/blogs',
  '/blogs/:id',
]
export function routeMiddleware(path) {
  return filterList.filter((item) => {
    const match = pathToRegexp(item).exec(path);
    if (match || item === path) {
      return true;
    } else {
      return false;
    }
  }).length;
}
