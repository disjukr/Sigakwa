webpackJsonp([0],[
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! app */1);


/***/ }),
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _regeneratorRuntime = __webpack_require__(/*! babel-runtime/regenerator */ 2)['default'];
	
	var _Promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 42)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 73)['default'];
	
	var _soundAnalyzer = __webpack_require__(/*! ./sound-analyzer */ 74);
	
	var _soundAnalyzer2 = _interopRequireDefault(_soundAnalyzer);
	
	var _pixi = __webpack_require__(/*! pixi */ 82);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _jquery = __webpack_require__(/*! jquery */ 85);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _stage = __webpack_require__(/*! ./stage */ 86);
	
	var stage = _interopRequireWildcard(_stage);
	
	var _shape = __webpack_require__(/*! ./shape */ 88);
	
	var _eqShape = __webpack_require__(/*! ./eq-shape */ 91);
	
	var $body = _jquery2['default'](document.body);
	var audio = new Audio();
	var renderer = stage.renderer;{
	    var viewStyle = renderer.view.style;
	    viewStyle.display = 'block';
	    _jquery2['default'](document.body).append(renderer.view);
	}
	var analyzer = new _soundAnalyzer2['default'](audio);
	{
	    // onresize
	
	    var _onresize = function _onresize() {
	        _eqShape.shape.y = stage.height;
	    };
	
	    _onresize();
	    stage.e.on('resize', _onresize);
	}
	
	function entry() {
	    var audioSrc;
	    return _regeneratorRuntime.async(function entry$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                audioSrc = './daydream cafe (ditto kim 2cool4mofu mix).mp3';
	                // scene
	                stage.container.addChild(_shape.shape);
	                stage.container.addChild(_eqShape.shape);
	                window.requestAnimationFrame(frame);
	                // audio
	                audio.crossOrigin = 'anonymous';
	                audio.src = audioSrc;
	                context$1$0.next = 8;
	                return _regeneratorRuntime.awrap(new _Promise(function (resolve) {
	                    audio.addEventListener('canplay', function () {
	                        return resolve();
	                    });
	                }));
	
	            case 8:
	                audio.play();
	
	            case 9:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, null, this);
	}
	
	function frame() {
	    window.requestAnimationFrame(frame);
	    var fftData = analyzer.fftData;
	    var waveData = analyzer.waveData;
	
	    _shape.update(analyzer.peak);
	    _eqShape.update(fftData, waveData);
	    renderer.render(stage.container);
	}
	
	entry();

/***/ }),
/* 2 */
/*!**********************************************!*\
  !*** ./~/babel-runtime/regenerator/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(/*! ./runtime */ 3);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	module.exports = { "default": module.exports, __esModule: true };
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./~/babel-runtime/regenerator/runtime.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	"use strict";
	
	var _Symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 5)["default"];
	
	var _Object$create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 36)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 38)["default"];
	
	var _Promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 42)["default"];
	
	!(function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../../process/browser.js */ 4)))

/***/ }),
/* 4 */,
/* 5 */
/*!*******************************************!*\
  !*** ./~/babel-runtime/core-js/symbol.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 6), __esModule: true };

/***/ }),
/* 6 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/symbol/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.symbol */ 7);
	__webpack_require__(/*! ../../modules/es6.object.to-string */ 35);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 14).Symbol;

/***/ }),
/* 7 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/es6.symbol.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(/*! ./$ */ 8)
	  , global         = __webpack_require__(/*! ./$.global */ 9)
	  , has            = __webpack_require__(/*! ./$.has */ 10)
	  , DESCRIPTORS    = __webpack_require__(/*! ./$.descriptors */ 11)
	  , $export        = __webpack_require__(/*! ./$.export */ 13)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 17)
	  , $fails         = __webpack_require__(/*! ./$.fails */ 12)
	  , shared         = __webpack_require__(/*! ./$.shared */ 20)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 21)
	  , uid            = __webpack_require__(/*! ./$.uid */ 23)
	  , wks            = __webpack_require__(/*! ./$.wks */ 22)
	  , keyOf          = __webpack_require__(/*! ./$.keyof */ 24)
	  , $names         = __webpack_require__(/*! ./$.get-names */ 29)
	  , enumKeys       = __webpack_require__(/*! ./$.enum-keys */ 30)
	  , isArray        = __webpack_require__(/*! ./$.is-array */ 31)
	  , anObject       = __webpack_require__(/*! ./$.an-object */ 32)
	  , toIObject      = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , createDesc     = __webpack_require__(/*! ./$.property-desc */ 19)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(/*! ./$.library */ 34)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 8 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 9 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 11 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 12 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 13 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 9)
	  , core      = __webpack_require__(/*! ./$.core */ 14)
	  , ctx       = __webpack_require__(/*! ./$.ctx */ 15)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 14 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 15 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 16 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.hide */ 18);

