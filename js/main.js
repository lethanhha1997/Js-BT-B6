// B1

function findNumber(){
    
    var sum = 0;
    var i =0;
    while(sum<10000){
        i++
        sum += i
    }
    document.getElementById("textb1").innerHTML = i
    // for (var i= 0; sum <= 10000; i++) {
    //     sum +=i   
    //     document.getElementById("textb1").innerHTML = i
    // }  
}
document.getElementById("logB1").onclick = findNumber;

//B2

function sumTwoNumber(){
    var sum = 0
    var x = Number(document.getElementById("numberX").value);
    var n = Number(document.getElementById("numberN").value);
    for (var i = 1; i <= n; i++) {
        sum += x ** i;
    }
    document.getElementById("textb2").innerHTML = sum;
}
document.getElementById("logB2").onclick = sumTwoNumber;


//B3

function factorialNumber(){
    var sum3 = 1;
    var n = Number(document.getElementById("numberN3").value);
    for (var i = 1; i <= n; i++) {
        sum3 *= i;
    }
    document.getElementById("textb3").innerHTML = sum3;
}
document.getElementById("logB3").onclick = factorialNumber;

//B4
function printDiv(){
    var print = ""
    for (var i = 0; i < 10; i++) {
        if(i % 2 == 0){
           print += "<p class='a'>Div Chẵn</p>";           
        }else{
           print += "<p class='b'>Div Lẽ</p>"
        }
    }
    document.getElementById("textb4").innerHTML = print;
}
document.getElementById("logB4").onclick = printDiv;
