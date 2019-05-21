const colors = [
  "#ffc9c9", "#fcc2d7", "#eebefa", "#d0bfff",
  "#bac8ff", "#a5d8ff", "#99e9f2", "#96f2d7",
  "#b2f2bb", "#d8f5a2", "#ffec99", "#ffd8a8"
];

export const getRendomColor = () => {
  return colors[parseInt(Math.random()*colors.length)]
}