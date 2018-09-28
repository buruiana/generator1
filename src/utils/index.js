export const boxArray = obj => {
  console.log('console: ---------', Object.prototype.toString.call(obj) != '[object Array]');
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};