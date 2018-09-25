export const boxArray = obj => {
  return Object.prototype.toString.call(obj) != '[object Array]'
    ? [obj]
    : obj;
};