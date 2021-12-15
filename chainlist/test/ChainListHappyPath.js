var ChainList = artifacts.require("./ChainList.sol");

// test suite
contract('ChainList', function(accounts){
  var chainListInstance;
  var seller = accounts[1];
  var articleName = "article 1";
  var articleDescription = "Description for article 1";
  var articlePrice = 10;

  it("should be initialized with empty values", function() {
    return ChainList.deployed().then(function(instance) {
      return instance.getArticle();
    }).then(function(data) {
      assert.equal(data[0], 0x0, "seller must be empty");
      assert.equal(data[1], "", "article name must be empty");
      assert.equal(data[2], "", "article description must be empty");
      assert.equal(data[3].toNumber(), 0, "article price must be zero");
    })
  });
});
