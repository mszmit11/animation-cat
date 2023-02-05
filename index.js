const content = document.querySelector('.content')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const headComponents = document.querySelector('.headComponents')
const pawLeft = document.querySelector('.pawLeft')
const pawRight = document.querySelector('.pawRight')
const pawRearLeft = document.querySelector('.pawRearLeft')
const pawRearRight = document.querySelector('.pawRearRight')
const mouth = document.querySelector('.mouth')
const drinkItem = document.querySelector('.drinkItem')
const buttonText1 = document.querySelector('.buttonText1')
const buttonText3 = document.querySelector('.buttonText3')
const buttonText4 = document.querySelector('.buttonText4')
const eyeBackgroundLeft = document.querySelector('.eyeBackgroundLeft')
const eyeBackgroundRight = document.querySelector('.eyeBackgroundRight')
const tailAnimation = document.querySelector('.tailAnimation')

audio1 = new Audio('audio/meow1.mp3')
audio2 = new Audio('audio/meow2.mp3')
audio3 = new Audio('audio/open.mp3')
audio4 = new Audio('audio/drinking.mp3')
count1 = 0
count2 = 0
count3 = 0
count4 = 0
count5 = 0
function moveHead(){
    count1 = 0
    if (count1 == 0 && count5 == 0 && count4 == 0){
        headComponents.classList.toggle('headComponentsBtn')
        mouth.classList.toggle('mouthBtn')
        mouth.classList.add('mouthBtn')
        audio1.play()
    }
}
function movePaw(){
    count2 = 0
    if (count2 == 0 && count5 == 0 && count4 == 0){
        count2 = 1
        pawLeft.classList.toggle('pawLeftBtn')
        pawRight.classList.toggle('pawRightBtn')
        pawRearLeft.classList.toggle('pawRearLeftBtn')
        pawRearRight.classList.toggle('pawRearRightBtn')
        mouth.classList.toggle('mouthBtn')
        mouth.classList.add('mouthBtn')
        audio2.play()
    }
}
function drinking(){
    if (count4 == 0 && count5 == 0){
        count4 = 1
        headComponents.classList.remove('headComponentsBtn')
        drinkItem.classList.toggle('drinkItemBtn')
        mouth.classList.toggle('mouthBtn')
        mouth.classList.add('mouthBtn')
        pawLeft.classList.remove('pawLeftBtn')
        pawRight.classList.remove('pawRightBtn')
        buttonText4.innerHTML = 'Napoj mnie'
        audio3.play()
    }else if(count4 == 1){
        count4 = 2
        drinkItem.classList.add('drinkingItemBtn')
        pawLeft.classList.add('pawLeftBtn')
        pawRight.classList.add('pawRightBtn')
        mouth.classList.add('mouthDrinkingBtn')
        mouth.classList.add('mouthBtn')
        buttonText4.innerHTML = 'Zabierz puszkę'
        audio4.play()
    }else if (count4 == 2){
        count4 = 0
        drinkItem.classList.toggle('drinkingItemBtn')
        drinkItem.classList.toggle('drinkItemBtn')
        pawLeft.classList.toggle('pawLeftBtn')
        pawRight.classList.toggle('pawRightBtn')
        mouth.classList.toggle('mouthDrinkingBtn')
        mouth.classList.add('mouthBtn')
        buttonText4.innerHTML = 'Podaj colę'
    }    
}
function sleep(){
    eyeBackgroundLeft.classList.toggle('eyeLeftSleep')
    eyeBackgroundRight.classList.toggle('eyeRightSleep')
    content.classList.toggle('contentNight')
    tailAnimation.classList.toggle('tail')
    if (count5 == 0){
        count5 = 1
        count4 = 0
        headComponents.classList.remove('headComponentsBtn')
        drinkItem.classList.remove('drinkingItemBtn')
        drinkItem.classList.remove('drinkItemBtn')
        mouth.classList.remove('mouthBtn')
        mouth.classList.remove('mouthDrinkingBtn')
        pawLeft.classList.remove('pawLeftBtn')
        pawRight.classList.remove('pawRightBtn')
        buttonText3.innerHTML = 'Wybudź'
        buttonText4.innerHTML = 'Podaj colę'
        audio2.play()
    }else{
        count5 = 0
        buttonText3.innerHTML = 'Uśpij'
        audio1.play()
    }
}
btn1.addEventListener('click', moveHead)
btn2.addEventListener('click', movePaw)
btn3.addEventListener('click', sleep)
btn4.addEventListener('click', drinking)