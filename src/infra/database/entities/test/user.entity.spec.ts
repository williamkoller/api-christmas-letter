import { User } from '../user/user.entity';

describe('User class', () => {
  it('should make a user with all fields', () => {
    const user = new User({
      id: '5ba7d631-f2ff-4879-be01-c1e0f1da47ef',
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_@email.com',
      password: 'any_password',
    });
    expect(user).toBeTruthy();
    expect(user.id).toBe('5ba7d631-f2ff-4879-be01-c1e0f1da47ef');
    expect(user.name).toBe('any_name');
    expect(user.surname).toBe('any_surname');
    expect(user.email).toBe('any_@email.com');
    expect(user.password).toBe('any_password');
  });

  it('should make a user with name only', () => {
    const user = new User({ name: 'any_name' });
    expect(user).toBeTruthy();
    expect(user.name).toBe('any_name');
  });

  it('should make a user with surname only', () => {
    const user = new User({ surname: 'any_surname' });
    expect(user).toBeTruthy();
    expect(user.surname).toBe('any_surname');
  });
});
