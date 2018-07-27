## maius-di

Dependency injection lib for maiusjs.

```
// service
import { Context } from 'maius-di';
@Service
export class HackerNews extends Service {
  foo() { }
}



// controller
import { Inject } from 'maius-di';
export class Foo extends Controller {
  @Inject()
  private readonly hackerNews: HackerNews;

  bar() {
    this.hackerNews.foo();
  }
}
```

