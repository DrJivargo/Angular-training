class PostService {
  public getList() {
    //return list
  }
}

class ComponentList {
  constructor(public postService: PostService) { }
}

//Injector

class Injector {

  private _container= new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => this._container.set(service, new service));
  }

  public get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error(`Service ${service} not found`);
    }
    return serviceInstance;
  }
}
// где-то в исполняемом коде Ангуляра при билде

const rootInjector = new Injector([PostService]);
const listComponent = new ComponentList(rootInjector.get(PostService));
listComponent.postService.getList()

//Иерархия инжекторов


//1)  NullInjector - самый высокоуровневый , его в иерархии уже нет, он является callback-ом , который возвращает нам ошибки
//Он выдает ошибку, если мы что-то не запровайдили
//Он проверяет, находится ли данный инстанс в зависимостях , которые мы запровайдили и если их нет, то он возвращает ошибку
//2)  PlatformInjector - выше рут инжектора, он создается в main.ts файле, он является инжектор модулем, у меня его нет
//3)  RootInjector - создается при создании нашего приложения
//Все , что мы в него провайдем -доступно во всем приложении

//Далее более обособленно находятся
//4)  ElementInjector => ChildComponent => GrandChildComponent - это то, что мы провайдем в декораторе компонента, далее по иерархии идут компоненты, которые являются дочерними к этому компоненту
