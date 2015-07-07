describe("Calculates Maximum", function(){
	it("should return 9 as maximum", function(){
		var max = maximum([1,2,3,9])
		expect(max).toBe(9);
	});

	it("should return 0 as maximum", function(){
		var max = maximum([-9,0,-1,])
		expect(max).toBe(0);
	});

	it("should return -4 as maximum", function(){
		var max = maximum([-99,-26,-90,-4])
		expect(max).toBe(-4);
	});
});