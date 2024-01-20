const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn_disp_pwd1 = document.getElementById("btn_disp_pwd1")
btn_disp_pwd1.textContent = ""

let btn_disp_pwd2 = document.getElementById("btn_disp_pwd2")
btn_disp_pwd2.textContent = ""

let copyBtn_1 = document.getElementById("copyBtn1")
copyBtn_1.textContent = ""


if (name != null) {
  document.getElementById("greeting")
    .innerHTML = "Hello " + name + "! Nice to see you!";
}

function getRandomNumber(){
    let number = Math.floor((Math.random()*characters.length))
    return number
}

function getRandomLetter(){
    let letter = characters[getRandomNumber()]
    return letter
}

function genPassword(){
    let password = getRandomLetter()
    for(let i = 0; i<14; i++)
    {
        password = password + getRandomLetter()
    }
        return password
}
    

function assignPwd(){
    btn_disp_pwd1.textContent = genPassword()

    btn_disp_pwd2.textContent = genPassword()
}
    

function copyBtn1(){
    navigator.clipboard.writeText(btn_disp_pwd1.textContent);
}

function copyBtn2(){
    navigator.clipboard.writeText(btn_disp_pwd2.textContent);
}

