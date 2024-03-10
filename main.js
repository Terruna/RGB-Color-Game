let box = document.querySelectorAll(".square")
let h1 = document.querySelector("h1")



// testing

function applyRandomColor(divId) {
    const rgb =  getRandomRGB()
    const div = document.getElementById(divId);
    div.style.backgroundColor = `rgb(${rgb.R},${rgb.G},${rgb.B})`
    return rgb
}


    let colorsList = [
        a = applyRandomColor('div1'),
        b = applyRandomColor('div2'),
        c = applyRandomColor('div3'),
        d = applyRandomColor('div4'),
        e = applyRandomColor('div5'),
        f = applyRandomColor('div6')

    ];

console.log(colorsList);
// square
box.forEach(function(){

document.getElementById("div1").style.backgroundColor = a
document.getElementById("div2").style.backgroundColor = b
document.getElementById("div3").style.backgroundColor = c
document.getElementById("div4").style.backgroundColor = d
document.getElementById("div5").style.backgroundColor = e
document.getElementById("div6").style.backgroundColor = f

})


function choosencolor(){
    arr = colorsList
    arrLenght=arr.length
    let randomId = Math.floor(Math.random()* arrLenght)
   
     const rgbObject =  arr[randomId]
     const rgbString = `rgb(${rgbObject.R}, ${rgbObject.G}, ${rgbObject.B})`;
    return rgbString
    


}

let mainclr = choosencolor()
console.log("main",mainclr);


function getRandomRGB() {
    return {
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255)
    };
}


h1.innerHTML = mainclr

box.forEach(element => element.addEventListener('click',function(){
   
    
       
    
    
  
    if(element.style.backgroundColor != mainclr){
        element.style.backgroundColor = "transparent"
        p.innerHTML = "Try Again!"
    }
    else {
        box.forEach(otherbox => {
            otherbox.style.backgroundColor = mainclr
            p.innerHTML = "Correct!"
            header.style.backgroundColor = mainclr

        })
    }
    
}))
console.log(h1.innerHTML);
let reload = document.getElementById("reload")

reload.addEventListener("click",function(){
   colorsList = [
        a = applyRandomColor('div1'),
        b = applyRandomColor('div2'),
        c = applyRandomColor('div3'),
        d = applyRandomColor('div4'),
        e = applyRandomColor('div5'),
        f = applyRandomColor('div6')

    ];

    mainclr = choosencolor()
h1.innerHTML = mainclr

    
})


function showBoxes(count) {
    box.forEach((box, index) => {
      if (index < count) {
        box.style.display = 'block'; 
      } else {
        box.style.display = 'none'; 
      }
    });
  }

  let p = document.querySelector("p")
  let header = document.querySelector(".header")















let easy = document.getElementById("easy")
let hard = document.getElementById("hard")

easy.addEventListener("click",function(){
    
   
    
showBoxes(3)
hard.style.backgroundColor = "aliceblue"
hard.style.color = "black"

    colorsList = [
    a = applyRandomColor('div1'),
    b = applyRandomColor('div2'),
    c = applyRandomColor('div3'),
    

];

mainclr = choosencolor()
h1.innerHTML = mainclr


})


hard.addEventListener("click",function(){
    showBoxes(6)
    hard.style.backgroundColor = "rgb(55, 129, 240)"
    hard.style.color = "aliceblue"
    
    

    colorsList = [
        a = applyRandomColor('div1'),
        b = applyRandomColor('div2'),
        c = applyRandomColor('div3'),
        d = applyRandomColor('div4'),
        e = applyRandomColor('div5'),
        f = applyRandomColor('div6')

    ];

    mainclr = choosencolor()
h1.innerHTML = mainclr
})



// let hint  = document.querySelector(".hint")
// let hintbtn = document.getElementById("hintbtn")
// hintbtn.addEventListener("click",function(){
//     hint.style.backgroundColor = mainclr
// })
