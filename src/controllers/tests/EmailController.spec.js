// Describe = declara bloco de teste - testes suites
// it or test = declara um unico teste unitario - tests cases
// expect => assercoes do resultado - validar resultados

describe("Email Controller", ()=> {
  test("Shout sent email sucessfuly", () => { 
    const request = {
      body: {
        email: "test@example.com",
        firstName: "John",
        secondName: "Wick"
      }
    } 
    const reply = {
      code: jestConfig.fn().mockReturnThis(),
      send: jestConfig.fn(), 
    }
  })
})