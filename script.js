function checkValidateClass(className) {
    let regx = /^[A|C|P]\d{4}[G|H|I|K|L|M]/;
    let result = regx.test(className);

    if(result === true){
        alert(`Class ${className} hợp lệ.`);
    }else{
        alert(`Class ${className} không hợp lệ !.`);
    }
}

checkValidateClass("C0519I");