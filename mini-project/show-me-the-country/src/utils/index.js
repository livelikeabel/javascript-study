export const sortByString = (countries, field, direction) => {
  return countries.sort((a, b) => {
    const aField = a[field].toUpperCase();
    const bField = b[field].toUpperCase();
    if (direction === 'up') {
      if (aField < bField) return -1;
      if (aField > bField) return 1;
    } else if (direction === 'down') {
      if (aField < bField) return 1;
      if (aField > bField) return -1;
    }
    return 0;
  })
}

export const sortByNumber = (countries, field, direction) => {
  return countries.sort(
    (a, b) => direction === 'up'
      ? a[field][0] - b[field][0]
      : b[field][0] - a[field][0]
  )
}