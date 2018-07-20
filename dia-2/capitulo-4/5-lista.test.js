// Descrição: http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/#a-lista

function arrayToList(array) {
  var list = null;

  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) {
    return undefined;

  }else if (n == 0) {
    return list.value;
  
  }else {
    return nth(list.rest, n - 1);
  }
}

// TESTES

describe("arrayToList", function () {
  it("recebe um array como parâmetro e retorna uma lista", function () {
    expect(arrayToList([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null}});
  });
});

describe("listToArray", function () {
  it("recebe uma lista como parâmetro e retorna um array", function () {
    expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
  });
});
describe("prepend", function () {
  it("adiciona um valor no começo da lista", function () {
    expect(prepend(10, prepend(20, null))).toEqual({value: 10, rest: {value: 20, rest: null}});
  });
});
describe("nth", function () {
  it("recebe uma lista e uma posição da lista e retorna o valor nesta posição", function () {
    expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20);
  });
});
