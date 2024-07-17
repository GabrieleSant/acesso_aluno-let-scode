const container = document.getElementById("container");

const getAlunos = () => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  return usuarios;
}

function listarAlunos() {
  let alunos = getAlunos();
  alunos.map(aluno => {
    const div = document.createElement('div');

    const nome = document.createElement('h2');
    nome.textContent = aluno.usuario;

    const foto = document.createElement('img');
    foto.setAttribute('src', aluno.foto);
    foto.setAttribute('width', "50%")

    const idade = document.createElement('p');
    idade.innerHTML = `Idade: ${aluno.idade}<br>`;

    const email = document.createElement('p');
    email.innerHTML = `<br>Email: ${aluno.email}`;

    const cidade = document.createElement('p');
    cidade.innerHTML = `<br>Cidade: ${aluno.cidade}`;
    
    div.appendChild(nome).classList.add('div-info');
    div.appendChild(foto).classList.add('div-info');
    div.appendChild(idade).classList.add('div-info');
    div.appendChild(email).classList.add('div-info');
    div.appendChild(cidade).classList.add('div-info');

    container.appendChild(div).classList.add('container-aluno');
  });
}

window.onload(listarAlunos());