/***/ }),
/* 18 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 8)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 19);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 11) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 20 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 21 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 8).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 10)
	  , TAG = __webpack_require__(/*! ./$.wks */ 22)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 22 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 20)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 23)
	  , Symbol = __webpack_require__(/*! ./$.global */ 9).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 23 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 24 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.keyof.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(/*! ./$ */ 8)
	  , toIObject = __webpack_require__(/*! ./$.to-iobject */ 25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 25 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 26)
	  , defined = __webpack_require__(/*! ./$.defined */ 28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 26 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 27);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 27 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 28 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 29 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.get-names.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 25)
	  , getNames  = __webpack_require__(/*! ./$ */ 8).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ }),
/* 30 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.enum-keys.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(/*! ./$ */ 8);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ }),
/* 31 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./$.cof */ 27);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 32 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 33);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 33 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 34 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 35 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 37), __esModule: true };

/***/ }),
/* 37 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 8);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 38 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 39), __esModule: true };

/***/ }),
/* 39 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 40);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 14).Object.setPrototypeOf;

/***/ }),
/* 40 */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./$.export */ 13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 41).set});

/***/ }),
/* 41 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.set-proto.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(/*! ./$ */ 8).getDesc
	  , isObject = __webpack_require__(/*! ./$.is-object */ 33)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 32);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./$.ctx */ 15)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 42 */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 43), __esModule: true };

/***/ }),
/* 43 */
/*!*****************************************!*\
  !*** ./~/core-js/library/fn/promise.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 35);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 44);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 50);
	__webpack_require__(/*! ../modules/es6.promise */ 54);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 14).Promise;

/***/ }),
/* 44 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 45)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 47)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 45 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 46)
	  , defined   = __webpack_require__(/*! ./$.defined */ 28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 46 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 47 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./$.library */ 34)
	  , $export        = __webpack_require__(/*! ./$.export */ 13)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 17)
	  , hide           = __webpack_require__(/*! ./$.hide */ 18)
	  , has            = __webpack_require__(/*! ./$.has */ 10)
	  , Iterators      = __webpack_require__(/*! ./$.iterators */ 48)
	  , $iterCreate    = __webpack_require__(/*! ./$.iter-create */ 49)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 21)
	  , getProto       = __webpack_require__(/*! ./$ */ 8).getProto
	  , ITERATOR       = __webpack_require__(/*! ./$.wks */ 22)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 48 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 49 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 8)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 19)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 21)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 18)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 22)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 50 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 51);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 48);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 51 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 52)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 53)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 48)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 47)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 52 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 53 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 54 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/es6.promise.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(/*! ./$ */ 8)
	  , LIBRARY    = __webpack_require__(/*! ./$.library */ 34)
	  , global     = __webpack_require__(/*! ./$.global */ 9)
	  , ctx        = __webpack_require__(/*! ./$.ctx */ 15)
	  , classof    = __webpack_require__(/*! ./$.classof */ 55)
	  , $export    = __webpack_require__(/*! ./$.export */ 13)
	  , isObject   = __webpack_require__(/*! ./$.is-object */ 33)
	  , anObject   = __webpack_require__(/*! ./$.an-object */ 32)
	  , aFunction  = __webpack_require__(/*! ./$.a-function */ 16)
	  , strictNew  = __webpack_require__(/*! ./$.strict-new */ 56)
	  , forOf      = __webpack_require__(/*! ./$.for-of */ 57)
	  , setProto   = __webpack_require__(/*! ./$.set-proto */ 41).set
	  , same       = __webpack_require__(/*! ./$.same-value */ 62)
	  , SPECIES    = __webpack_require__(/*! ./$.wks */ 22)('species')
	  , speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 63)
	  , asap       = __webpack_require__(/*! ./$.microtask */ 64)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(/*! ./$.descriptors */ 11)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(/*! ./$.redefine-all */ 69)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(/*! ./$.set-to-string-tag */ 21)(P, PROMISE);
	__webpack_require__(/*! ./$.set-species */ 70)(PROMISE);
	Wrapper = __webpack_require__(/*! ./$.core */ 14)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./$.iter-detect */ 71)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 55 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 27)
	  , TAG = __webpack_require__(/*! ./$.wks */ 22)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 56 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.strict-new.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ }),
