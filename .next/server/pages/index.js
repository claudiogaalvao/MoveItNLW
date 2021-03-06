module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: handleChallengeFailed,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          onClick: handleChallengeSucceeded,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this), "Avance de level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallenges", function() { return CompletedChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\CompletedChallenges.tsx";



function CompletedChallenges() {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\Countdown.tsx";



function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        onClick: resetCountdown,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        onClick: startCountdown,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/claudiogaalvao.png",
      alt: "Claudio Galv\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Claudio Galv\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\contexts\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: isLevelModalOpen,
    1: setIsLevelModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', level.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', currentExperience.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challengesCompleted', challengesCompleted.toString());
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Novo desafio 🎉', {
          body: 'Valendo ${challenge.amount}xp!'
        });
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;
    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      experienceToNextLevel,
      challengesCompleted,
      activeChallenge,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 35
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProviver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProviver", function() { return CountdownProviver; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\contexts\\CountdownContext.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
let countdownTimeout;
function CountdownProviver({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60); //25 minutos em segundos

  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60); //25 minutos

  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\cvascong\\Documents\\Projetos pessoais\\Rocketseat\\NextLevelWeek\\MoveItNLW\\src\\pages\\index.tsx";









function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "In\xEDcio | move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["ExperienceBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProviver"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["Profile"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_2__["CompletedChallenges"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_3__["Countdown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_6__["ChallengeBox"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__T9k4b"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJyZXNldENvdW50ZG93biIsIkNvdW50ZG93bkNvbnRleHQiLCJoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWQiLCJoYW5kbGVDaGFsbGVuZ2VGYWlsZWQiLCJzdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJjaGFsbGVuZ2VBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2VGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsImNvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXIiLCJDb3VudGRvd24iLCJtaW51dGVzIiwic2Vjb25kcyIsImhhc0ZpbmlzaGVkIiwiaXNBY3RpdmUiLCJzdGFydENvdW50ZG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiLCJFeHBlcmllbmNlQmFyIiwiY3VycmVudEV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9OZXh0TGV2ZWwiLCJNYXRoIiwicm91bmQiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiTGV2ZWxVcE1vZGFsIiwibGV2ZWwiLCJjbG9zZUxldmVsVXBNb2RhbCIsIm92ZXJsYXkiLCJjb250YWluZXIiLCJQcm9maWxlIiwicHJvZmlsZUNvbnRhaW5lciIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJzZXRMZXZlbCIsInVzZVN0YXRlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiaXNMZXZlbE1vZGFsT3BlbiIsInNldElzTGV2ZWxNb2RhbE9wZW4iLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJ0b1N0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwiYm9keSIsImZpbmFsRXhwZXJpZW5jZSIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aXZlciIsInRpbWUiLCJzZXRUaW1lIiwic2V0SXNBY3RpdmUiLCJzZXRIYXNGaW5pc2hlZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJIb21lIiwicHJvcHMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJyZXEiLCJjb29raWVzIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZUJveCgpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlQ2hhbGxlbmdlLCByZXNldENoYWxsZW5nZSwgY29tcGxldGVDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgY29uc3QgeyByZXNldENvdW50ZG93biB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWQoKSB7XHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUZhaWxlZCgpIHtcclxuICAgICAgICByZXNldENoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHsgYWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9IHhwPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGljb25zLyR7YWN0aXZlQ2hhbGxlbmdlLnR5cGV9LnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlRmFpbGVkQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbGxlbmdlRmFpbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxoZWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GaW5hbGl6ZSB1bSBjaWNsbyBwYXJhIHJlY2ViZXIgdW0gZGVzYWZpbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmFuY2UgZGUgbGV2ZWwgY29tcGxldGFuZG8gZGVzYWZpb3MuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlcy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wbGV0ZWRDaGFsbGVuZ2VzKCkge1xyXG4gICAgY29uc3QgeyBjaGFsbGVuZ2VzQ29tcGxldGVkIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2FmaW9zIGNvbXBsZXRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcclxuICAgIGNvbnN0IHsgbWludXRlcywgc2Vjb25kcywgaGFzRmluaXNoZWQsIGlzQWN0aXZlLCByZXNldENvdW50ZG93biwgc3RhcnRDb3VudGRvd259ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgeyBoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDaWNsbyBlbmNlcnJhZG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpZW5jZUJhcigpIHtcclxuICAgIGNvbnN0IHsgY3VycmVudEV4cGVyaWVuY2UsIGV4cGVyaWVuY2VUb05leHRMZXZlbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZChjdXJyZW50RXhwZXJpZW5jZSAqIDEwMCkgLyBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VCYXJ9PlxyXG4gICAgICAgICAgICA8c3Bhbj4wIHhwPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudFRvTmV4dExldmVsfSVgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17eyBsZWZ0OiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEV4cGVyaWVuY2V9IHhwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57ZXhwZXJpZW5jZVRvTmV4dExldmVsfSB4cDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9MZXZlbFVwTW9kYWwubW9kdWxlLmNzcyc7IFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExldmVsVXBNb2RhbCgpIHtcclxuICBjb25zdCB7IGxldmVsLCBjbG9zZUxldmVsVXBNb2RhbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGhlYWRlcj57bGV2ZWx9PC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxzdHJvbmc+UGFyYWLDqW5zPC9zdHJvbmc+XHJcbiAgICAgICAgPHA+Vm9jw6ogYWxjYW7Dp291IHVtIG5vdm8gbGV2ZWwuPC9wPlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZUxldmVsVXBNb2RhbH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9jbG9zZS5zdmdcIiBhbHQ9XCJGZWNoYXIgbW9kYWxcIi8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3QgeyBsZXZlbCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL2NsYXVkaW9nYWFsdmFvLnBuZ1wiIGFsdD1cIkNsYXVkaW8gR2FsdsOjb1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNsYXVkaW8gR2FsdsOjbzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJMZXZlbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBMZXZlbCB7bGV2ZWx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDApO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxNb2RhbE9wZW4sIHNldElzTGV2ZWxNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBsZXZlbC50b1N0cmluZygpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBjdXJyZW50RXhwZXJpZW5jZS50b1N0cmluZygpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsIGNoYWxsZW5nZXNDb21wbGV0ZWQudG9TdHJpbmcoKSk7XHJcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgc2V0SXNMZXZlbE1vZGFsT3Blbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcclxuICAgICAgICBzZXRJc0xldmVsTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8g8J+OiScsIHtcclxuICAgICAgICAgICAgICAgICAgYm9keTogJ1ZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2UpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17eyBcclxuICAgICAgICAgICAgICAgIGxldmVsLCBcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZUxldmVsVXBNb2RhbCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIHsgaXNMZXZlbE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICBtaW51dGVzOiBudW1iZXI7XHJcbiAgc2Vjb25kczogbnVtYmVyO1xyXG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG4gIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aXZlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApOyAvLzI1IG1pbnV0b3MgZW0gc2VndW5kb3NcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTsgLy8yNSBtaW51dG9zXHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gICAgICBzZXRUaW1lKDAuMSAqIDYwKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRpbWUodGltZSAtMSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSBlbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcclxuICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgfVxyXG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICBtaW51dGVzLFxyXG4gICAgICBzZWNvbmRzLFxyXG4gICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgaXNBY3RpdmUsXHJcbiAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICByZXNldENvdW50ZG93bixcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGVuZ2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlc1wiO1xyXG5pbXBvcnQgeyBDb3VudGRvd24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGRvd25cIjtcclxuaW1wb3J0IHsgRXhwZXJpZW5jZUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXJcIjtcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aXZlciB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcblxyXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNQcm92aWRlciBcclxuICAgICAgbGV2ZWw9e3Byb3BzLmxldmVsfSBcclxuICAgICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfSBcclxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZD17cHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkluw61jaW8gfCBtb3ZlLml0PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEV4cGVyaWVuY2VCYXIgLz5cclxuXHJcbiAgICAgICAgPENvdW50ZG93blByb3ZpdmVyPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdlcyAvPlxyXG4gICAgICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvdW50ZG93blByb3ZpdmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkIH0gPSBjdHgucmVxLmNvb2tpZXM7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsZXZlbDogTnVtYmVyKGxldmVsKSxcclxuICAgICAgY3VycmVudEV4cGVyaWVuY2U6IE51bWJlcihjdXJyZW50RXhwZXJpZW5jZSksXHJcbiAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IE51bWJlcihjaGFsbGVuZ2VzQ29tcGxldGVkKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFsbGVuZ2VCb3hDb250YWluZXJcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQm94Q29udGFpbmVyX181M0FrRlwiLFxuXHRcImNoYWxsZW5nZU5vdEFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUFjdGl2ZV9fM21PX0RcIixcblx0XCJjaGFsbGVuZ2VGYWlsZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlRmFpbGVkQnV0dG9uX191OGFGU1wiLFxuXHRcImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25fXzE4YnUyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyXCI6IFwiQ29tcGxldGVkQ2hhbGxlbmdlc19jb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyX19UOWs0YlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleHBlcmllbmNlQmFyXCI6IFwiRXhwZXJpZW5jZUJhcl9leHBlcmllbmNlQmFyX18ySmJBWFwiLFxuXHRcImN1cnJlbnRFeHBlcmllbmNlXCI6IFwiRXhwZXJpZW5jZUJhcl9jdXJyZW50RXhwZXJpZW5jZV9fMlhBVFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm92ZXJsYXlcIjogXCJMZXZlbFVwTW9kYWxfb3ZlcmxheV9fMWh1UWxcIixcblx0XCJjb250YWluZXJcIjogXCJMZXZlbFVwTW9kYWxfY29udGFpbmVyX18xZE0xOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcIlByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fM2lZbFlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19IYkpFY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==