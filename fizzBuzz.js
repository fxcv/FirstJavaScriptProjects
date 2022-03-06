let counter = 1;
while (counter<=100){
    if(counter%3==0 && counter%5!=0){
        console.log("Fizz");
        counter+=1;
        continue;
    }
    else if(counter%5==0 && counter%3!=0){
        console.log("Buzz");
        counter+=1;
        continue;
    }
    else if(counter%5==0 && counter%3==0){
        console.log("FizzBuzz");
        counter+=1;
        continue;
    }
    console.log(counter);
    counter+=1;
}

/*liczby podzielne przez 3 ale nie przez 5: fizz
liczby podzielne przez 5 ale nie przez 3: buzz
liczby podzielne przez oba: fizzbuzz*/