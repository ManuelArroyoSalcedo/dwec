console.log("hola");

//Ejercicio 1
function creaTD(dato){
    const td = document.createElement("td");
    td.textContent = dato;
    return td;
}

function creaTABLE01(datos){
    //Paso 1. Creo el objeto tr
    const tr = document.createElement("tr");

    //Paso 2. Creamos tds con datos y se los añadimos a tr
    let td;
    for(let i=0;i<datos.length;i++) {
        td = creaTD(datos[i]);
        tr.appendChild(td);
    }

    //Paso 3. Creamos el objeto table y le añadimos tr
    const table = document.createElement("table");
    table.appendChild(tr);

    //Paso 4. Devolvemos el objeto tabla
    return table;
}

//Ejercicio 2
function creaTH(dato){
    const th = document.createElement("th");
    th.textContent = dato;
    return th;
}

function creaTABLE02(cabecera, datos){
    //Paso 1. Creamos el objeto table y le añadimos tr
    const table = document.createElement("table");
    
    
    
    //Paso 2. Creo tr y añado THs (cabecera)
    let tr = document.createElement("tr");
    let th;
    for(let i=0;i<cabecera.length;i++) {
        th = creaTH(cabecera[i]);
        tr.appendChild(th);
    }
    table.appendChild(tr);

    //Paso 3. Creo el objeto tr y le añado los TDs
    tr = document.createElement("tr");
    let td;
    for(let i=0;i<datos.length;i++) {
        td = creaTD(datos[i]);
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //Paso 4. Devolvemos el objeto tabla
    return table;
}
