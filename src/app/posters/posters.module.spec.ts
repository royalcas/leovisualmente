import { PostersModule } from './posters.module';

describe('PostersModule', () => {
  let postersModule: PostersModule;

  beforeEach(() => {
    postersModule = new PostersModule();
  });

  it('should create an instance', () => {
    expect(postersModule).toBeTruthy();
  });
});
