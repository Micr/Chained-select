const SET_ID = 'SET_ID';

function setId(id) {
  return {
    type: SET_ID,
    id: id
  }
}

export default setId;
