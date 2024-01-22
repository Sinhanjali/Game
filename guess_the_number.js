let num = Math.floor(Math.random() * 100 + 1);

let count_guess = 0;
            

let message = document.getElementById("message");

let count_number = document.getElementById("count_number");

const image = document.getElementById("image");

let submit = document.getElementById("submit").onclick = function myFunction() {

    let text_msg;

    let count_text;
            if (document.getElementById("enter").value < num) {
    
                count_guess++;
        
                text_msg = " You guessed it wrong \n Guess the number greater than " + document.getElementById("enter").value;
        
                count_text = " Attempts " + count_guess;
        
                message.innerHTML = text_msg;
        
                count_number.innerHTML = count_text;
        
                image.src = "think.png";
        
                submit.addEventListener('click', handleClick());
        
            }
            else if (document.getElementById("enter").value > num) {
        
                count_guess++;
        
                text_msg = " You guessed it wrong \n Guess the number lesser than " + document.getElementById("enter").value;
        
                count_text = " Attempts " + count_guess;
        
                message.innerHTML = text_msg;
        
                count_number.innerHTML = count_text;
        
                image.src = "think.png";
        
                submit.addEventListener('click', handleClick());
            }
            else {
        
                text_msg = "You gussed it right \n The number is " + document.getElementById("enter").value;
        
                if(count_guess == 0)
                {
                    count_text = " YAY!! You gussed it in first try";
                }

                else
                {
                    count_text = " Congratulation!! You gussed it in " + count_guess + " attempts";
                }
        
                message.innerHTML = text_msg;
        
                count_number.innerHTML = count_text;
                
                image.src = "correct_guess.png";
                
                submit.addEventListener('click', handleClick());

                count_guess = 0;
            }
        
    function handleClick(){
        document.getElementById("enter").value = '';
    }
}
