var min = 1;
var max = document.querySelector('.maximum');
var mechNum;
var healthPoints
var maxHealthPoints

var tries = document.querySelector('.tries');
var input = document.querySelector('.numInp');

var prgAnswer = document.querySelector('.prg-answer')

var checkButton = document.querySelector('.check-button')
checkButton.disabled = true

var restart = document.querySelector('.restart')
var main = document.querySelectorAll('.main')

restart.addEventListener('click', function(){
    checkButton.disabled = true
    max.disabled = false;
    input.value = '';
    guess = '';
    max.value = '';
    tries.innerHTML = '';
    prgAnswer.innerText = '';
}) 

max.addEventListener('blur', function() {
    checkButton.disabled = false
    maxValue = max.value;    
    if (maxValue === '' || maxValue === ' ' || maxValue === null || maxValue === NaN || maxValue === undefined) {
        tries.innerText = `Enter max number first`;
        return
    } else if (maxValue < 0) {
        tries.innerText = `Your number is too negative, I need a positive one to play`;
        return
    } else if (maxValue === '1' || maxValue === '0') {
        tries.innerText = 'There is not enough space to play, try to think of a number that is bigger than 1';
        return
    } else if (maxValue % 1 !== 0) {
        tries.innerText = 'Restart the game and enter integer number';
    } else if (maxValue >= 2) {
        mechNum = Math.floor(Math.random() * (maxValue - min + 1)) + min;
        maxHealthPoints = Math.ceil(Math.log2(mechNum)); // 10 HP for number 1000;
            if (maxHealthPoints <= 1) {
                maxHealthPoints = 2;
         }
        healthPoints = maxHealthPoints;
        tries.innerText = `You have ${healthPoints}/${maxHealthPoints} tries, try to guess the number`;
        checkButton.disabled = false;
        max.disabled = true
    }
}) 

checkButton.addEventListener('click', function() {
    var answer = document.createElement('div')
    if (input.value === '' || input.value === ' ' || input.value === NaN) {
        prgAnswer.innerText=`You shoud guess a number`;
        return
    }
    if (input.value > mechNum) {
        prgAnswer.innerText=`My number is less ` + input.value;
        healthPoints -= 1;
        tries.innerText = `You have ${healthPoints}/${maxHealthPoints} tries` 
    } else if (input.value < mechNum) {
        prgAnswer.innerText=`My number is greater ` + input.value;
        healthPoints -= 1;
        tries.innerText = `You have ${healthPoints}/${maxHealthPoints} tries`
    } else if (+input.value === mechNum){
        prgAnswer.innerText=`Yeah! U're right!`;
    }
    
    if (healthPoints === 0) {
        tries.innerText = `You lost`;
        checkButton.disabled = true;
    } else if (healthPoints <0) {
        tries.innerText = `Something goes wrong. Reload the game`;
    }
})

/////////////////////////////////////////////////////

var min2 = 0;
var max2
var compMax = document.querySelector('.comp-max')

var hits = document.querySelector('.hit-points')
var maxHP;
var healthPoints;

var fight = document.querySelector('.fight'); //start the game
var less = document.querySelector('.less');
less.disabled = true;
var greater = document.querySelector('.greater');
greater.disabled = true;
var equal = document.querySelector('.equal')
equal.disabled = true;

var resultDiv = document.querySelector('.result-div') //parent div for guessing log
var result
var guess
var thisIsIT = document.querySelector('.equal') // button you need to push when a machine find the number

var restart2 = document.querySelector('.restart2') // restart the game

fight.addEventListener('click', function() {
    compMax.disabled = true;
    max2 = compMax.value;
      
    if (max2 === '' || max2 === ' ' || max2 === null || max2 === NaN || max2 === undefined) {
        var result = document.createElement('div');
        result.innerText = `* Enter max number first`;
        document.body.append(result);
        return
    } else if (max2 === '1' || max2 === '0') {
        var result = document.createElement('div');
        result.innerText = '* There is not enough space to play, try to think of a number that is bigger than 1';
        document.body.append(result);
        return
    } else if (max2 % 1 !== 0) {
        var result = document.createElement('div');
        result.innerText = '* Restart the game and enter integer number';
        document.body.append(result);
        return
    } else if (max2 <= 0) {
        var result = document.createElement('div');
        result.innerHTML = `* Your number is inappropriate, enter integer number >=2` 
        document.body.append(result);
        return
    }

    maxHP = Math.ceil(Math.log2(max2)); // 10 HP for number 1000;
    /* hits.innerText = `Comp ` *//*  has${healthPoints} tries of${maxHP}` */;
    healthPoints = maxHP;
    hits.innerHTML = healthPoints + ' tries of ' + maxHP;
    less.disabled = false;
    greater.disabled = false;
    equal.disabled = false;
    calculation();
    
})


function calculation(){
    var result = document.createElement('div');
    guess = Math.round(((max2 - min2) / 2) + min2);
    result.innerHTML = guess 
    resultDiv.append(result);
    hits.innerHTML = healthPoints + ' tries of ' + maxHP
    if (healthPoints === 0) {
        var result = document.createElement('div');
        guess = 'Computer lost... or somebody cheated;)'
        result.innerHTML = guess;
        resultDiv.append(result);
        less.disabled = true;
        greater.disabled = true;
        equal.disabled = true;     
        fight.disabled = true; 
    }
}


less.addEventListener('click', function() {
    // число, которое назвала программа --- максимум
    max2 = guess;
    healthPoints -= 1;
    calculation();
})

greater.addEventListener('click', function() {
    // число, которое назвала программа --- минимум
    min2 = guess; 
    healthPoints -= 1;
    calculation();
})

thisIsIT.addEventListener('click', function() {
    var result = document.createElement('div');
    guess = 'Computer wins'
    result.innerHTML = guess;
    resultDiv.append(result);
    less.disabled = true;
    greater.disabled = true;
    equal.disabled = true;     
    fight.disabled = true;     
})

restart2.addEventListener('click', function(){
    compMax.disabled = false;
    compMax.value = '';
    max2 = 0;
    hits.innerHTML = '0 tries of 0';
    fight.disabled = false; 
    resultDiv.innerHTML = ''   
 }) 

main.forEach(menu => {
    menu.addEventListener('click', function() {
        game1.classList.add('game-one');
        game2.classList.add('game-two');
        intoduction.classList.replace('introduction-off' ,'introduction');
    })
})


//// visibillity 
var turngame1 = document.querySelector('.turn-game-one')
var turngame2 = document.querySelector('.turn-game-two')

var game1 = document.querySelector('.game-one')
var game2 = document.querySelector('.game-two')

var intoduction = document.querySelector('.introduction')

turngame1.addEventListener('click', function() {
    game1.classList.remove('game-one');
    intoduction.classList.replace('introduction', 'introduction-off');
})

turngame2.addEventListener('click', function(){
    game2.classList.remove('game-two');
    intoduction.classList.replace('introduction', 'introduction-off');
})

