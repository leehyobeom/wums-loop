import { Test, TestingModule } from '@nestjs/testing';
import { WumsDriverController } from './wums-driver.controller';
import { WumsDriverService } from './wums-driver.service';

describe('WumsDriverController', () => {
  let wumsDriverController: WumsDriverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WumsDriverController],
      providers: [WumsDriverService],
    }).compile();

    wumsDriverController = app.get<WumsDriverController>(WumsDriverController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wumsDriverController.getHello()).toBe('Hello World!');
    });
  });
});
