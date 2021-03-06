// Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

function imprimirTriangulo() {
  var hash = "#";
	for (var i = 0; i < 7; i++) {
	    console.log(hash);
	    hash += "#";
	}
}

// TESTES

describe("Criando um Triângulo com Loop", function () {
  let outputData = "";
  const storeLog = inputs => (outputData += inputs + "\n");
  console["log"] = jest.fn(storeLog);

  it ("imprime o triângulo", function () {
    imprimirTriangulo()
    expect(outputData).toEqual("#\n##\n###\n####\n#####\n######\n#######\n")
  });
})
