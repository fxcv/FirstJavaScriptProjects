function range(start, end, step = 1){
    let array = [];
    for(;start<=end; start+=step){
        array.push(start);
    }
    return array;
}
console.log(range(1, 10, 2));      //wypisuje range w arrayu, mozna dodac trzeci argument czyli step (automatycznie jest rowny 1)





function sum(NumberArray){
    let sum=0;
    for(let number of NumberArray){
        sum+=number;
    }
    return sum;
}
console.log(sum(range(1, 10, 2)));     //sumuje wszystko co w podanym arrayu sie znajduje