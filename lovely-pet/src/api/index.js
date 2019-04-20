const request = new Request('http://localhost:8080/cat');

export const req = () => {
  return fetch(request)
    .then(res => res.json())
    .catch(err => {
      console.error(err);
    })
}