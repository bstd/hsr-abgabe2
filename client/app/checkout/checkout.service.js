'use strict';

angular.module('brewApp')
.factory('CheckoutService', ['$resource', function($resource) {
  return $resource('api/orders', {}, {
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' },
    get: { method: 'GET', url: '/api/orders/:id' },
    remove: { method: 'DELETE', url: '/api/orders/:id' },
    update: { method: 'PUT', url: '/api/orders/:id' }
  });
}]);
