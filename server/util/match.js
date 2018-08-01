module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index2.js":
/*!*******************!*\
  !*** ./index2.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst fs = __webpack_require__(/*! fs */ \"fs\")\r\nconst path = __webpack_require__(/*! path */ \"path\")\r\nasync function match (url, content, ruleName) {\r\n  let context = __webpack_require__(\"./rules sync recursive .*\\\\.js\")\r\n  for(let key of context.keys()){\r\n    let cb=context(key)\r\n    let result=await cb(url,content)\r\n    if(result)return result;\r\n  }\r\n}\r\n\r\n// let r=match('','')\r\n// console.log(r);\r\n\r\nmodule.exports = match;\n\n//# sourceURL=webpack:///./index2.js?");

/***/ }),

/***/ "./rules sync recursive .*\\.js":
/*!***************************!*\
  !*** ./rules sync .*\.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./91porn.js\": \"./rules/91porn.js\",\n\t\"./eporner.js\": \"./rules/eporner.js\",\n\t\"./javdoe.js\": \"./rules/javdoe.js\",\n\t\"./javfinder.js\": \"./rules/javfinder.js\",\n\t\"./kaplog.js\": \"./rules/kaplog.js\",\n\t\"./porn.js\": \"./rules/porn.js\",\n\t\"./pornhd.js\": \"./rules/pornhd.js\",\n\t\"./pornhub.js\": \"./rules/pornhub.js\",\n\t\"./redtube.js\": \"./rules/redtube.js\",\n\t\"./sis001text.js\": \"./rules/sis001text.js\",\n\t\"./streamjav.js\": \"./rules/streamjav.js\",\n\t\"./xhamster.js\": \"./rules/xhamster.js\",\n\t\"./youjizz.js\": \"./rules/youjizz.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./rules sync recursive .*\\\\.js\";\n\n//# sourceURL=webpack:///./rules_sync_.*\\.js?");

/***/ }),

/***/ "./rules/91porn.js":
/*!*************************!*\
  !*** ./rules/91porn.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const request=require('../util/request')\r\n// const request=require('request-promise')\r\n\r\nmodule.exports=async function rule(url,content){\r\n  let reg=/91porn/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let title=/viewvideo-title\\\">([^<]*)</.exec(content)[1].trim()\r\n  let video=/<source[^http]*(http[^\\\"]*)\\\"/.exec(content)[1]\r\n  let poster=/poster=[^http]*(http[^\\\"]*)\\\"/.exec(content)[1]\r\n  let duration=/(\\d\\d:\\d\\d:\\d\\d)|(\\d\\d:\\d\\d)/.exec(content)[0]\r\n  result={title,video,poster,duration}\r\n  return result;\r\n} \r\n\n\n//# sourceURL=webpack:///./rules/91porn.js?");

/***/ }),

/***/ "./rules/eporner.js":
/*!**************************!*\
  !*** ./rules/eporner.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports=function rule(url,content){\r\n  let is=/eporner\\.com\\/hd-porn/.test(url)\r\n  if(!is){\r\n    return false;\r\n  }\r\n  let result={}\r\n  let body=String(content)\r\n  let poster=body.match(/poster.*(http.*jpg)/)\r\n  let key=/hd-porn\\/([^/]*)/.exec(url)[1]\r\n  let reg=new RegExp(\"\\/dload\\/\"+key+\"[^\\\"]*\",\"g\")\r\n  let videos=body.match(reg)\r\n  result['poster']=poster[1]\r\n  result['videos']=videos.map(video=>'https://www.eporner.com'+video)\r\n  return result;\r\n}\n\n//# sourceURL=webpack:///./rules/eporner.js?");

/***/ }),

