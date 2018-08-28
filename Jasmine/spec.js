let x = Math.floor(Math.random()*100); 
let y = Math.floor(Math.random()*100); 

function compare(x,y){
    if(x===50||y===50||x+y===50){
        return `true`;
    }

    else{
        return `false`
    };
};

describe(`Compare two numbers `, function(){
    it(`Compare two numbers` +  x + `and` + y +` and returns true if one of the number is 50 or if their sum is 50, in other way return false`,function(){
        expect(compare(15,35)).toBe(`true`);
        expect(compare(50,50)).toBe(`true`);
        expect(compare(50,2)).toBe(`true`);
        expect(compare(100,50)).toBe(`true`);
        expect(compare(1000,0)).toBe(`false`);
        expect(compare(0,0)).toBe(`false`);
        expect(compare(3,0)).toBe(`false`);
        expect(compare(-3,0)).toBe(`false`);

    });
});