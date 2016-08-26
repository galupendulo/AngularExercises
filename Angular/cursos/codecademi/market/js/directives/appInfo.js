app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});

// First in js/directives/appInfo.js, we made a new directive. 
// We used app.directive to create a new directive named 'appInfo'. 
// It returns an object with three options:

//     restrict specifies how the directive will be used in the view. 
//     The 'E' means it will be used as a new HTML element.
//     scope specifies that we will pass information into this directive 
//     through an attribute named info. The = tells the directive to look for an attribute named 
//     info in the <app-info> element, like this:
//             <app-info info="shutterbugg"></app-info>
//     The data in info becomes available to use in the template given by templateURL.
//     templateUrl specifies the HTML to use in order to display the data in scope.info. 
//     Here we use the HTML in js/directives/appInfo.html.


// Why is creating your own directives useful?

//     Readability. Directives let you write expressive HTML. 
//             Looking at index.html you can understand the app's 
//             behavior just by reading the HTML.
//     Reusability. Directives let you create self-contained units 
//             of functionality. We could easily plug in this directive into 
//             another AngularJS app and avoid writing a lot of repetitive HTML.