const selectPort = document.getElementById("PortSelect");

function addOption(text,value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectPort.add(option);
}


