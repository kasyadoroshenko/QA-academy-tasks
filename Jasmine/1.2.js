function sum(a,b){ 
    return a + b; 
} 

function subtraction(a,b){ 
    return a - b; 
} 

function multiply(a,b){ 
    return a * b; 
} 

function division(a,b){ 
    return a / b; 
} 

describe("Calc suite", function(){ 
    it("Sum spec", function(){ 
        expect(sum(2,2)).toBe(4); 
    }) 

    it("Substraction spec", function(){ 
        expect(subtraction(2,2)).toBe(0); 
    }) 

    it("Multiply spec", function(){ 
        expect(multiply(2,2)).toBe(4); 
    }) 

    it("Division spec", function(){ 
        expect(division(2,2)).toBe(1); 
    }) 
}) 