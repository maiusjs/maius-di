import 'reflect-metadata';
import ServiceDescriptor from './service-descriptor';

// 用于存放服务
const serviceCollection: Map<string, ServiceDescriptor> = new Map();

const Inject = (): any => {
  return (target, key) => {
    return {
      get() {
        // 获取要注入的类型
        const injectType = Reflect.getMetadata('design:type', target, key);

        // 生成要注入的实例
        const instance = getInstance(injectType, this.app);

        if (instance == null) {
          throw '没有找到要注入的服务';
        }

        return instance;
      },
    };
  };
};

/**
 *
 * @param injectType 要注入的类型
 * @param app maius app 属性
 */
const getInstance = (injectType: FunctionConstructor, app) => {
  // 通过类型名称获取要注入的服务描述
  const serviceDescriptor = serviceCollection.get(injectType.name);

  // 没有获取到响应的描述返回 null
  if (!serviceDescriptor) {
    return null;
  }
  // 判断有没有被实例化，如果实例化过则返回实例， 没事实例化实例化后返回实例。
  if (serviceDescriptor.instance) {
    return serviceDescriptor.instance;
  } else {
    serviceDescriptor.instance = new serviceDescriptor.fc(app);
  }

  return serviceDescriptor.instance;
};

// 服务装饰器
const Service = target => {
  addToContainner(target.name, target);
};

/**
 *
 * @param key 服务的名字
 * @param value 服务的的构造函数
 */
const addToContainner = (key, value) => {
  if (!serviceCollection.has(key)) {
    const serviceDec = new ServiceDescriptor(value);
    serviceCollection.set(key, serviceDec);
  }
};

export { Service, Inject };
