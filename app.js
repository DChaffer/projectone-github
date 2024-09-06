function pesquisar (){
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value 
    
    //se o campoPesquisa estiver vazio e o usuário clicar em pesquisar, não retorna nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Você precisa digitar alguma metodologia de Gestão de Projetos.</p>"
        return
    }
            
    campoPesquisa = campoPesquisa.toLowerCase()

    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
    let curiosidades="";
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
             //se  titulo includes campoPesquisa
            //então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || curiosidades.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado"> 
                    <h2>
                        <a href="#" target="_blank"> ${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="curiosidade-meta">${dado.curiosidades}</p>
                    <a href=${dado.link} target="_blank"> Mais informações</a>
            </div>
                    
            `;
        }
        
    }
    
    if (!resultados){
        resultados ="<p>Ainda estamos em construção, em breve teremos mais metodologias.</p>"
    }
section.innerHTML = resultados

}



   

