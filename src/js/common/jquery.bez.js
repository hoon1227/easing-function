// Skip to content
// This repository
// Search
// Pull requests
// Issues
// Marketplace
// Explore
//  @hoon1227
//  Sign out
// 7
// 82 17 rdallasgray/bez
//  Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
// bez/src/jquery.bez.js
// 23827f1  on Jan 21, 2016
// @rdallasgray rdallasgray Add UMD loader, package.json
// @rdallasgray @lucasconstantino
//
// 57 lines (56 sloc)  1.96 KB
/*!
 * Bez @VERSION
 * http://github.com/rdallasgray/bez
 *
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 *
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 *
 * Copyright @YEAR Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
 */
(function(factory) {
  if (typeof exports === "object") {
    factory(require("jquery"));
  } else if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  $.extend({ bez: function(encodedFuncName, coOrdArray) {
    if ($.isArray(encodedFuncName)) {
      coOrdArray = encodedFuncName;
      encodedFuncName = 'bez_' + coOrdArray.join('_').replace(/\./g, 'p');
    }
    if (typeof $.easing[encodedFuncName] !== "function") {
      var polyBez = function(p1, p2) {
        var A = [null, null], B = [null, null], C = [null, null],
            bezCoOrd = function(t, ax) {
              C[ax] = 3 * p1[ax], B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax], A[ax] = 1 - C[ax] - B[ax];
              return t * (C[ax] + t * (B[ax] + t * A[ax]));
            },
            xDeriv = function(t) {
              return C[0] + t * (2 * B[0] + 3 * A[0] * t);
            },
            xForT = function(t) {
              var x = t, i = 0, z;
              while (++i < 14) {
                z = bezCoOrd(x, 0) - t;
                if (Math.abs(z) < 1e-3) break;
                x -= z / xDeriv(x);
              }
              return x;
            };
        return function(t) {
          return bezCoOrd(xForT(t), 1);
        }
      };
      $.easing[encodedFuncName] = function(x, t, b, c, d) {
        return c * polyBez([coOrdArray[0], coOrdArray[1]], [coOrdArray[2], coOrdArray[3]])(t/d) + b;
      }
    }
    return encodedFuncName;
  }});
}));
// © 2018 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// API
// Training
// Shop
// Blog
// About
