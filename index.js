
var screen = document.getElementById('screen');
$("h1").slideDown();
var screenValue = ' ';
buttons = $("button");
for (item of buttons) {
    item.addEventListener("click", (e) => {
        butText = e.target.innerText;
        console.log(butText);
        if (butText == "X") {

            butText = "*";
            screenValue+= butText;
            screen.value=screenValue;
        }
        else if (butText == "C")
        { screenValue="";
          screen.value=screenValue;
        }
        else if(butText=="=")
        {
            screen.value=eval(screenValue);
            
        }
        else{
            screenValue+=butText;
            screen.value=screenValue;
        }

    })
}