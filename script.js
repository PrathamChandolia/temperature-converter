let celsius = document.getElementById("celsius")
let fahrehenite = document.getElementById("fahrehenite")

function celTofar(){
    let output = (parseFloat(celsius.value) * 9/5) + 32 ;
    fahrehenite.value = parseFloat(output.toFixed(2)) ;
    // console.log(output)
}
function farTocel(){
    let output = (parseFloat(fahrehenite.value) - 32) * 5/9 ;
    celsius.value = parseFloat(output.toFixed(2)) ;
    // console.log(output)
}