/***/ "./rules/javdoe.js":
/*!*************************!*\
  !*** ./rules/javdoe.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const request=require('../util/request')\r\nconst request=__webpack_require__(/*! request-promise */ \"request-promise\")\r\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\")\r\nlet token=null;\r\n\r\nconst CryptoJSAesJson = {\r\n  stringify: function (cipherParams) {\r\n      let j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};\r\n      if (cipherParams.iv) j.iv = cipherParams.iv.toString();\r\n      if (cipherParams.salt) j.s = cipherParams.salt.toString();\r\n      return JSON.stringify(j);\r\n  },\r\n  parse: function (jsonStr) {\r\n      let j = JSON.parse(jsonStr);\r\n      let cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});\r\n      if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);\r\n      if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);\r\n      return cipherParams;\r\n  }\r\n};\r\n\r\nconst CryptoJSAESdecrypt = function(e,t) {\r\n  try {\r\n      return JSON.parse(CryptoJS.AES.decrypt(e, t, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));\r\n  } catch(er) {\r\n      return null;\r\n  }\r\n}\r\n\r\nmodule.exports=async function rule(url,content){\r\n  let reg=/javdoe/.test(url)\r\n  if(!reg)return false;\r\n  let embedKey=/embedUrl.*embed\\/(.*)\\\"/\r\n  embedKey=embedKey.exec(content)[1]\r\n  let skey=await request.get('https://www.javdoe.com/stream/sw0/'+embedKey)\r\n  skey=JSON.parse(skey).data\r\n  if(!token){\r\n    let tokenFn=await request.get('https://cdndoe.me/player/token.js')\r\n    eval(tokenFn)\r\n    token=playerToken()\r\n  }\r\n  let key=CryptoJSAESdecrypt(skey,token)\r\n  key=/:\\/\\/(.*)/.exec(key)[1]\r\n  let videos=await request.post('https://www.fembed.com/api/sources/'+key)\r\n  videos=JSON.parse(videos).data;\r\n  let title=/<h1>(.*)<\\/h1>/.exec(content)[1]\r\n  let result={videos,title}\r\n  return result;\r\n} \n\n//# sourceURL=webpack:///./rules/javdoe.js?");

/***/ }),

/***/ "./rules/javfinder.js":
/*!****************************!*\
  !*** ./rules/javfinder.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const request=require('../util/request')\r\nconst request=__webpack_require__(/*! request-promise */ \"request-promise\")\r\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\")\r\nlet token=null;\r\n\r\nconst CryptoJSAesJson = {\r\n  stringify: function (cipherParams) {\r\n      let j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};\r\n      if (cipherParams.iv) j.iv = cipherParams.iv.toString();\r\n      if (cipherParams.salt) j.s = cipherParams.salt.toString();\r\n      return JSON.stringify(j);\r\n  },\r\n  parse: function (jsonStr) {\r\n      let j = JSON.parse(jsonStr);\r\n      let cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});\r\n      if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);\r\n      if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);\r\n      return cipherParams;\r\n  }\r\n};\r\n\r\nconst CryptoJSAESdecrypt = function(e,t) {\r\n  try {\r\n      return JSON.parse(CryptoJS.AES.decrypt(e, t, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));\r\n  } catch(er) {\r\n      return null;\r\n  }\r\n}\r\n\r\nmodule.exports=async function rule(url,content){\r\n  let reg=/javfinder/.test(url)\r\n  if(!reg)return false;\r\n  let embedKey=/embedUrl.*embed\\/(.*)\\\"/\r\n  embedKey=embedKey.exec(content)[1]\r\n  let skey=await request.get('https://www5.javfinder.is/stream/sw0/'+embedKey)\r\n  skey=JSON.parse(skey).data\r\n  if(!token){\r\n    let tokenFn=await request.get('https://cdnfd.me/player/token.js')\r\n    eval(tokenFn)\r\n    token=playerToken()\r\n  }\r\n  let key=CryptoJSAESdecrypt(skey,token)\r\n  key=/fembed:\\/\\/(.*)/.exec(key)[1]\r\n  let videos=await request.post('https://www.fembed.com/api/sources/'+key)\r\n  videos=JSON.parse(videos).data;\r\n  let title=/<h1>(.*)<\\/h1>/.exec(content)[1]\r\n  let poster=/https:\\/\\/cdnfd\\.me\\/img\\/movie\\/.*png/.exec(content)[0]\r\n  let duration=/Duration:(.*)</.exec(content)[1].trim()\r\n  let result={videos,poster,title,duration}\r\n  return result;\r\n} \n\n//# sourceURL=webpack:///./rules/javfinder.js?");

