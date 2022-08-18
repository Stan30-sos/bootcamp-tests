describe(' Testing my findItemsOver function' , function(){
    it("It should return [{'name':'pears','qty':37},{'name':'bananas','qty':27}] when called with (itemList,20)" , function(){
        assert.deepEqual([{'name':'pears','qty':37},{'name':'bananas','qty':27}],findItemsOver(itemList,20));
    });

    it("It should return [{'name':'pears','qty':19},{'name':'bananas','qty':17}] when called with (itemList2,11)" , function(){
        assert.deepEqual([{'name':'pears','qty':19},{'name':'bananas','qty':17}],findItemsOver(itemList2,11));
    });


    it("It should return [{'name':'apples','qty':40},{'name':'apples','qty':37}] when called with (itemList3,30)" , function(){
        assert.deepEqual([{'name':'apples','qty':40},{'name':'apples','qty':37}],findItemsOver(itemList3,30));
    });

    
    
});