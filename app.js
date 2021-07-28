function sliderFunction() {
  const quotes = [
    'У людей теперь нет времени друг для друга',
    'Знаете, в положении умирающего есть свои преимущества. Когда нечего терять — не боишься риска',
    'Не требуйте гарантий. И не ждите спасения от чего-то одного — от человека, или машины, или библиотеки. Сами создавайте то, что может спасти мир, — и если утонете по дороге, так хоть будете знать, что плыли к берегу',
    'Есть преступления хуже, чем сжигать книги. Например — не читать их',
    'Сами по себе мы ничего не значим. Не мы важны, а то, что мы храним в себе',
    'Книги – только одно из вместилищ, где мы храним то, что боимся забыть. В них нет никакой тайны, никакого волшебства. Волшебство лишь в том, что они говорят, в том, как они сшивают лоскутки вселенной в единое целое',
    'Мне нужно поговорить, а слушать меня некому. Я не могу говорить со стенами, они кричат на меня. Я не могу говорить с женой, она слушает только стены',
    'В конце концов, мы живём в век, когда люди уже не представляют ценности. Человек в наше время — как бумажная салфетка: в неё сморкаются, комкают, выбрасывают, берут новую, сморкаются, комкают, бросают… Люди не имеют своего лица. Как можно болеть за футбольную команду своего города, когда не знаешь ни программы матчей, ни имён игроков? Ну-ка, скажи, например, в какого цвета фуфайках они выйдут на поле?',
    'Не пытайтесь судить о книгах по обложке',
    'У человека есть одно замечательное свойство: если приходится все начинать сначала, он не отчаивается и не теряет мужества, ибо он знает, что это очень важно, что это стоит усилий'
  ];
  
  const colors = randomColors(10);
  const body = document.querySelector('body');
  
  let count = 0;
  let slideCollection;
  
  body.addEventListener('click', nexSlide)
  
  createSlide();
  
  // ================================================================
  function randomColors (number) {
    let colors = [];
    for (let i = 0; i < number; i++) {
      let R = Math.round(15*Math.random()).toString(16);
      let G = Math.round(15*Math.random()).toString(16);
      let B = Math.round(15*Math.random()).toString(16);
      colors.push('#'+R+G+B);
    }
    return colors;
  }
  
  function createSlide () {
    quotes.forEach((item, i) => {
      let slide = document.createElement('div');
      slide.classList.add('slide');
      slide.style.backgroundColor = colors[i];
      if (i !== 0) {
        slide.classList.add('hide');
      }
      let text = document.createElement('div')
        text.textContent = item;
      slide.append(text);
      body.append(slide);
    })
    slideCollection = document.querySelectorAll('.slide');
  }
  
  
  function nexSlide () {
    slideCollection[count].classList.add('hide');
  
    if (count + 1 < slideCollection.length) {
      count++;   
    } else {
      count = 0;
    }
  
    slideCollection[count].classList.remove('hide');
  }
  
}

document.addEventListener('DOMContentLoaded', sliderFunction);
