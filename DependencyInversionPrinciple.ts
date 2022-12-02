/*
class MemoryStorage {
  private storage: any[];

  constructor() {
    this.storage = [];
  }

  public insert(record: any): void {
    this.storage.push(record);
  }
}

class PostService {
  private db = new MemoryStorage();

  createPost(title: string) {
    this.db.insert(title);
  }
}
*/

interface DatabaseStorage {
    insert(record: any): void;
  }
  
  class MemoryStorage implements DatabaseStorage {
    private storage: any[];
  
    constructor() {
      this.storage = [];
    }
  
    public insert(record: any): void {
      this.storage.push(record);
    }
  }
  
  class PostService {
    private db: DatabaseStorage;
  
    constructor(db: DatabaseStorage) {
      this.db = db;
    }
  
    createPost(title: string) {
      this.db.insert(title);
    }
  }