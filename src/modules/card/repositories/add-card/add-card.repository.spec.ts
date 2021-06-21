import { Test, TestingModule } from '@nestjs/testing';
import { AddCardRepository } from './add-card.repository';

describe('AddCardRepository', () => {
  let repository: AddCardRepository;
  let mockData;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCardRepository],
    }).compile();

    repository = module.get<AddCardRepository>(AddCardRepository);
    mockData = {
      title: 'any title',
      description: 'any description',
      destiny: 'any destiny',
      date: '06/21/2021',
      userId: '5a84a0fc-297c-4e09-840d-fe22b4ff94d5',
    };
    repository.save = jest.fn();
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be called save with correct params', async () => {
    const newCard = (repository.create = jest.fn().mockReturnValue(mockData));
    repository.save = jest.fn().mockReturnValue(newCard);
    await repository.add(mockData);
    expect(repository.save).toBeCalledWith(mockData);
  });

  it('should be returns created data', async () => {
    const newCard = (repository.create = jest.fn().mockReturnValue(mockData));
    (repository.save as jest.Mock).mockReturnValue(newCard);
    expect(await repository.add(mockData)).toEqual(newCard);
  });
});
