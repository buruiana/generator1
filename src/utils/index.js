export const boxArray = obj => {
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};

export const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;