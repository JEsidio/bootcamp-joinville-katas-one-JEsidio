describe("string", function () {
  it("retorna o tamanho de uma string", function () {
    const str = "teste";
    expect(str.length).toEqual(5); 
  });

  it("retorna o segundo char de uma string", function () {
    const str = "abcde";
    expect(str.charAt(1)).toEqual("b"); 
  });

  it("retorna o os 5 primeiros chars de uma string", function () {
    const str = "abcdefghi";
    expect(str.substring(0,5)).toEqual("abcde"); 
  });

  it("retorna a concatenação de duas strings", function () {
    const str_one = "Hello";
    const str_two = " World!";

    expect(str_one + str_two).toEqual("Hello World!");
  });

  it("retorna a interpolação de duas strings", function () {
    const str_one = "Hello";
    const str_two = "World";

    expect(`${str_one} ${str_two}!`).toEqual("Hello World!"); 
  });

  it("replace uma parte da string", function () {
    const str = "Hello, World!";

    expect(str.replace("World", "Student")).toEqual("Hello, Student!"); 
  });

  it("split uma string", function () {
    const str = "Isso é uma string";

    expect(str.split(' ', 4)).toEqual(["Isso", "é", "uma", "string"]); 
  });

  it("lower case uma string", function () {
    const str = "ISSO É UMA STRING";

    expect(str.toLowerCase()).toEqual("isso é uma string"); 
  });

  it("upper case uma string", function () {
    const str = "isso é uma string";

    expect(str.toUpperCase()).toEqual("ISSO É UMA STRING"); 
  });
});