/***/ }),

/***/ "./rules/kaplog.js":
/*!*************************!*\
  !*** ./rules/kaplog.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const request=require('../util/request')\r\n// const request=require('request-promise')\r\n\r\nmodule.exports=async function rule(url,content){\r\n  let reg=/kaplog/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let title=/<h1[^>]*>([^<]*)</.exec(content)[1]\r\n  let video=/file:[^h]*(http[^mp4]*mp4)/.exec(content)[1]\r\n  result={title,video}\r\n  return result;\r\n} \n\n//# sourceURL=webpack:///./rules/kaplog.js?");

/***/ }),

/***/ "./rules/porn.js":
/*!***********************!*\
  !*** ./rules/porn.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports=function rule(url,content){\r\n  let reg=/porn\\.com\\/videos/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let body=String(content)\r\n  let start=body.indexOf('streams:')\r\n  start=body.indexOf('[',start)\r\n  end=body.indexOf(']',start)\r\n  let sub=body.substring(start,end+1)\r\n  let vr=eval(\"(\"+sub+\")\")\r\n  vr=vr.map(v=>{\r\n    let id=v['id']\r\n    let u=v['url']\r\n    return {[id]:u}\r\n  })\r\n  result['videos']=vr\r\n  start=body.indexOf('poster:\"',end)\r\n  end=body.indexOf('\"',start+9)\r\n  sub=body.substring(start+8,end)\r\n  result['poster']='https://mediav.porn.com'+sub\r\n  return result;\r\n}\n\n//# sourceURL=webpack:///./rules/porn.js?");

/***/ }),

/***/ "./rules/pornhd.js":
/*!*************************!*\
  !*** ./rules/pornhd.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports=function rule(url,content){\r\n  let reg=/pornhd\\.com\\/videos/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let body=String(content)\r\n  let start=body.indexOf('players.push(')\r\n  start=body.indexOf('{',start)\r\n  end=body.indexOf(')',start)\r\n  body=body.substring(start,end)\r\n  let r=eval('('+body+')')\r\n  let posters=[]\r\n  posters.push(r['poster'])\r\n  posters=posters.concat(r['previewSprites'])\r\n  result['poster']=posters\r\n  result['videos']=r['sources']\r\n  return result;\r\n}\n\n//# sourceURL=webpack:///./rules/pornhd.js?");

/***/ }),

/***/ "./rules/pornhub.js":
/*!**************************!*\
  !*** ./rules/pornhub.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports=function rule(url,content){\r\n  let reg=/pornhub\\.com\\/view_video\\.php\\?viewkey=/.test(url)\r\n  if(!reg)return false;\r\n  let body=String(content)\r\n  let start=body.indexOf('var flashvars_')\r\n  start=body.indexOf('{',start)\r\n  end=body.indexOf(';',start)\r\n  body=body.substring(start,end)\r\n  return JSON.parse(body);\r\n}\n\n//# sourceURL=webpack:///./rules/pornhub.js?");

/***/ }),

/***/ "./rules/redtube.js":
/*!**************************!*\
  !*** ./rules/redtube.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function rule(url,content){\r\n  let is = /redtube\\.com/.test(url)\r\n  if(!is)return false;\r\n  let result={videos:[]}\r\n  let body=String(content)\r\n  let start=body.indexOf('mainRoll')\r\n  start=body.indexOf('{',start)\r\n  let end=body.indexOf('duration',start)\r\n  end=body.indexOf('}',end)\r\n  body=body.substring(start,end+1)\r\n  let tmp=eval(\"(\"+body+\")\")\r\n  tmp['mediaDefinition'].forEach((v)=>{\r\n    result.videos.push({quality:v['quality'],'video':v['videoUrl']})\r\n  })\r\n  result['poster']=tmp['poster']\r\n  result['title']=tmp['title']\r\n  result['duration']=tmp['duration']\r\n  return result\r\n}\n\n//# sourceURL=webpack:///./rules/redtube.js?");

/***/ }),

