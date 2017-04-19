# Proposta de solução - Desafio 5 - Pisos cerâmicos

Esse repositório apresenta uma proposta de solução para a disposição de pisos cerâmicos apresentado no desafio do [Mini Projeto 5](https://github.com/BugginhoDeveloper/mini-projeto-5-javascript) do Bugginho Developer.

## Hipóteses admitidas verdadeiras na proposta de solução

- O espaço de 1 cm entre cada piso/pedra é resultado da soma do espaçamento de 0,5 cm que cada piso/pedra possui ao seu redor, portanto, as peças que forem acomodadas mais externamente na área a ser preenchida terão um espaçamento de 0,5 cm com a borda limite.
- O corte de peça é extremamente preciso, sendo assim, não há perda nenhuma no tamanho da peça em caso de corte.
- (TODO) Para a representação gráfica, 1 cm é igual a 10 px.

## Linha de pesquisa / fontes úteis no desenvolvimento da proposta

- Programação linear: 
  + [Método de solução do canto noroeste para problemas de transporte](http://www.linearprogramming.info/northwest-corner-method-transportation-algorithm-in-linear-programming/)
  + [Teoria básica sobre problemas de corte unidimensionais - pág. 22](http://www.deinf.ufma.br/~acmo/grad/PO_c05_v2005.pdf)
  + [Teoria sobre problema do corte e empacotamento - pág. 24](http://wiki.icmc.usp.br/images/1/13/Aula2PM_mari.pdf)
  + [Algoritmos para Problemas de Corte de Guilhotina Bidimensional](https://www.ime.usp.br/~glauber/publicacoes/tese.pdf)
  + [O Problema de Corte de Guilhotina com Placas Variadas](https://www.ime.usp.br/~glauber/publicacoes/sbpo07.pdf)
  + [Artigo demonstrando exemplo de aplicação na resolução do problema de guilhotina bidimensional](http://www.amzi.com/articles/papercutter.htm)
  + [CUTTING STOCK PROBLEM BASED ON THE LINEAR PROGRAMMING APPROACH - Referencial teórico, aplicações e algoritmos](http://ir.knust.edu.gh/bitstream/123456789/3915/1/PHILIP%20DEBRAH%20THESIS.pdf)
  
- JavaScript:
  + [A modern approach to object creation in JavaScript](https://jaxenter.com/a-modern-approach-to-object-creation-in-javascript-107304.html)
  + [JavaScript Data Structures - The Linked List](http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html)
  + [The Module Pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
  + [JavaScript Patterns Collection](http://shichuan.github.io/javascript-patterns/)

### Rascunhos
  
- Utilizar de campos de alcance para desenvolver o algoritmo que percorrerá a área a ser preenchida;
- A área será dividida em quatro setores:
  - Área preenchida (piso posicionado): área preenchida inicia-se na coordenada 0x0, após isso, é igual ao tamanho de um piso informado
  - Remanescente horizontal: área imaginária projetada pela altura do piso posicionado
  - Remanescente vertical: área imaginária projetada pela largura do piso posicionado
  - Remanescente oposto: no início, o remanescente oposto é igual ao tamanho da área informada a ser preenchida
- Uma alternativa de solução pode ser identificar uma coluna inteira de pisos posicionados, repetir seu padrão até o limite, e calcular o reaproveitamento das sobras que eventualmente poderão aparecer
- Ao utilizar a abordagem de setores é possível trabalhar com pisos de diversos tamanhos e maximizar o reaproveitamento de pedaços de sobras (mesmo que este não seja o escopo do desafio)
- A definição dos pisos a serem utilizados podem ser armazenados em uma pilha, mas deverão ser organizados propriamente para a apresentação visual
  - A apresentação visual também serve de teste de confirmação de que o algoritmo conseguiu realizar os cálculos corretamente
  - Uma das alternativas é transformar a lista com as peças necessárias para o preenchimento da área em uma matriz, dimensionando os elementos para que organizem-se em colunas e linhas com elementos (pisos) iguais, e depois organizá-los em uma lista ordenada unidimensional para a disposição visual