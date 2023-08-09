const calculator= {
    add : function(a, b){
        console.log(a+b);
    },
    minus : function(a, b){
        console.log(a-b);
    },
    divide : function(a, b) {
        console.log(a | b);
    },
    gob : function(a,b) {
        console.log(a*b);
    },
    power : function(a,b){
        console.log(a ** b);
    }
};
calculator.add(5,1);
calculator.minus(3,1);
calculator.divide(5/2);
calculator.gob(3, 6);
calculator.power(3,5)
