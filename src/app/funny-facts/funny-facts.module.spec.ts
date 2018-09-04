import { FunnyFactsModule } from './funny-facts.module';

describe('FunnyFactsModule', () => {
  let funnyFactsModule: FunnyFactsModule;

  beforeEach(() => {
    funnyFactsModule = new FunnyFactsModule();
  });

  it('should create an instance', () => {
    expect(funnyFactsModule).toBeTruthy();
  });
});
