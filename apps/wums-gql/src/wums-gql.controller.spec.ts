import { Test, TestingModule } from '@nestjs/testing';
import { WumsGqlController } from './wums-gql.controller';
import { WumsGqlService } from './wums-gql.service';

describe('WumsGqlController', () => {
  let wumsGqlController: WumsGqlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WumsGqlController],
      providers: [WumsGqlService],
    }).compile();

    wumsGqlController = app.get<WumsGqlController>(WumsGqlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wumsGqlController.getHello()).toBe('Hello World!');
    });
  });
});
