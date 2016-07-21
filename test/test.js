module.exports = {
  "communication between main and iframe works": function(client){
    client
      .url('http://localhost:3101/example/main.html')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.containsText('#main #comm p:nth-child(1)', 'iframe ready')
      .assert.containsText('#main #comm p:nth-child(2)', 'sending data to iframe {"data":1}')
      .assert.containsText('#main #comm p:nth-child(3)', 'data received: {"data":2}')
      .assert.containsText('#main #comm p:nth-child(4)', 'ready to close iframe')
      .frame(0)
      .assert.containsText('#comm p:nth-child(1)', 'ready')
      .assert.containsText('#comm p:nth-child(2)', 'Data received: {"data":1}')
      .assert.containsText('#comm p:nth-child(3)', 'Sending data {"data":2}')
      .assert.containsText('#comm p:nth-child(4)', 'Ready to close')
      .end();
  }
};
