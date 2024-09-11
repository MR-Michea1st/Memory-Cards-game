

function shuffle(arr1) {
  for (let i = 1 ; i < arr1.length ; i++) {
      let x = Math.floor(Math.random()*(i+1));
      [arr1[i] , arr1[x]] = [arr1[x] , arr1[i]];
  }

  return arr1;
}

let cnt = 0 , card1 , card2;
let cards = document.querySelectorAll('.cards');
let srcs = [] , classes = [];

let imgs = document.getElementsByTagName('img');
for (let i = 0 ; i < imgs.length ; i++) {
      srcs.push(imgs[i].src);
      classes.push(cards[i].classList[2]);
}

srcs = shuffle(srcs);

//console.log(srcs[2]);

for (let i = 0 ; i < imgs.length ; i++) {
      imgs[i].src = srcs[i];
} 

let c1 , c2;
let Win = 0;
for (let i = 0 ; i < cards.length ; i++) {
      
      cards[i].addEventListener('click' , () => {
            
            if (cnt < 2 && !cards[i].classList.contains('clicked')) {
                  cnt++;
                  cards[i].classList.add('clicked');
                  
                  if (cnt === 1) {
                        c1 = cards[i];
                        let s = cards[i].children[1].children[0].src;
                        card1 = "";
                        for (let i = 34 ; s[i] != '.' ; i++) card1+=s[i];
                       // console.log(card1);
                  }

                  else if (cnt === 2) {
                        let ss = cards[i].children[1].children[0].src;
                        c2 = cards[i];
                        card2 = "";
                        for (let i = 34 ; ss[i] != '.' ; i++) card2+=ss[i];
                       // console.log(card2);                       
                        setTimeout(() => {
                              
                              if (card1 === card2) {
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


