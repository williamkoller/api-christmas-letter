import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCardRepository } from './delete-card.repository';

describe('DeleteCardRepository', () => {
  let repository: DeleteCardRepository;
  let mockData;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCardRepository],
    }).compile();

    repository = module.get<DeleteCardRepository>(DeleteCardRepository);
    mockData = { id: '5a84a0fc-297c-4e09-840d-fe22b4ff94d5' };

    repository.delete = jest.fn();
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be called delete with correct params', async () => {
    repository.delete = jest.fn().mockReturnValue(mockData);
    await repository.deleteCard('5a84a0fc-297c-4e09-840d-fe22b4ff94d5');
    expect(repository.delete).toBeCalledWith(
      '5a84a0fc-297c-4e09-840d-fe22b4ff94d5',
    );
  });
});
