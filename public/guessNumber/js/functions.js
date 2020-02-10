            // Your JavaScript goes here
            var randomNumber = Math.floor(Math.Random*99)+1;
            var guesses = document.querySelector('#guesses');
            var lastResult=document.querySelector('#lastResult');
            var lowOrhi = document.querySelector('#lowOrhi');
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            
            var guessCount = 1;
            //setGameOver();
            var resetButton = document.querySelector('#reset');
            guessField.focus();
            //resetButton.style.display = 'none';
            //setGameOver();
            function checkGuess(){
                var userGuess = Number(guessField.value);
                if(guessCount===1){
                    guesses.innerHTML = 'Previous guesses: ';
                }
                if(userGuess < 1 || userGuess>99 || isNaN(userGuess)){
                    lastResult.innerHTML = "Invalid Argument";
                    lastResult.style.backgroundColor = "red";
                    guessField.value = '';
                    guessField.focus();
                }
                else if(userGuess === randomNumber) {
                    guesses.innerHTML += userGuess + " ";
                    lastResult.innerHTML = 'Congratulations! You got it right';
                    lastResult.style.backgroundColor = 'green';
                    lowOrhi.innerHTML=' ';
                    setGameOver();
                } else if (guessCount === 7){
                    guesses.innerHTML += userGuess + " ";
                    lastResult.innerHTML = 'Sorry, you lost!';
                    //setGameOver();
                    //lastResult.innerHTML = 'Wrong!';
                    lastResult.style.backgroundColor = 'red';
                    if(userGuess< randomNumber){
                        lowOrhi.innerHTML = 'Last guess was too low!';
                    } else if (userGuess>randomNumber){
                        lowOrhi.innerHTML = 'Last guess was too high!';
                    }
                    setGameOver();
                } else {
                    guesses.innerHTML += userGuess + ", ";
                    lastResult.innerHTML = "Wrong!";
                    lastResult.style.backgroundColor = "red";
                    if (userGuess < randomNumber) {
                        lowOrhi.innerHTML = "Last guess was too low!";
                    } else if (userGuess > randomNumber) {
                        lowOrhi.innerHTML = "Last guess was too high!";
                    }
                    guessCount++;
                    guessField.value='';
                    guessField.focus();
                }
            }
            
            guessSubmit.addEventListener('click',checkGuess);
            setGameOver();
            resetGame();
            //resetButton.style.display = 'inline';
            //guessSubmit.disabled = true;
            function setGameOver(){
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click',resetGame);
            }
            function resetGame(){
                guessCount = 1;
                var resetParas = document.querySelectorAll('.resultParas p');
                for (var i = 0; i < resetParas.length ; i++) {
                    resetParas[i].textContent = '';
                }
                
                resetButton.style.display = 'inline';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                randomNumber = Math.floor(Math.random()*99)+1;
            }