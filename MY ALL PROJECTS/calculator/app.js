let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let del = document.getElementById('Del');
let clear = document.getElementById('clr scr');
let string = "";

input.value = string;

let arr = Array.from(buttons);
{


    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == "=") {
                string = eval(string);
                input.value = string;
            }

            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });

    });
}

del.addEventListener('click', () => {
    string = string.substring(0, string.length - 1);
    input.value = string;
});

clear.addEventListener('click', () => {
    string = "";
    input.value = string;
});


// else if (e.target.innerHTML == "Del") {
//     //     string = string.slice(0, -1);
//     //     input.value = string;
//     // }
//     // else if (e.target.innerHTML == "C") {


//     //     string = "";
//     //     input.value = string;
//     // }