/* 57 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.for-of.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./$.ctx */ 15)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 58)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 59)
	  , anObject    = __webpack_require__(/*! ./$.an-object */ 32)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 60)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 61);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ }),
/* 58 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-call.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 32);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 59 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array-iter.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./$.iterators */ 48)
	  , ITERATOR   = __webpack_require__(/*! ./$.wks */ 22)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 60 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-length.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 61 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 55)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 22)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 48);
	module.exports = __webpack_require__(/*! ./$.core */ 14).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 62 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.same-value.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ }),
/* 63 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/$.species-constructor.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./$.an-object */ 32)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 16)
	  , SPECIES   = __webpack_require__(/*! ./$.wks */ 22)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 64 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.microtask.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 9)
	  , macrotask = __webpack_require__(/*! ./$.task */ 65).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./$.cof */ 27)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ }),
/* 65 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.task.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./$.ctx */ 15)
	  , invoke             = __webpack_require__(/*! ./$.invoke */ 66)
	  , html               = __webpack_require__(/*! ./$.html */ 67)
	  , cel                = __webpack_require__(/*! ./$.dom-create */ 68)
	  , global             = __webpack_require__(/*! ./$.global */ 9)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(/*! ./$.cof */ 27)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 66 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.invoke.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 67 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.html.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.global */ 9).document && document.documentElement;

/***/ }),
/* 68 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.dom-create.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 33)
	  , document = __webpack_require__(/*! ./$.global */ 9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 69 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine-all.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(/*! ./$.redefine */ 17);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ }),
/* 70 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.set-species.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(/*! ./$.core */ 14)
	  , $           = __webpack_require__(/*! ./$ */ 8)
	  , DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 11)
	  , SPECIES     = __webpack_require__(/*! ./$.wks */ 22)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 71 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-detect.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./$.wks */ 22)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 72 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-default.js ***!
  \************************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ }),
