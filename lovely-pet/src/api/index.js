export const req = url => {
  const request = new Request(url);
  return fetch(request)
    .then(res => res.json())
    .catch(err => {
      console.error(err);
    })
}