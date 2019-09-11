/*
jelle de kok
ICT BOL4 Cohort 
pizzacalculator
*/


const welkom = 'welkom bij de pizzacalculator';
alert(welkom);
var kleinepizza = parseInt(prompt('vul in hoeveel small pizzas u wilt '));
var mediumpizza = prompt('vul in hoeveel medium pizzas u wilt');
var largepizza = prompt('vul in hoeveel large pizzas u wilt');
var kosten = ((4*kleinepizza)+(6*mediumpizza)+(7.50*largepizza));


document.write('Small ' + kleinepizza + ' x 4.00 = '+ (kleinepizza*4));




document.write('<br/>totaal ' + kosten);