/* 73 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ }),
/* 74 */
/*!*******************************!*\
  !*** ./src/sound-analyzer.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 75)["default"];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 78)["default"];
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 79)["default"];
	
	exports.__esModule = true;
	
	var SoundAnalyzer = (function () {
	    function SoundAnalyzer(audio) {
	        _classCallCheck(this, SoundAnalyzer);
	
	        this.audio = audio;
	        this.context = new AudioContext();
	        this.source = this.context.createMediaElementSource(audio);
	        this.analyzer = this.context.createAnalyser();
	        this.analyzer.fftSize = 256;
	        {
	            // connect
	            this.source.connect(this.analyzer);
	            this.analyzer.connect(this.context.destination);
	        }
	    }
	
	    SoundAnalyzer.peak = function peak(waveData) {
	        var peak = -Infinity;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = _getIterator(waveData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;
	
	                v = Math.abs((v - 0x80) / 0x7f);
	                if (v > peak) peak = v;
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        return peak;
	    };
	
	    _createClass(SoundAnalyzer, [{
	        key: "waveData",
	        get: function get() {
	            var frequencyData = new Uint8Array(this.analyzer.frequencyBinCount);
	            this.analyzer.getByteTimeDomainData(frequencyData);
	            return frequencyData;
	        }
	    }, {
	        key: "fftData",
	        get: function get() {
	            var frequencyData = new Uint8Array(this.analyzer.frequencyBinCount);
	            this.analyzer.getByteFrequencyData(frequencyData);
	            return frequencyData;
	        }
	    }, {
	        key: "peak",
	        get: function get() {
	            return SoundAnalyzer.peak(this.waveData);
	        }
	    }]);
	
	    return SoundAnalyzer;
	})();
	
	exports["default"] = SoundAnalyzer;
	;
	module.exports = exports["default"];

/***/ }),
/* 75 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 76)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ }),
/* 76 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 77), __esModule: true };

/***/ }),
/* 77 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 78 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ }),
/* 79 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 80), __esModule: true };

/***/ }),
/* 80 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 50);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 44);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 81);

/***/ }),
/* 81 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./$.an-object */ 32)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 61);
	module.exports = __webpack_require__(/*! ./$.core */ 14).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/*!**********************!*\
  !*** ./src/stage.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	exports.__esModule = true;
	
	var _events = __webpack_require__(/*! events */ 87);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _pixi = __webpack_require__(/*! pixi */ 82);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _jquery = __webpack_require__(/*! jquery */ 85);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var $body = _jquery2['default'](document.body);
	
	function w() {
	    return $body.width();
	}
	function h() {
	    return $body.height();
	}
	
	var container = new _pixi2['default'].Container();
	exports.container = container;
	var renderer = new _pixi2['default'].autoDetectRenderer(w(), h());
	
	exports.renderer = renderer;
	var width;
	exports.width = width;
	var height;
	exports.height = height;
	var halfWidth;
	exports.halfWidth = halfWidth;
	var halfHeight;
	exports.halfHeight = halfHeight;
	var innerSquareSize;
	exports.innerSquareSize = innerSquareSize;
	var outerSquareSize;
	
	exports.outerSquareSize = outerSquareSize;
	var e = new _events2['default']();
	
	exports.e = e;
	function onresize() {
	    exports.width = width = w();
	    exports.height = height = h();
	    exports.halfWidth = halfWidth = width / 2;
	    exports.halfHeight = halfHeight = height / 2;
	    exports.innerSquareSize = innerSquareSize = Math.min(width, height);
	    exports.outerSquareSize = outerSquareSize = Math.max(width, height);
	
	    renderer.resize(width, height);
	    e.emit('resize');
	}
	onresize();
	_jquery2['default'](window).resize(onresize);

