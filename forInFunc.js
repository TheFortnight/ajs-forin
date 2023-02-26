export default function orderByProps(obj, args) {
    let arr = [];
  
    for (const prop in obj) {
      if (prop !== args[0] && prop !== args[1]) {
        arr.push([prop, obj[prop]]);
      }
    }
    arr = arr.sort();
    arr.unshift([args[1], obj[args[1]]]);
    arr.unshift([args[0], obj[args[0]]]);
    return arr;
  }
  