import 'angular-resource';
import factory from '../src/angular/factories/article';

describe('Articles list component', () => {
  let $httpBackend;
  let resourceMock;
  
  
  beforeAll(() => {
    angular.module('test', ['ngResource'])
      .factory(factory.name, factory.func);
  });
  beforeEach(angular.mock.module('test'));
  
  
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    resourceMock = $injector.get(factory.name);
  }));
  
  
  it('should recieve list', function() {
    $httpBackend.expectGET('http://localhost:3000/api/articles')
      .respond([{
        _id: 1,
        author: 'Mikhail Yamayeu',
        title: 'Shock! I\'m created unit test',
        description: 'It\'s simple but proud',
        url: 'http://www.example.com/news/test',
        urlToImage: 'slowpoke.jpg',
        publishedAt: '2017-02-09T21:00:00.000Z'
      }]);

    const result = resourceMock.query({});

    $httpBackend.flush();
    
    expect(result).toBeDefined();
    expect(result.length).not.toBeLessThan(1);
    expect(result[0]._id).toBe(1);
  });

  it('should have ability to save', function() {
    $httpBackend.expectPOST('http://localhost:3000/api/articles')
      .respond({ success: true });

    const result = resourceMock.save();

    $httpBackend.flush();
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });
});