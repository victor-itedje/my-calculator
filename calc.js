function calcNumbers(result){
    console.log(result)
    form.displayresult.value=form.displayresult.value+result;
    

}

function clearInput(result){
    form.displayresult.value = "";
}

function delete1(result){
    form.displayresult.value = form.displayresult.value.slice(0,-1)
}

// function calculatePower(base, exponent) {
//     form.displayresult.value = form.displayresult.value.Math.pow(base, exponent);
//   }