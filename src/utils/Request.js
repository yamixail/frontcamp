class Request {
  constructor() {
    this.cache = new Map;
  }
  
  getData(url) {
    if (this.cache.has(url)) return this.cache.get(url);
    
    const fetchPromise = fetch(url)
      .then(response => response.json())
      .catch(Promise.reject);
      
    this.cache.set(url, fetchPromise);
    
    return fetchPromise;
  }
}

export default new Request;