const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  test('obtener code 200 en llamada a cafes', async () => {
    const resquest = await request(server)
      .get('/cafes');
    expect(resquest.statusCode).toEqual(200);
    // expect(resquest.body).toHaveProperty('post');
  });

  test('tratamos de eliminar cafe que no existe', async () => {
    const resquest = await request(server)
      .delete('/cafes/666')
      .set('Authorization', 'erdiablo');
    expect(resquest.statusCode).toEqual(404);
  });

  test('crear un nuevo cafe', async () => {
    var data = {
      id: 666,
      nombre: "erdiablo"
    }
    const resquest = await request(server)
      .post('/cafes')
      .send(data);

    expect(resquest.statusCode).toEqual(201);
  });

  test('no actualizar cafe que no existe', async () => {
    var data = {
      id: 333,
      nombre: "erdiablo"
    }
    const resquest = await request(server)
      .put('/cafes/666')
      .send(data);

    expect(resquest.statusCode).toEqual(400);
  });
});
