# Koapp Widget Communicator

This library simplifies the communication between Koapp Platform and the custom
widget for modules and services.

It sets a global object defined as `koappCom`. This object contains two object
with 4 categories in them.

> {
>   iframe: {
>     ready   : function,
>     onData  : function,
>     sendData: function,
>     close   : function
>   },
>   main: {
>     onReady : function,
>     onData  : function,
>     onClose : function,
>     sendData: function
>   }
> }

Every iframe function has its reaction in a main function and vice versa.

>     iframe.ready    --> main.onReady
>     iframe.onData   <-- main.sendData
>     iframe.sendData --> main.onData
>     iframe.close    --> main.onClose

The purpose is to simplify a basic communication protocol between the 2 pages.

## iframe

This object contains all the function you can use in the iframe file.

### ready()

This function is used to inform the main page that the iframe is ready to
receive information. It does not accept parameters.

> koappCom.iframe.ready()

### onData(callback)

This function is used to receive [module/service scope data][1] from the
main page.
It accepts a callback function as a parameter.

> koappCom.iframe.ready(function(data){
>   console.log(data);
> });

### sendData(data)

This function returns [module/service scope data][1] once it is modified by the
user. It accepts one parameter to send the data.

> var newData = {bar: "foo"}
> koappCom.iframe.sendData(newData);

### close()

This function is used to inform the main page that the iframe is ready to
be closed. It does not accept parameters.

> koappCom.iframe.close();

## Main

This object contains all the function that can be used in the Koapp main
platform. *This information is useless unless you are modifying the Koapp
builder page*.

### onReady()

This function is used to inform the main page that the iframe is ready to
receive information. It does not accept parameters.

> koappCom.main.onReady(function(){
>   console.log("the iframe is ready");
> });

### onData(callback)

This function receives [module/service scope data][1] back from the iframe.
It accepts a callback function as a parameter.

> koappCom.main.ready(function(data){
>   console.log(data);
> });

### sendData(data)

This function send [module/service scope data][1] to the iframe.
It accepts one parameter to send the data.

> var newData = {bar: "foo"}
> koappCom.main.sendData(newData);


### onClose()

This function is used to inform the main page that the main is ready to
be closed. It does not accept parameters.

> koappCom.main.onClose(function(){
>   console.log('the iframe can be closed');
> });

[1](https://github.com/KingofApp/docs/tree/develop/modules#the-module-scope)
