// Describe = declara bloco de teste - testes suites
// it or test = declara um unico teste unitario - tests cases
// expect => assercoes do resultado - validar resultados

const EmailController = require('../EmailController');
const EmailQueue = require('../../queue/MailQueue');

jest.mock('../../queue/MailQueue');

describe("Email Controller", ()=> {
  test("Shout sent email sucessfuly", async () => { 
    const request = {
      body: {
        email: "test@example.com",
        firstName: "John",
        lastName: "Wick"
      }
    } 
    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(), 
    }

    const template = `Olá ${request.body.firstName} ${request.body.lastName}, sua assinatura foi confirmada! Para acessar seus recursos exclusivos você precisa basta clicar aqui.`

    await EmailController.sendEmail(request, reply);

    expect(EmailQueue.add).toHaveBeenCalledTimes(1);
    expect(EmailQueue.add).toHaveBeenCalledWith({
      to: "test@example.com",
      from: process.env.EMAIL_FROM,
      subject: "Assinatura Confirmada",
      text: template
    });
    expect(reply.code).toHaveBeenCalledWith(200)
    
  })
})