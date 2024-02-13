const button1= document.querySelector("button")
const body = document.querySelector("body")
const color=['red','blue','green','pink','grey','orange']
body.style.backgroundColor ='purple'

button1.addEventListener("click", function () {
    body.style.backgroundColor =
      color[Math.floor(Math.random() * color.length)];
  });

