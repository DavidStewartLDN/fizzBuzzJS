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

  it ("should return Fizz when number is 6", function(){

    expect(FizzBuzz(6)).toBe('Fizz')

  })

  it ("should return Fizz when number is 10", function(){

    expect(FizzBuzz(10)).toBe('Buzz')

  })

  it ("should return FizzBuzz when number is divisible by 5 and 3 such as 15", function(){

    expect(FizzBuzz(15)).toBe('FizzBuzz')

  })

});