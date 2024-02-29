var buttons = document.getElementsByClassName("SideHlsPlayer");
var Screens = document.getElementsByClassName("Screen");

var B1 = buttons[0];
var B2 = buttons[1];
var B3 = buttons[2];

B1.onclick = function(){
    var MainScreenBox = document.getElementById("AScreenBox");
    var SwapScreenBox = document.getElementById("BScreenBox");
    Screens  = document.getElementsByClassName("Screen");
    var Screen1 = Screens[0];
    var Screen2 = Screens[1];

    MainScreenBox.appendChild(Screen2);
    SwapScreenBox.appendChild(Screen1);

    SwitchControl(Screen2,Screen1);
    
    updateLabel()

    Screen1.pause();
    Screen2.pause();
}
B2.onclick = function(){
    var MainScreenBox = document.getElementById("AScreenBox");
    var SwapScreenBox = document.getElementById("CScreenBox");
    Screens  = document.getElementsByClassName("Screen");
    var Screen1 = Screens[0];
    var Screen2 = Screens[2];

    MainScreenBox.appendChild(Screen2);
    SwapScreenBox.appendChild(Screen1);

    SwitchControl(Screen2,Screen1);
 
    updateLabel()
    Screen1.pause();
    Screen2.pause();
}
B3.onclick = function(){
    var MainScreenBox = document.getElementById("AScreenBox");
    var SwapScreenBox = document.getElementById("DScreenBox");
    Screens  = document.getElementsByClassName("Screen");
    var Screen1 = Screens[0];
    var Screen2 = Screens[3];

    MainScreenBox.appendChild(Screen2);
    SwapScreenBox.appendChild(Screen1);

    SwitchControl(Screen2,Screen1);
    
    updateLabel()
    Screen1.pause();
    Screen2.pause();
}


function SwitchControl(MainScreen,SwapScreen) {
    MainScreen.controls = true;
    SwapScreen.controls = false;

    SwapScreen.play();
}

updateLabel()

function updateLabel(){
    var label = document.getElementsByClassName("Label");
    var Screens = document.getElementsByClassName("Screen");

    Array.from(label).forEach(function(iLabel, index) {
        iLabel.textContent = Screens[index].getAttribute("name")
    })
}