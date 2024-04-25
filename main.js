
let firstCol , secCol , firstCard , secCard; let cnt = 0 , win = 0;
let cards = document.querySelectorAll(".card");
let finished = false;
cards.forEach((card) => {
      card.onclick = () => {
        cnt++; 
        if (cnt == 1) {firstCard = card; firstCol = card.style.backgroundColor = `${card.classList[1]}`;}  
        if (cnt >= 2 && card != firstCard) {
            secCard = card;
            secCol = card.style.backgroundColor = `${card.classList[1]}`;
            setTimeout(() => {
                if (secCol == firstCol) {alert("Great!"); win += 2;}
                else {
                    alert("Try Again..");
                    console.log(secCard.classList[2]);
                    firstCard.style.backgroundColor = `${firstCard.classList[2]}`;
                    secCard.style.backgroundColor = `${secCard.classList[2]}`;
                }
                 
                 cnt = 0;

              } , 500);
                  
               
        }
    
      }
    }, this);
    
    // // console.log(win);
    // // if (win === 16) finished = true;
    //   let f = true;
    //    cards.forEach((card) => {
    //     console.log(card.style.backgroundColor);
    //   if() f = false;
    //    } , this);
    
    //   if (f) {
    //    if (confirm("Congratulations!.. Want to play again?")) location.reload();
    //   } 
