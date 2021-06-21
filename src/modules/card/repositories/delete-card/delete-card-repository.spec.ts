import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCardRepository } from './delete-card.repository';

describe('DeleteCardRepository', () => {
  let repository: DeleteCardRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCardRepository],
    }).compile();

    repository = module.get<DeleteCardRepository>(DeleteCardRepository);
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
