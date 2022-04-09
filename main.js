let drums = document.querySelectorAll('.drum')
drums.forEach( (drum) =>{
    drum.addEventListener('click', ()=>{
        let buttonText = drum.textContent
        playing(buttonText)
        animat(buttonText)
    })
})

document.addEventListener('keydown', (e)=>{
    let keyText = e.key
    playing(keyText)
    animat(keyText)
})

function playing(key){
    switch (key) {
        case 'w':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case 'a':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;
        case 's':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;  
        case 'd':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'j':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break; 
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;                         
        default:
            console.log('This no key?');
            break;
    }
}

function animat(key){
    let animatButton = document.querySelector(`.${key}`)
    animatButton.classList.add('pressed')
    setTimeout(()=>{
        animatButton.classList.remove('pressed')
    },100)
}