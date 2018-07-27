import { Service, Inject } from '../src/maius-di';

@Service
class TestService {
  public testService() {
    console.log('testService');
  }
}

class TestController {
  @Inject()
  public testService: TestService;
  public testController() {
    this.testService.testService();
  }
}

const testController = new TestController();

testController.testController();

testController.testController();
