describe("FizzBuzz", function() {

  it("should return a Fizz when number is 3", function(){

    expect(FizzBuzz(3)).toBe('Fizz');

  });

  it("should return a Buzz when number is 5", function() {

    expect(FizzBuzz(5)).toBe("Buzz");

  })

  it("should return number if argument is 1", function() {

    expect(FizzBuzz(1)).toBe(1);

  })


});