/***/ }),
/* 87 */
/*!****************************!*\
  !*** ./~/events/events.js ***!
  \****************************/
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 88 */
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 89)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 78)['default'];
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 79)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 73)['default'];
	
	exports.__esModule = true;
	exports.update = update;
	
	var _pixi = __webpack_require__(/*! pixi */ 82);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var _stage = __webpack_require__(/*! ./stage */ 86);
	
	var stage = _interopRequireWildcard(_stage);
	
	var _ColorTransformFilter = __webpack_require__(/*! ./ColorTransformFilter */ 90);
	
	var _ColorTransformFilter2 = _interopRequireDefault(_ColorTransformFilter);
	
	var container = new _pixi2['default'].Container();
	var circles = new _pixi2['default'].Container();
	var rt1 = new _pixi2['default'].RenderTexture(stage.renderer, stage.width, stage.height);
	var rt2 = new _pixi2['default'].RenderTexture(stage.renderer, stage.width, stage.height);
	var rts1 = new _pixi2['default'].Sprite(rt1);
	var rts2 = new _pixi2['default'].Sprite(rt2);
	var df = new _pixi2['default'].filters.DisplacementFilter(rts2);
	var cf = new _ColorTransformFilter2['default'](0.95, 0.95, 0.95);
	var a = 0;
	
	rts1.filters = [df, cf];
	container.addChild(circles);
	container.addChild(rts1);
	container.addChild(rts2);
	
	{
	    // onresize
	
	    var _onresize = function _onresize() {
	        rt1.resize(stage.width, stage.height);
	        rt2.resize(stage.width, stage.height);
	    };
	
	    _onresize();
	    stage.e.on('resize', _onresize);
	}
	
	var shape = container;
	
	exports.shape = shape;
	
	var Circle = (function (_PIXI$Graphics) {
	    _inherits(Circle, _PIXI$Graphics);
	
	    function Circle(x, y, dx, dy, size, color) {
	        _classCallCheck(this, Circle);
	
	        _PIXI$Graphics.call(this);
	        var _ref = [x, y];
	        this.x = _ref[0];
	        this.y = _ref[1];
	        var _ref2 = [dx, dy];
	        this.dx = _ref2[0];
	        this.dy = _ref2[1];
	
	        this.size = size;
	        this.blendMode = _pixi2['default'].BLEND_MODES.ADD;
	        if (size > 0) {
	            this.beginFill(color);
	            this.drawCircle(0, 0, size);
	            this.endFill();
	        }
	    }
	
	    Circle.prototype.move = function move() {
	        this.x += this.dx;
	        this.y += this.dy;
	        if (this.x < -this.size) this.remove();
	        if (this.x > stage.width + this.size) this.remove();
	        if (this.y < -this.size) this.remove();
	        if (this.y > stage.height + this.size) this.remove();
	    };
	
	    Circle.prototype.remove = function remove() {
	        circles.removeChild(this);
	    };
	
	    Circle.gen = function gen(pow) {
	        var size = pow * (stage.innerSquareSize / 5);
	        var spd = size * 0.3 + 10;
	        var angle = Math.random() * Math.PI * 2;
	        var c = new Circle(stage.halfWidth, stage.halfHeight, Math.cos(angle) * spd, Math.sin(angle) * spd, size, Math.random() * 0xFFFFFF & 0x333333);
	        return c;
	    };
	
	    return Circle;
	})(_pixi2['default'].Graphics);
	
	function update(pow) {
	    circles.addChild(Circle.gen(pow));
	    circles.addChild(Circle.gen(pow));
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = _getIterator(circles.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var circle = _step.value;
	            circle.move();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    a += (Math.random() * 8 - 4) * pow;
	    var s = stage.innerSquareSize / 4;
	    df.scale.x = Math.cos(a) * pow * s;
	    df.scale.y = Math.sin(a) * pow * s;
	    rt1.render(rts1);
	    rt1.render(circles);
	    rt2.render(container);
	}
	
	;

/***/ }),
/* 89 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 36)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 38)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ }),
/* 90 */
/*!*************************************!*\
  !*** ./src/ColorTransformFilter.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 89)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 78)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	exports.__esModule = true;
	
	var _pixi = __webpack_require__(/*! pixi */ 82);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var ColorTransformFilter = (function (_PIXI$filters$ColorMatrixFilter) {
	    _inherits(ColorTransformFilter, _PIXI$filters$ColorMatrixFilter);
	
	    function ColorTransformFilter() {
	        var redMultiplier = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	        var greenMultiplier = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	        var blueMultiplier = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	        var alphaMultiplier = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
	        var redOffset = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	        var greenOffset = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	        var blueOffset = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];
	        var alphaOffset = arguments.length <= 7 || arguments[7] === undefined ? 0 : arguments[7];
	
	        _classCallCheck(this, ColorTransformFilter);
	
	        _PIXI$filters$ColorMatrixFilter.call(this);
	        this.matrix = [redMultiplier, 0, 0, 0, redOffset / 255, 0, greenMultiplier, 0, 0, greenOffset / 255, 0, 0, blueMultiplier, 0, blueOffset / 255, 0, 0, 0, alphaMultiplier, alphaOffset / 255];
	    }
	
	    return ColorTransformFilter;
	})(_pixi2['default'].filters.ColorMatrixFilter);
	
	exports['default'] = ColorTransformFilter;
	;
	module.exports = exports['default'];

/***/ }),
/* 91 */
/*!*************************!*\
  !*** ./src/eq-shape.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 79)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 72)['default'];
	
	exports.__esModule = true;
	exports.update = update;
	
	var _pixi = __webpack_require__(/*! pixi */ 82);
	
	var _pixi2 = _interopRequireDefault(_pixi);
	
	var s = new _pixi2['default'].Graphics();
	s.scale.y = -1;
	var shape = s;
	
	exports.shape = shape;
	
	function update(fftData, waveData) {
	    s.clear();
	    s.lineStyle(1, 0xffffff);
	    var x = 0;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = _getIterator(fftData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var d = _step.value;
	
	            var _x = x += 3;
	            s.moveTo(_x, 0);
	            s.lineTo(_x, d * 0.5);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator['return']) {
	                _iterator['return']();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = _getIterator(waveData), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var d = _step2.value;
	
	            var _x = x += 3;
	            s.moveTo(_x, 0x80 * 0.5);
	            s.lineTo(_x, d * 0.5);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                _iterator2['return']();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}
	
	;

/***/ })
]);
//# sourceMappingURL=app.js.map