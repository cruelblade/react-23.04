export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('myChat');
    if (serializeState === null) {
      return undefined;
    }
    return JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('myChat', serializeState);
  } catch (err) {
    console.log(err);
  }
};
