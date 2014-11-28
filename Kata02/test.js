define(
	[
		"testModule"
	],
	function(testModule) {
		describe("Binary Search test", function() {
			var chop = testModule.chop;
			it("Test01", function() {
				expect(chop(3, [])).toEqual(-1);
				expect(chop(3, [1])).toEqual(-1);
				expect(chop(1, [1])).toEqual(0);
			});
			it("Test02", function() {
				expect(chop(1, [1, 3, 5])).toEqual(0);
				expect(chop(3, [1, 3, 5])).toEqual(1);
				expect(chop(5, [1, 3, 5])).toEqual(2);
				expect(chop(0, [1, 3, 5])).toEqual(-1);
				expect(chop(2, [1, 3, 5])).toEqual(-1);
				expect(chop(4, [1, 3, 5])).toEqual(-1);
				expect(chop(6, [1, 3, 5])).toEqual(-1);
			});
			it("Test03", function() {
				expect(chop(1, [1, 3, 5, 7])).toEqual(0);
				expect(chop(3, [1, 3, 5, 7])).toEqual(1);
				expect(chop(5, [1, 3, 5, 7])).toEqual(2);
				expect(chop(7, [1, 3, 5, 7])).toEqual(3);
				expect(chop(0, [1, 3, 5, 7])).toEqual(-1);
				expect(chop(2, [1, 3, 5, 7])).toEqual(-1);
				expect(chop(4, [1, 3, 5, 7])).toEqual(-1);
				expect(chop(6, [1, 3, 5, 7])).toEqual(-1);
				expect(chop(8, [1, 3, 5, 7])).toEqual(-1);

			});
		});
	}
);
