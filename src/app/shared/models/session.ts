export class Session {
  email: string;
  role: string;

  static fromJson(json): Session {
    const sessionJson = Object.create(Session.prototype);
    return Object.assign(sessionJson, json);
  }

  toJson() {
    return {
      email: this.email,
      role: this.role
    };
  }
}
