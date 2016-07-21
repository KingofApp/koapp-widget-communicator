# Koapp Widget Communicator

This library simplifies the communication between Koapp Platform and the custom
widget for modules and services.

It sets a global object defined as `koappCom`. This object contains two object
with 4 categories in them.

```JSON
{
  "iframe": {
    "ready"   : Function,
    "onData"  : Function,
    "sendData": Function,
    "close"   : Function
  },
  "main": {
    "onReady" : Function,
    "onData"  : Function,
    "onClose" : Function,
    "sendData": Function
  }
}
```

Every iframe function has its reaction in a main function and vice versa.

>     iframe.ready    ==> main.onReady
>     iframe.onData   <== main.sendData
>     iframe.sendData ==> main.onData
>     iframe.close    ==> main.onClose

The purpose is to simplify a basic communication protocol between the 2 pages.

## iframe

This object contains all the function you can use in the iframe file.

### ready()

This function is used to inform the main page that the iframe is ready to
receive information. It does not accept parameters.

```javascript
koappCom.iframe.ready()
```

### onData(callback)

This function is used to receive [module/service scope data](https://github.com/KingofApp/docs/tree/develop/modules#the-module-scope) from the main page.
It accepts a callback function as a parameter.

```javascript
koappCom.iframe.ready(function(data){
  console.log(data);
});
```

### sendData(data)

This function returns [module/service scope data](https://github.com/KingofApp/docs/tree/develop/modules#the-module-scope) once it is modified by the
user. It accepts one parameter to send the data.

```javascript
var newData = {bar: "foo"}
koappCom.iframe.sendData(newData);
```

### close()

This function is used to inform the main page that the iframe is ready to
be closed. It does not accept parameters.

```javascript
koappCom.iframe.close();
```

## Main

This object contains all the function that can be used in the Koapp main
platform. *This information is useless unless you are modifying the Koapp
builder page*.

### onReady()

This function is used to inform the main page that the iframe is ready to
receive information. It does not accept parameters.

```javascript
koappCom.main.onReady(function(){
  console.log("the iframe is ready");
});
```

### onData(callback)

This function receives [module/service scope data](https://github.com/KingofApp/docs/tree/develop/modules#the-module-scope)
back from the iframe. It accepts a callback function as a parameter.

```javascript
koappCom.main.ready(function(data){
  console.log(data);
});
```

### sendData(data)

This function send [module/service scope data](https://github.com/KingofApp/docs/tree/develop/modules#the-module-scope)
to the iframe. It accepts one parameter to send the data.

```javascript
var newData = {bar: "foo"}
  koappCom.main.sendData(newData);
```


### onClose()

This function is used to inform the main page that the main is ready to
be closed. It does not accept parameters.

```javascript
koappCom.main.onClose(function(){
  console.log('the iframe can be closed');
});
```
