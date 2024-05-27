const result = document.getElementById('result')
const computer = document.getElementById('computer')
const user = document.getElementById('user')

function computerGetsValue(){
    const choices = ['rock','paper','scissors']
    const choice = choices[Math.round(Math.random() * 2)]
    return choice
}

function paper(){
    computer.src = `rock.png`
    user.src = 'rock.png'
    computer.classList = 'computer animate';
    user.classList = 'user animate'
    setTimeout(paperDelayed,900)
}

function paperDelayed(){
    const computerChoice = computerGetsValue()
    const userChoice = 'paper'
    if(computerChoice === 'paper'){
        result.innerText = 'Its a tie'
    }else if(computerChoice === 'scissors'){
        result.innerText = 'Youre A Super Madman'
    }else{
        result.innerText = 'You Won'
    }
    computer.classList = 'computer';
    user.classList = 'user'
    user.src = 'paper.png'
    computer.src = `${computerChoice}.png`
}

function scissors(){
    computer.src = `rock.png`
    user.src = 'rock.png'
    computer.classList = 'computer animate';
    user.classList = 'user animate'
    setTimeout(scissorsDelayed,900)
}

function scissorsDelayed(){
    const computerChoice = computerGetsValue()
    const userChoice = 'scissors'
    if(computerChoice === 'paper'){
        result.innerText = 'You Won'
    }else if(computerChoice === 'scissors'){
        result.innerText = 'Its a tie'
    }else{
        result.innerText = 'Youre A Super Madman'
    }
    computer.classList = 'computer';
    user.classList = 'user'
    user.src = 'scissors.png'
    computer.src = `${computerChoice}.png`
    
}

function rock(){
    computer.src = `rock.png`
    user.src = 'rock.png'
    computer.classList = 'computer animate';
    user.classList = 'user animate'
    setTimeout(rockDelayed,900)
}

function rockDelayed(){
    const computerChoice = computerGetsValue()
    const userChoice = 'rock'
    if(computerChoice === 'paper'){
        result.innerText = 'Youre A Super Madman'
    }else if(computerChoice === 'scissors'){
        result.innerText = 'You Won'
    }else{
        result.innerText = 'Its a tie'
    }
    computer.classList = 'computer';
    user.classList = 'user'
    computer.src = `${computerChoice}.png`
}