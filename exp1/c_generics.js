function add(a, b) {
    // return a+b as T;
    if (typeof (a) == 'number' && typeof (b) == 'number') {
        return a + b;
    }
    // else if (typeof(a)=='string' || typeof(b)=='string'){
    //     return a+b as T
    // }
    else if (typeof (a) == 'string' && typeof (b) == 'string') {
        return a + b;
    }
    return a;
}
console.log("adding 7 and 3 : \n" + add(7, 3));
console.log(add("concatinating " + "hello ", "world"));
