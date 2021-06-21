import { Test, TestingModule } from '@nestjs/testing';
import { AddCardRepository } from './add-card.repository';

describe('AddCardRepository', () => {
  let repository: AddCardRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCardRepository],
    }).compile();

    repository = module.get<AddCardRepository>(AddCardRepository);
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
