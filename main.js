

function shuffle(arr1 , arr2) {
  for (let i = 1 ; i < arr1.length ; i++) {
      let x = Math.floor(Math.random()*(i+1));
      [arr1[i] , arr1[x]] = [arr1[x] , arr1[i]];
      [arr2[i] , arr2[x]] = [arr2[x] , arr2[i]];
  
  }

  return [arr1,arr2];
}

let cnt = 0 , card1 , card2;
let cards = document.querySelectorAll('.cards');
let srcs = [] , alts = [];

let imgs = document.getElementsByTagName('img');
for (let i = 0 ; i < imgs.length ; i++) {
      srcs.push(imgs[i].src);
      alts.push(imgs[i].alt);
}

[srcs,alts] = shuffle(srcs , alts);

//console.log(srcs[2]);

for (let i = 0 ; i < imgs.length ; i++) {
      imgs[i].src = srcs[i];
      imgs[i].alt = alts[i];
} 

let c1 , c2;
let Win = 0;
for (let i = 0 ; i < cards.length ; i++) {
      
      cards[i].addEventListener('click' , () => {
            
            if (cnt < 2 && !cards[i].classList.contains('clicked')) {
                  cnt++;
                  cards[i].classList.add('clicked');
                  
                  let s , ss;
                  if (cnt === 1) {
                        c1 = cards[i];
                  }

                  else if (cnt === 2) {
                       ss = cards[i].children[1].children[0].alt;
                //       console.log(ss);
                       s = c1.children[1].children[0].alt; 
                       c2 = cards[i];
                        setTimeout(() => {
                              
                              if (s == ss) {
                                    Win += 2;    
                                 if (Win === 12) {
                                    if(confirm('Congrats..Play Again?'))  location.reload();
                                 }
                              }
                              
                           else {
                              c2.classList.remove('clicked');
                              c1.classList.remove('clicked');
                           }
                        
                        cnt = 0;
                  } , 1000)
                  
                  
            } 
      }
      
})

}


