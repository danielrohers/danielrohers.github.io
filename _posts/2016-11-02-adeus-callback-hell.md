---
title: Adeus Callback Hell
layout: post
date: '2016-03-27 12:00:00'
description: Callback hell, por incrível que pareça é algo muito utilizado. Por qual
  motivo? Não faço ideia, cada caso um caso... :)
---

Callback hell, por incrível que pareça é algo muito utilizado. Por qual motivo? Não faço ideia, cada caso um caso... :)

Mas o que se sabe, é que **não** se deve fazer!

Motivos: 

* Legibilidade do código
* Código mais limpo
* **Porque é muito feio**
* ...

Ta, mas afinal, que diabos é esse tal de callback hell? o.O

```javascript
function sum (value) {  
    sum1(value, function (value) {
        sum2(value, function (value) {
            sum3(value, function (value) {
                sum4(value, function (value) {
                    sum5(value, function (value) {
                        sum6(value, function (value) {
                            sum7(value, function (value) {
                                sum8(value, function (value) {
                                    sum9(value, function (value) {
                                        sum10(value, function (value) {
                                            console.log(value);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
```

*Exemplo completo: [callbackHell.js](https://github.com/danielrohers/callback-hell-sky/blob/master/callbackHell.js)*

É essa coisa "linda" acima :(

E esse ainda esta bonito, existem piores!

Agora que sabemos o quão ruim é, como resolver? Existem várias formas, iremos ver o lindo e maravilhoso módulo async <3

# Async

[Async](https://github.com/caolan/async) é um módulo com N utilidades assíncronas para JavaScript Client/Server.

Esse exemplo de callback hell visto, basicamente é uma função `sum` que recebe um valor (value) que se propaga para outra função, que realiza uma soma e retorna essa valor, que é passado para outra e assim por diante...

Para esse caso, usaremos um método de controle de fluxo ([control flow](http://caolan.github.io/async/docs.html#controlflow)) do async, chamado [waterfall](http://caolan.github.io/async/docs.html#waterfall).

# Waterfall

Waterfall em PT-BR seria cascata, que é realmente o fluxo desse método, ou seja, é chamado N funções, onde executa uma de cada vez, passando ou não os valores de cada uma para a seguinte. Exemplo:

```javascript
function sum (value) {  
    async.waterfall([
        async.apply(sum1, value),
        async.apply(sum2),
        async.apply(sum3),
        async.apply(sum4),
        async.apply(sum5),
        async.apply(sum6),
        async.apply(sum7),
        async.apply(sum8),
        async.apply(sum9),
        async.apply(sum10)
    ], function (err, result) {
        console.log(result);
    })
};
```

*Exemplo completo: [callbackSky.js](https://github.com/danielrohers/callback-hell-sky/blob/master/callbackSky.js)*

No exemplo acima, temos a mesma função `sum` recebendo `value`, mas agora muito mais elegante ;D

Com waterfall colocamos as chamadas na ordem que desejamos que executem, onde os dados irão se propagar entre cada uma, através da função callback de cada.

PS. A propagação só será interrompida caso ocorra algum erro. Fazendo com que encerre imediatamente o fluxo independente de onde esteja e execute a [função de callback do waterfall](https://github.com/danielrohers/callback-hell-sky/blob/master/callbackSky.js#L55), caso ela exista.

Bueno, era isso!

Espero que você, caso ainda use da prática do callback hell, nunca mais faça isso. Claro que, você não precisa mais deixar de encadear funções e usar waterfall e demais soluções em todo o seu código, apenas saiba balancear, mantendo seu código o mais limpo possível.

Até mais :)