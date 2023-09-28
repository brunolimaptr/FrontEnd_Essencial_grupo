document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  // Obtenha os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Verifique se algum campo está vazio
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return; // Encerra a função se houver campos vazios
  }

  // Armazene os dados no localStorage
  const dados = {
    nome,
    email,
    mensagem,
  };

  localStorage.setItem("dadosContato", JSON.stringify(dados));

  // Limpe os campos do formulário
  document.querySelector("form").reset();

  alert("Dados enviados com sucesso!");

  // Obtém os dados armazenados no localStorage
  const dadosArmazenados = localStorage.getItem("dadosContato");

  if (dadosArmazenados) {
    // Se os dados existem no localStorage

    // Converte a string em objeto JavaScript usando JSON.parse
    const dados = JSON.parse(dadosArmazenados);

    // Agora você pode acessar os dados individualmente
    console.log("Dados armazenados:");
    console.log("Nome:", dados.nome);
    console.log("Email:", dados.email);
    console.log("Mensagem:", dados.mensagem);
  } else {
    console.log("Nenhum dado encontrado no localStorage.");
  }
});
