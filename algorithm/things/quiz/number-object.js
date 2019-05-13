// widget Dat에서 숫자타입으로만 구성된 요소를 뽑아 배열만들기
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]


// data
const widget = {
  debug: 'on',
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center'
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;'
  }
}

// code

const widgetFilter = (widget, filteredWidget = []) => {
  for (let key in widget) {
    if (typeof widget[key] === 'object') widgetFilter(widget[key], filteredWidget)
    if (typeof widget[key] === 'number') filteredWidget.push(key)
  }
  return filteredWidget
}

console.log(widgetFilter(widget))
