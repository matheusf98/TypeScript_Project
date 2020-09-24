System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
                paraText() {
                    console.log("Impressão");
                    console.log(JSON.stringify(this._negociacoes));
                }
                ehIgual(Negociacoes) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(Negociacoes.paraArray());
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
