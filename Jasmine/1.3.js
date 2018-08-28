function comparison (x,y) { 
    return (x == 50 || y ==50 || x + y == 50); 
} 


describe("Comparison", function(){ 
    it("Compare spec", function(){ 
        expect(comparison(25,25)).toBe(true); 
    }) 
})