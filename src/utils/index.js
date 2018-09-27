export const boxArray = obj => {
  console.log('console: obj', obj);
  console.log('console: boxArray', Object.prototype.toString.call(obj) != '[object Array]');
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};