/***/ "./rules/sis001text.js":
/*!*****************************!*\
  !*** ./rules/sis001text.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const cheerio=__webpack_require__(/*! cheerio */ \"cheerio\")\r\n\r\nmodule.exports=function rule(url,content){\r\n  let reg=/sis001/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let $=cheerio.load(content)\r\n  let text=$('div .t_msgfont .noSelect').first().text()\r\n  let title=$('div .postmessage>h2').text()\r\n  let type =$('div .mainbox.viewthread>h1>a').text()\r\n  let date=/([\\d]*-[\\d]*-[\\d]* [\\d]*:[\\d]*)/.exec(content)[1]\r\n  type=type.substring(1,type.length-1)\r\n  result={text,title,type,date}\r\n  return result;\r\n}\n\n//# sourceURL=webpack:///./rules/sis001text.js?");

/***/ }),

/***/ "./rules/streamjav.js":
/*!****************************!*\
  !*** ./rules/streamjav.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const request=require('../util/request')\r\nconst request=__webpack_require__(/*! request-promise */ \"request-promise\")\r\n\r\nmodule.exports=async function rule(url,content){\r\n  let reg=/streamjav/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let PlayFilm=/PlayFilm.*\\\"(.*)\\\"/.exec(content)[1]\r\n  let PlayEp=/PlayEp.*\\\"(.*)\\\"/.exec(content)[1]\r\n  let headers={\r\n    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',\r\n  }\r\n  let rhtml=await request.post('http://streamjav.net/',{formData:{'server':PlayFilm,'id':PlayEp},headers:headers})\r\n  let video=/https:.[^\\\"]*\\\"/.exec(rhtml)[0]\r\n  video=video.replace(/\\\\/g,'')\r\n  let title=/strong>([^<]*)</.exec(content)[1].trim();\r\n  let duration=/ระยะเวลา:([^<]*)</.exec(content)[1].trim();\r\n  let poster=/http:\\/\\/streamjav\\.net\\/img\\/poster\\/[^\\\"]*/.exec(content)[0]\r\n  result={title,duration,video,poster}\r\n  return result;\r\n} \n\n//# sourceURL=webpack:///./rules/streamjav.js?");

/***/ }),

/***/ "./rules/xhamster.js":
/*!***************************!*\
  !*** ./rules/xhamster.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports=function rule(url,content){\r\n  let reg=/xhamster\\.com\\/videos/.test(url)\r\n  if(!reg)return false;\r\n  let result={}\r\n  let body=String(content)\r\n  let start=body.indexOf('}},\"sources\":')\r\n  start=body.indexOf('{',start)\r\n  end=body.indexOf('}]}',start)\r\n  let sub=body.substring(start,end+3)\r\n  let r=eval('('+sub+')')\r\n  result['videos']={}\r\n  for(let key in r){\r\n    let kmap={}\r\n    for(let video of r[key]){\r\n      kmap[video['quality']]=video['fallback']\r\n    }\r\n    result['videos'][key]=kmap\r\n  }\r\n  start=body.indexOf('poster\":\"')\r\n  end=body.indexOf('\"',start+10)\r\n  let poster=body.substring(start+9,end).replace(/\\\\/g,'')\r\n  result['poster']=poster\r\n  return result;\r\n}\n\n//# sourceURL=webpack:///./rules/xhamster.js?");

/***/ }),

/***/ "./rules/youjizz.js":
/*!**************************!*\
  !*** ./rules/youjizz.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function rule(url,content){\r\n  let reg = /youjizz\\.com\\/videos/.test(url)\r\n  if(!reg)return false;\r\n  let body=String(content)\r\n  let start=body.indexOf('var encodings')\r\n  start=body.indexOf('[',start)\r\n  end=body.indexOf(';',start)\r\n  body=body.substring(start,end)\r\n  return JSON.parse(body);\r\n}\n\n//# sourceURL=webpack:///./rules/youjizz.js?");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");\n\n//# sourceURL=webpack:///external_%22cheerio%22?");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto-js\");\n\n//# sourceURL=webpack:///external_%22crypto-js%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ })

/******/ });