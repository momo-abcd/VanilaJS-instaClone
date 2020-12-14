const change = document.querySelector('.changeImg');

const nodes = change.childNodes;
let i = 1;

function showImage(){
    if(i > 5) i=1;
    if(i ==1 ){
        nodes[i].classList.add('nowImg');
        nodes[i].classList.remove("notNow");
        nodes[i+2].classList.remove("nowImg");
        nodes[i+4].classList.remove("nowImg");
        nodes[i].classList.add("notNow");
    }else if (i == 3) {
        nodes[i].classList.add('nowImg');
        nodes[i].classList.remove("notNow");
        nodes[i+2].classList.remove("nowImg");
        nodes[i-2].classList.add("notNow");
        nodes[i-2].classList.remove("nowImg");
    }else if (i == 5) {
        nodes[i].classList.add('nowImg');
        nodes[i].classList.remove("notNow");
        nodes[i-2].classList.remove("nowImg");
        nodes[i-2].classList.add("notNow");
        nodes[i-4].classList.remove("nowImg");
    }
        i += 2;
   }
   setInterval(showImage,3000);