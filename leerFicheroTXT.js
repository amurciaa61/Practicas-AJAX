function gestionarFicheroTXT(txtDoc){
    let contenido = "<table><tr><th>Nombre</th><th>Distrito</th><th>Codigo</th></tr>";
    console.log("llego 0");
    let registros = txtDoc.split(/\r?\n|\r/);
    console.log("longitud: "+registros.length);
    for (let i = 0; i < registros.length; i++) 
    {
        let campos = registros[i].split(";");
        contenido += "<tr>";
        for (let j = 0;j < 3;j++)
        {
            contenido += "<td>" + campos[j] + "</tr>";
        } 
        contenido += "</tr>";
    }
    contenido += "</tr></th></table>"
    document.getElementById('ficheroTXT').innerHTML = contenido;	
}

document.querySelector("#botonTXT").addEventListener("click",()=>{
	console.log("llego");
    let txtDoc = loadLDocA("leerFicheroTXT.txt","txt");
})