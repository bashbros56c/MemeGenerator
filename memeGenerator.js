const topTextInput = document.querySelector('#topText')
const imageInput = document.querySelector('#image')
const bottomTextInput = document.querySelector('#bottomText')
const memePageDiv = document.querySelector('#memePage')
const form = document.querySelector("form");


function addMeme(memePageDiv, topText, image, bottomText){
    console.log(memePageDiv,topText, image, bottomText)
    
    const memePage = document.createElement("div")
    memePage.setAttribute('class', 'memePage')
    memePageDiv.append(memePage)

    const memePic = document.createElement("img")
    memePic.src = image
    memePage.append(memePic)

    const topLine = document.createElement("p")
    topLine.innerText = topText
    topLine.setAttribute('id', 'topMemeText')
    memePage.append(topLine)

    const bottomLine = document.createElement("p")
    bottomLine.innerText = bottomText
    bottomLine.setAttribute('id', 'bottomMemeText')
    memePage.append(bottomLine)
}
    

form.addEventListener("submit", function(e){
    e.preventDefault();
    addMeme(memePageDiv, topTextInput.value, imageInput.value, bottomTextInput.value)
    form.reset();
})


memePageDiv.addEventListener("click", function(e){
    e.target.parentElement.remove()
})

function formValidate(){
    if (imageInput.value == ""){
        alert("Image required")
    }
}

setTimeout(function (){
  alert("Click on created memes to delete them, ENJOY!")      
  }, 1000);

