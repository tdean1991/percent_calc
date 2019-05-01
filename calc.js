var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var result1 = document.getElementById("result1");
var form = document.getElementById('percent_cal');
var menu = document.getElementById('calc_menu');
form.addEventListener('submit',function(event) {
    if(!numField1.value || !numField2.value) {
        alert("Please enter values in the fields.");
    }
    else {
        var opt = menu.options[menu.selectedIndex].value;
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var res = 0;
        switch(opt) {
            case "x_is_what_percent_of_y":
                res = x/y * 100;
                result1.innerText = "Result: " + res + "%";
                break;
            case "what_is_y%_of_x":
                res = (y/100)*x;
                result1.innerText = "Result: " + res;
                break;
            case "x_is_y%_of_what":
                res = x/(y/100);
                result1.innerText = "Result: " + res + "";
                break;
            case "what_%_of_x_is_y":
                res=y/x*100
                result1.innerText = "Result: " + res + "%";
                break;
            case "x%_of_what_is_y":
                res = y*100/x;
                result1.innerText = "Result: " + res + "";
                break;
            case "y%_of_x_is_what":
                res = y/100*x;
                result1.innerText = "Result: " + res + "";
                break;
        }
        event.preventDefault();
    }
});
