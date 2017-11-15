export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;

  static fromJson(json): User {
    const user = Object.create(User.prototype);
    return Object.assign(user, json);
  }

  toJson() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role
    };
  }
}
