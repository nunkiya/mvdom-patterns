// This module is mostly a re-export for 3rd party global libraries. 
// This way the application code does not need to know how those libs get imported at the first place.
// Important: All other .ts file needs to import those library from this lib.ts.


// Note: here we "require" the d3, handlebars, and mvdom just for the Type. 
//       As we just export the variable from the global/window variable and use the module just for types
//       none of those libraries will be re-imported (as it will be already package in the lib-bundle.js from the js-lib/index.ts)
import _d3 = require("d3");
import _handlebars = require("handlebars/runtime");
import _mvdom = require("mvdom");

// We also export the Mvdom Type View so that we can create a base view.
export {View} from "mvdom/types/Mvdom";

// Again, this is just to allow to have consistent imports from application, and we can assume that the 
// window.__libname__ will be loaded from the js-lib/index.js

export let mvdom: typeof _mvdom = (<any>window).mvdom;

export let Handlebars: typeof _handlebars = (<any>window).Handlebars;

export let d3: typeof _d3 = (<any>window).d3;
