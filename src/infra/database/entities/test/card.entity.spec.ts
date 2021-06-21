import { Card } from '../card/card.entity';

describe('Card class', () => {
  it('should make a card with all fields', () => {
    const card = new Card({
      title: 'any title',
      description: 'any description',
      destiny: 'any destiny',
    });
    expect(card).toBeTruthy();
    expect(card.title).toBe('any title');
    expect(card.description).toBe('any description');
    expect(card.destiny).toBe('any destiny');
  });

  it('should make a user with title only', () => {
    const card = new Card({ title: 'any title' });
    expect(card).toBeTruthy();
    expect(card.title).toBe('any title');
  });

  it('should make a user with title, description only', () => {
    const card = new Card({
      title: 'any title',
      description: 'any description',
    });
    expect(card).toBeTruthy();
    expect(card.title).toBe('any title');
    expect(card.description).toBe('any description');
  });
});
