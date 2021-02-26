nots_array = [];

function submit()
{

var name_1 = document.getElementById("nots_1").value;
var name_2 = document.getElementById("nots_2").value;
var name_3 = document.getElementById("nots_3").value;
var name_4 = document.getElementById("nots_4").value;

nots_array.push(name_1);
nots_array.push(name_2);
nots_array.push(name_3);
nots_array.push(name_4);
console.log(nots_array);

document.getElementById("display_name").innerHTML = nots_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    nots_array.sort();
    console.log(nots_array);
    document.getElementById("display_name").innerHTML = nots_array;
}