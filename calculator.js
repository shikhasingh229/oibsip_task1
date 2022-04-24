let screen =document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(i of buttons)
{
    i.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=="×")
        {
            screen.value += "*";

        }
        else if(buttonText=="÷")
        {
            screen.value += "/";

        }
        else if(buttonText=="−")
        {
            screen.value += "-";

        }
        else if(buttonText=="+")
        {
            screen.value += "+";

        }
        else if(buttonText=="0")
        {
            screen.value += "0";

        }
        else if(buttonText=="1")
        {
            screen.value += "1";

        }
        else if(buttonText=="2")
        {
            screen.value += "2";

        }
        else if(buttonText=="3")
        {
            screen.value += "3";

        }
        else if(buttonText=="4")
        {
            screen.value += "4";

        }
        else if(buttonText=="5")
        {
            screen.value += "5";

        }
        else if(buttonText=="6")
        {
            screen.value += "6";

        }
        else if(buttonText=="7")
        {
            screen.value += "7";

        }
        else if(buttonText=="9")
        {
            screen.value += "9";

        }
        else if(buttonText=="8")
        {
            screen.value += "8";

        }
        else if(buttonText==".")
        {
            screen.value += ".";

        }
        else if(buttonText=="(")
        {
            screen.value += "(";

        }
        else if(buttonText==")")
        {
            screen.value += ")";

        }
        else if(buttonText=='C')
        {
            screen.value = '';
        }
        else if(buttonText=='🔙')
        {
            screen.value=screen.value.substr(0,screen.value.length-1)
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screen.value)
        }
        else if(buttonText=='%')
        {
            screen.value+="%";
        }

    })
}