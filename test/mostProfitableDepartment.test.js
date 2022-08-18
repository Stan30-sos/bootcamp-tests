describe(' Testing my mostProfitableDepartment function' , function(){
    it("It should return 'outdoor' when called with salesData" , function(){
        assert.equal('outdoor',mostProfitableDepartment(salesData));
    });

    it("It should return `electronics` when called with salesData2" , function(){
        assert.equal('electronics',mostProfitableDepartment(salesData2));
    });

    
    

    
});