function gestionarFicheroTXT(txtDoc){
    let contenido = "<table><tr><th>Nombre</th><th>Distrito</th><th>Codigo</th></tr>";
    let registros = txtDoc.split(/\r?\n|\r/);
    for (let i = 0; i < registros.length; i++) 
    {
        let campos = registro[i].split(";");
        for (let j = 0;j < 3;j++)
        {
            contenido += "<tr><td>" + campos[j] + "</td></tr>";
        } 
    }
    contenido += "</tr></th></table>"
    document.getElementById('ficheroTXT').innerHTML = contenido;	
}

document.querySelector("#botonTXT").addEventListener("click",()=>{
	
    let txtDoc = loadLDocA("leerFicheroTXT.txt","txt");
})