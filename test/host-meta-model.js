'use strict';

var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var hostMetaSuccess = require('./fixtures/successes');
var hostMetaError = require('./fixtures/errors');

var Model = require('../app/scripts/stores/host-meta-model');

var setUpSuccessfulModel = function() {
  var url = 'https://latambridgepay.com';

  this.model = new Model();
  this.model.set(hostMetaSuccess[url]);
};

var setUpErroneousModel = function() {
  var url = '404';

  this.model = new Model({url: url});
  this.model.set(hostMetaError[url]);
};

chai.should();
chai.use(sinonChai);

describe('invalid model', function() {
  beforeEach(setUpErroneousModel);

  it('should determine if model data is invalid', function() {
    this.model.isValid().should.equal(false);
  });
});

describe('valid model', function() {
  beforeEach(setUpSuccessfulModel);

  it('should determine if model data is valid', function() {
    this.model.isValid().should.equal(true);
  });
});

describe('required data', function() {
  beforeEach(setUpSuccessfulModel);

  it('should have a subject', function() {
    this.model.get('subject').should.exist
      .and.be.a('string').with.length.above(0);
  });

  it('should have an expiration date', function() {
    this.model.get('expires').should.exist
      .and.be.a('string').with.length.above(0);
  });

  it('should have properties', function() {
    this.model.get('properties').should.exist
      .and.be.an('object');
  });

  it('should have links', function() {
    this.model.get('links').should.exist
      .and.be.an('array').with.length.above(0);
  });
});

describe('setUrl', function() {
  beforeEach(setUpSuccessfulModel);

  it('should create correct url', function() {
    this.model.setUrl('latambridgepay.com');
    this.model.url.should.equal(hostMetaSuccess['https://latambridgepay.com'].fullUrl);
  });
});
