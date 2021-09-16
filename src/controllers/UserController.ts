import * as express from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
  
  async store(request: express.Request, response: express.Response){

    const { email } = request.body;

    if(email === '') {
      return response.status(400).json({mensage: 'Invalido, tente novamente.'});
    }
  
    const userExists = await getRepository(User).findOne({email: email});

    if(userExists){
      return response.json(userExists);
    }
    
    const user = new User();
    user.email = email;
    await getRepository(User).save(user);
    return response.json(user);
  
  }

}

export default UserController;