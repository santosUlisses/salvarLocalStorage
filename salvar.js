const enviar = document.querySelector("#enviar");
const clear = document.querySelector("#clear");
const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const disponibilidade = document.querySelector(".disponibilidade");
const list = document.querySelector("#list")
let id = localStorage.length;

var produto = {};



enviar.addEventListener("click", (e) => {
    e.preventDefault();
   if(nome.value!="" && descricao.value!="" && valor.value!=""){
    id += 1;


    var produto = {
        id: id,
        name: nome.value,
        descricao: descricao.value,
        valor: parseFloat(valor.value),
        disponibilidade: disponibilidade.value,
    };

    localStorage.setItem(id, JSON.stringify(produto));

    exibir();

    nome.value = "";
    descricao.value = "";
    valor.value = "";

   }
   else{
    alert("Nenhum campo pode estar vazio")
   }
});


clear.addEventListener("click", (e) => {

    e.preventDefault();
    localStorage.clear();
    list.innerHTML = "";

});


const exibir = () => {
    list.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const produto = JSON.parse(localStorage.getItem(key));
        

        const excluir = document.createElement('button');
        excluir.textContent = "Excluir";
        excluir.classList.add("excluir");

        const tr = document.createElement('tr');
        
        const thNome = document.createElement('th');
        const thDescricao = document.createElement('th');
        const thValor = document.createElement('th');
        const thDisponibilidade = document.createElement('th');
        const thExcluir = document.createElement('th');
       
        thNome.textContent = produto.name;
        thDescricao.textContent = produto.descricao;
        thValor.textContent = produto.valor;
        thDisponibilidade.textContent = produto.disponibilidade;
        thExcluir.appendChild(excluir);
       
        tr.appendChild(thNome);
        tr.appendChild(thDescricao);
        tr.appendChild(thValor);
        tr.appendChild(thDisponibilidade);
        tr.appendChild(thExcluir);
        list.appendChild(tr);

    
        excluir.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem(key);
            exibir();
        });
    }

}



window.addEventListener("load", exibir);