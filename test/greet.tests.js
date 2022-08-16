//console.log(greet("Stanley"));
describe('Test my greet function' , function(){
    it("It should return `Hello, stanley`when called with 'stanley'" , function(){
        assert.equal("Hello, stanley",greet("stanley"));
    });

    it("It should return `Hello, Zanele`when called with 'Zanele'" , function(){
        assert.equal("Hello, Zanele",greet("Zanele"));
    });

});