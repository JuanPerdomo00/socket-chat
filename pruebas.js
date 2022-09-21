function factorear(num){
    let newArr = [1];
    for (let i = 2; i <= num;) {   
        if (num % i === 0 ) {
            num /= i;
            newArr.push(i);
            continue
        }i++
    } return newArr;


//----------Otra Forma--------------------
   /*  let newArr = [1];
    for (let i = 2; i < num + 1; i++) {
        if (num % i === 0) {
            num /= i
            newArr.push(i);
            i--
        } 
    } return newArr */
}

console.log(factorear(30)); 
console.log(factorear(180)); //95 --> 2,  


