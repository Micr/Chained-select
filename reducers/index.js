import cars from '../cars-dict'
/**
 * [description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
const createSelectsArray = (store, action) => {
  var item;
  var selects = [];
  // TODO create initial state
  var id = store ? action.id : 1;
  do {
    item = { id: id, types: [] };
    if (cars[id].types) {
      cars[id].types.forEach((id) => item.types.push(Object.assign({}, cars[id], { id: id })));
    }
    selects.push(item);
    id = cars[id].parent;
  } while (id);
  // Do not have to use reverse but the you have to use for loop in ChainedSelect component with i starting at selects.lenght - 1
  return selects.reverse();
}

export default createSelectsArray;
