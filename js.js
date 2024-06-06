function salvar() {
    var nome = document.getElementById('txtname')
    var idade = document.getElementById('txtidade')
    var email = document.getElementById('txtemail')
    var pais = document.getElementById('selpais')

    var data =
    ` As informações estão corretas?
    Nome: ${nome.value} 
    Idade: ${idade.value}
    Email: ${email.value}
    País: ${pais.value}`
    confirm(data)
}
