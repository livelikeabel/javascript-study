function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0)  noteIsPossible = false;
    }
    else noteIsPossible = false;
  })

  console.log(magazineObj)
  return noteIsPossible;
}


const result = harmlessRansomNote(
  'hello abelko good to see you. i really miss you',
  'good morning every one. Are you see abelko ?'
)

console.log(result)