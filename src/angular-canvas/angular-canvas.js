// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-canvas.config', [])
  .value('angular-canvas.config', {
    debug: true
  });

// Modules
angular.module('angular-canvas.directives', []);
angular.module('angular-canvas.services', []);
angular.module('angular-canvas',
  [
    'angular-canvas.config',
    'angular-canvas.directives',
    'angular-canvas.services'
  ]);
