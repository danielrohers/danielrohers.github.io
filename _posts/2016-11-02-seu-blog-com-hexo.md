---
title: Seu blog com Hexo
layout: post
date: '2016-02-09 12:00:00'
description: |-
  Quando decidi criar o blog, uma coisa era certa, iria hospedar no GitHub através do GitHub Pages.

  Mas por que nele? Ora... É gratuito e funciona muito bem :)
---

# Hospedagem

Quando decidi criar o blog, uma coisa era certa, iria hospedar no [GitHub](https://github.com) através do [GitHub Pages](https://pages.github.com).

Mas por que nele? Ora... É gratuito e funciona muito bem :)

# Tecnologia
## Jekyll

Bueno, chegou a hora de definir como iria fazer, de imediato pensei no Jekyll (resumidamente, um gerador de sites estáticos), pois é muito usado para esse propósito e também o GitHub recomenda...

**Por que mudar de ideia?**

Pois então, Jekyll é em Ruby, o que me deixa triste pois é um porre de instalar. Também precisa de outras techs, [segue todas](https://jekyllrb.com/docs/installation/#requirements):

* Ruby
* RubyGems
* NodeJS
* Python

Outro motivo, é o trabalho, muita configuração para deixar tudo "redondinho", o que não deveria acontecer, pois é um blog... Tem que ser extremente fácil e rápido de fazer.

## Hexo

Diante de todos os tramites necessários para Jekyll e por eu ser um JavaScript Lover, fui em busca de algum gerador com NodeJS e finalmente cheguei no lindo e maravilhoso [Hexo](https://hexo.io).

Hexo é super fácil de instalar através do NPM e as configurações dele seguem da mesma forma

### Requesitos

* [NodeJS >= v.4.0.0](https://nodejs.org)

### Instalação

```bash
[sudo] npm install -g hexo-cli
```

### Primeiros passos

Criar toda a estrutura necessária do Hexo

```bash
hexo init blog
```

Entre no projeto

```bash
cd blog
```

Instale todas as dependências necessárias

```bash
npm install
```

Subindo seu blog :)

```bash
hexo server
```

Após alguns ms, irá aparecer a seguinte mensagem, ou semelhante:

> INFO Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.

Então acesse e já pode desfrutar do seu blog

### Documentação

A [documentação](https://hexo.io/docs) do Hexo é super clean e de fácil compreensão, aconselho dar uma olhada nela para compreender todo o ecosistema antes de definir em usa-la.

### Temas

Os [temas](https://hexo.io/themes) do Hexo ficam dentro da pasta themes, é fácil de alterar algum existente e mais ainda instalar algum novo, afinal, basta adiciona-lo na pasta :)

No momento não estou afim de criar um tema layout totalmente próprio, então estou utilizando o tema [Again](https://github.com/DrakeLeung/hexo-theme-again)

### Plugins

Como tudo nele, os plugins são simples para instalar, sem contar na busca fornecida que torna muito mais fácil encontrar algum plugin que satisfaça sua necessidade.

Falando em plugins, tem dois indispensáveis ao meu ver.

[hexo-admin](https://github.com/jaredly/hexo-admin), um plugin que transforma a criação, edição e toda manipulação do seu blog muito tranquila e dinâmica.

[hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git), plugin que realiza deploy para o GitHub em apenas um comando. Basta você configurar o repo e branch e depois executar o comando:

```bash
hexo deploy
```

Com ele você irá realizar o deploy dos arquivos estáticos gerados para seu blog.

Você também pode agilizar realizando a geração dos arquivos e deploy ao mesmo tempo.

```bash
hexo deploy --generate
```

# Exit

E era isso pessoal, Hexo é um gerador muito fácil para desenvolver e contribuir para ele. Fiz apenas um review rápido sobre ele. Aconselho a todos que quiserem criar seu blog, estudarem sua documentação para ver quão lindamente ele é.

Segue o source do meu blog: [danielrohers.github.io](https://github.com/danielrohers/danielrohers.github.io)