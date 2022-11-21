function Singleton() {
    class SingletonData {
    }
  
    const _instance = new SingletonData();
    function getInstance() {
      return _instance;
    }
  
    return {
      getInstance
    }
  }