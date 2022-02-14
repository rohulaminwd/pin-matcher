
function codePin(id1){
    let pin = document.getElementById(id1);
    const pinInput = Math.round(Math.random() * 10000);
    const convertString = pinInput + '';

    if(convertString.length == 4){
        pin.value = pinInput;
    }
    else if(convertString.length != 4){
       return pin.value = ''
    }
}

document.getElementById('button-click').addEventListener('click', function(event){
    const inputScren = document.getElementById('inputValu')
    let input = event.target.innerText;
    
    if(input == 'C'){
        inputScren.value = '';
    }
    else if(input == '<'){
        inputScren.value = inputScren.value.slice(0, -1);
    }
    if(isNaN(input)){
        
    }
    else{
        inputScren.value = inputScren.value + input;
    } 
})

document.getElementById('submit').addEventListener('click', function(){

    const inputScren = document.getElementById('inputValu')
    const pin = document.getElementById('inputPin')

    const pinNotMach = document.getElementById('pinNotMach');
    const pinMach = document.getElementById('pinMach');

    if (inputScren.value == '' && pin.value == '') {
        pinMach.style.display = 'none';
        pinNotMach.style.display = "none";
    }
    else if (inputScren.value == pin.value) {
        pinMach.style.display = 'block';
        pinNotMach.style.display = "none";
    }
    else if (inputScren.value != pin.value){
        pinMach.style.display = "none";
        pinNotMach.style.display = 'block';
    }

    inputScren.value = '';
    pin.value = '';
})