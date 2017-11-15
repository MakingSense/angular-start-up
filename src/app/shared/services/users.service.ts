import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

// TODO: remove those users when the API is created
const user1: User = new User();
user1.id = 1;
user1.firstName = 'Kenneth';
user1.lastName = 'Schneider';
user1.email = 'kscneider@example.com';
user1.role = 'admin';

const user2: User = new User();
user2.id = 2;
user2.firstName = 'Kenneth';
user2.lastName = 'Schneider';
user2.email = 'kscneider@example.com';
user2.role = 'admin';

const user3: User = new User();
user3.id = 3;
user3.firstName = 'Kenneth';
user3.lastName = 'Schneider';
user3.email = 'kscneider@example.com';
user3.role = 'admin';

const user4: User = new User();
user4.id = 4;
user4.firstName = 'Kenneth';
user4.lastName = 'Schneider';
user4.email = 'kscneider@example.com';
user4.role = 'admin';

const user5: User = new User();
user5.id = 5;
user5.firstName = 'Kenneth';
user5.lastName = 'Schneider';
user5.email = 'kscneider@example.com';
user5.role = 'admin';

const users: User[] = [user1, user2, user3, user4, user5];

@Injectable()
export class UsersService {

  static nextId: number = 6;

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return Observable.of(users);
  }

  getUserById(userId: number): Observable<User> {
    const user: User = _.find(users, {id: userId});
    return Observable.of(user);
  }

  createUser(user: User): Observable<User> {
    user.id = UsersService.nextId;
    UsersService.nextId++;
    users.push(user);
    return Observable.of(user);
  }

  updateUser(user: User): Observable<boolean> {
    let index;
    users.forEach((item, i) => {
      if (item.id === user.id) {
        index = i;
      }
    });
    if (index !== undefined) {
      users.splice(index, 1, user);
      return Observable.of(true);
    }
    return Observable.of(false);
  }

  deleteUser(userId: number): Observable<boolean> {
    _.remove(users, { id: userId});
    return Observable.of(true);
  }
}
