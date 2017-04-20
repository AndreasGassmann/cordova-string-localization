var fs = require('fs-extra');
var _ = require('lodash');

module.exports = function(context) {

    var q = context.requireCordovaModule('q');
    var deferred = q.defer();

  deferred.resolve();

  return deferred.promise;
};
