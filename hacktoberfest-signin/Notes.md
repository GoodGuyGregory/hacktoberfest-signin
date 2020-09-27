**Development Notes**

[Differences between ngIf and Hide](https://www.angularjswiki.com/angular/difference-between-ngif-and-hidden-or-displaynone-in-angular/)

[Basic use of ngIf](https://www.angularjswiki.com/angular/understanding-angulars-ngif-else-then-with-examples/)

[Binding Src Data to Images in Angular](https://stackoverflow.com/questions/40797925/how-to-bind-img-src-in-angular-2-in-ngfor)


**Problem Getting JSON Response Data Back from Github REST API**

[HTTPModule Documentation Example](https://www.tutorialspoint.com/angular7/angular7_http_client.htm)

 the first parameters of function JSON.parse should be a String, and your data is a JavaScript object, so it will convert to a String [object object], you should use JSON.stringify before pass the data

`JSON.parse(JSON.stringify(userData))`

**Solution**

[Getting JSON Responses from HTTPClient Module](https://stackoverflow.com/questions/38380462/syntaxerror-unexpected-token-o-in-json-at-position-1)

**Problem Angular Dev Kit Issues**

[Installation Commands to Fix Issues](https://www.thecodebuzz.com/cannot-find-module-angular-devkit-build-angular-package-json/)