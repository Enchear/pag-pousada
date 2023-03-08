function hello(){
let  bm= document.getElementsByName(main);
bm.innerHTML="Hello world!";
alert(bm.innerHTML);
}
document.write("Hello world!");

function Pesquisa(seletor, caminho){
    let elemetos= document.querySelectorAll(seletor);
    if(elemmetos.length ===0){
        console.log("nenhum elemento encontrado"+seletor);
        return null;
    }
    for(let i=0; i<caminho.length; i++){
        let caminho =caminho[i];
        let elementosNoCaminho=[];
    }
    if (caminho ===""){
        elementosNoCaminho=[document];
    } else{
        for(let j=0; j<elemetos.length; j++){
            let elemento = elemetos[j];
            let elementosEncontrados= elemento.querySelectorAll(caminho);
           
        }
        for(let k=0; k<elementosEncontrados.length; k++){
                let elementosEncontrado= elementosEncontrados[k];
                elementosNoCaminho.push(elementosEncontrado);
        }
        if (elementosNoCaminho.length ===0){
            console.log("nenhum elemento encontrado"+caminho);
            return null;
        }elemetos=elementosNoCaminho;
    }
    return elementos[0]
}