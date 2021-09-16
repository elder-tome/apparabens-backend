import * as express from 'express';
import { getRepository } from 'typeorm';

import Person from '../models/Person';
import entityDate from '../models/Date';
import User from '../models/User';

class PersonController {

  async index(request: express.Request, response: express.Response) {

    const { id } = request.headers;
    const user = await getRepository(User).findOne({ where: { id: id } });
    const listPerson = await getRepository(Person).find({ where: { user }, relations: ['date', 'user'] });
    return response.json(listPerson);

  }

  async create(request: express.Request, response: express.Response) {

    const { id } = request.headers;
    const user = await getRepository(User).findOne({ where: { id } });

    const { name, day, month, year, image_url } = request.body;

    const date = new entityDate();
    date.day = day;
    date.month = month;
    date.year = year;
    await getRepository(entityDate).save(date);

    const person = new Person();
    person.name = name;
    person.date = date;
    person.image_url = image_url;
    person.user = user;
    await getRepository(Person).save(person);
    return response.json(person);

  }

  async delete(request: express.Request, response: express.Response) {

    const { id } = request.params;
    const { id_user } = request.headers;

    const person = await getRepository(Person).findOne({ where: { id: id, user: id_user }, relations: ['date'] });
    if (!person) {
      return response.status(500).send({ "mensage": "Erro ao deletar" });
    }
    await getRepository(Person).remove(person);
    await getRepository(entityDate).remove(person.date);
    return response.status(204).send();
  }

  async birthday() {

    const date = new Date;
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();

    if (day.length === 1) {
      day = `0${day}`;
    }
    if (month.length === 1) {
      month = `0${month}`;
    }

    //filtro no Typeorm
    const peopleList = await getRepository(Person).find({ relations: ['user', 'date'] });

    const birthday = peopleList.filter(person => {
      if (person.date.day === day && person.date.month === month) {
        return person;
      }
    });

    return birthday;

  }
}

export default PersonController;