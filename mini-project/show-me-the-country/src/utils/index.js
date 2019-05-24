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

export const filterByValue = (allCountries, value, filter) => {
  return allCountries.reduce((acc, country) => {
    const upValue = value.toUpperCase();
    const upCountry = filter === 'callingCodes'
      ? country[filter][0].toUpperCase()
      : country[filter].toUpperCase()

    if (upCountry.includes(upValue)) {
      upCountry.substring(0, upValue.length) === upValue
        ? acc.unshift(country)
        : acc.push(country)
    }
    return acc;
  }, [])
}