// console.log(global);

// o Object.freeze . . . nao deixa que mude nada no objeto, supostamente ele congela o objeto!!! mais nao e obrigatorio tem ele ...

global.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares!'
  },
  nome: 'Sistema Legal'
})