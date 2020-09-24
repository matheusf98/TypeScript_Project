import { MeuObjeto } from "./MeuObjeto";
import { Negociacao } from "./index";


export class Negociacoes implements MeuObjeto<Negociacoes>{

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraText(): void {

        console.log("Impressão");
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(Negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(Negociacoes.paraArray());
    }
}
