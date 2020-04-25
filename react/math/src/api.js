export const getProblems = () => {
  return fetch('http://localhost:5000/fe-problems')
    .then(res => res.json())
    .catch(err => {
      throw err
    });
};

export const getSimilars = () => {
  return fetch('http://localhost:5000/fe-similars')
    .then(res => res.json())
    .catch(err => {
      throw err
    });
};

