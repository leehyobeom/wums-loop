import { Test, TestingModule } from '@nestjs/testing';
import { WumsConsumerController } from './wums-consumer.controller';
import { WumsConsumerService } from './wums-consumer.service';

describe('WumsConsumerController', () => {
  let wumsConsumerController: WumsConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WumsConsumerController],
      providers: [WumsConsumerService],
    }).compile();

    wumsConsumerController = app.get<WumsConsumerController>(WumsConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wumsConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
