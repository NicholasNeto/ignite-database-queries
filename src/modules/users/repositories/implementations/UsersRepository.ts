import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.findOneOrFail({
      relations: ['games'],
      where: {
        id: user_id
      }
    });

    return user;
  }


  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query(`
      SELECT * FROM users ORDER BY first_name ASC
    `); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    const user = await this.repository.query(`
    SELECT email, first_name, last_name FROM users
      WHERE LOWER(first_name) LIKE LOWER($1) 
      AND LOWER(last_name) LIKE LOWER($2)
  `, [first_name, last_name])
  
  return user 
  }
}