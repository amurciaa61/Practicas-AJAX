function loadLDocA(fichero,tipo)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET","datos/leerFicheroXML.xml",true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(tipo == "xml")
            {
                Console.log("es xml");
                gestionarFicheroXML(http.responseXML)
            }
            else
                Console.log("es txt");
			    gestionarFicheroTXT(http.responseText)
		}})
}
