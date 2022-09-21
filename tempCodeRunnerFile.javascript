function factorear(num){
    let newArr = [1];

    for (let i = 2; i < num;) {
        if (num % i === 0 ) {
            num /= i;
            newArr.push(i);
        }

    }i++
    return newArr;
}

factorear(180);