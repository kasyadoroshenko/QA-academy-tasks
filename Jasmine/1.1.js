function sum(a,b){ 
    return a + b; 
} 

describe("Sum suite", function(){ 
    it("Sum spec", function(){ 
        expect(sum(2,3)).toBe(5); 
    }) 
})
