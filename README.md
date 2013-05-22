## angular-couchPotato: Lazy-Load and Register Components in AngularJS Applications

---
**couchPotato** aids in the lazy download and registration of services, directives, controllers and filters just-in-time.  It supports hierarchies of dependencies within these components.  Applications can use couchPotato to download and register components when they are needed to satisfy the requirements of a given *route*.

Applications specify dependencies of their routes when the routes are *configured*.  Those dependencies are kept in a promise function.  When the routes are *invoked*, the promise function is resolved, and the couchPotato *provider* uses the AMD api to download the dependencies (which are defined as AMD modules).  The dependencies invoke the couchPotato *service* to register themselves.  Since each component registers itself, indirect dependencies specified in AMD form are downloaded and registered along with the directly stated dependencies of the route.  couchPotato does not care which dependencies are resolved when the
route is invoked.  It is an application's responsibility to specify directly or indirectly all requirements.

### Usage

* See the [sample app](https://github.com/afterglowtech/angular-couchPotato/tree/master/sample) for a basic demonstration.  The key files to understand are js/app.js, js/couchPotatoService.js and the various components under the js/lazy directory.

* Download the angular-couchPotato.js file from the src directory in this repository or depend on the the repository using [bower](https://github.com/bower/bower).

* Reference the script file in your application (with or without using AMD).

* Your application module should depend on the 'agt.couchPotato' module.

* Inject the $couchPotatoProvider when defining routes and wrap the definitions of lazy portions of the route specification in a call to the provider's *lazyLoad* function, which takes an anonymous object with all of the normal Angular core properties, and an additional "dependencies" property, which is an array of AMD modules that will be loaded when the route is invoked.

* Inject the $couchPotato service in an application module run function, and maintain a property accessible to the lazy component's define modules so that they can access the service within their definitions in order to register themselves.

* See the sample app for a basic demonstration.

### History/Attribution

At this time, couchPotato is essentially a repackaging of a portion of some angular seed apps that demonstrate this technique.  One of them is [angular-require-lazyload](https://github.com/szhanginrhythm/angular-require-lazyload), from which code was copied directly and reorganized/repackaged.  Aside from leveraging the dependency-management features of RequireJS to chain dependencies, it doesn't have any additional features when compared to these seed apps.  It exists because it is a succinct single module for re-use rather than a demonstration of the technique within a larger application.

### License

See the [LICENSE file](https://github.com/afterglowtech/angular-couchPotato/blob/master/LICENSE).

### Questions/Comments/Concerns

See the [Issues List](https://github.com/afterglowtech/angular-couchPotato/issues).  Yes, couchPotato really is just small a page of code **before** minimization.  Short and sweet.  It's about the pattern...
