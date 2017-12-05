

var colors = ["푸른", "붉은", "검은", "하얀", "주홍빛의"];
var natures = ["늑대", "태양", "독수리", "바람", "달", "우주", "땅"];
var words = ["눈물", "환생", "기상", "일격", "유령", "십자가"];

var color = colors[Math.floor(Math.random() * colors.length)];
var nature = natures[Math.floor(Math.random() * natures.length)];
var word = words[Math.floor(Math.random() * words.length)];

//console.log("%s %s의 %s!", color, nature, word);
console.log([color, nature, "의", word + "!!"].join(" "));


//.join()
var animal = ["원숭이", "고양이", "물고기", "도마뱀"];
joined_animal = animal.join();
console.log(joined_animal);

