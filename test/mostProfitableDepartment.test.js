describe(' Testing my mostProfitableDepartment function' , function(){
    it("It should return `outdoor` for salesData'" , function(){
        assert.equal('outdoor',mostProfitableDepartment('salesData'),'the mostPrifitableDepartment is outdoor for ');
    });

    it("It should return `electronics` for dataset2'" , function(){
        assert.equal('electronics',mostProfitableDepartment('salesData2'));
    });

    
    

    
});