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



//Ejercicio 3. 
//Que los datos sean una matriz, no un vector.
//Nivel Avanzado

//función auxiliar que se le pasa un vector de datos y devuelve un tr con datos (td) o cabecera (th)
function dameFilaDatos(tipo, vectordatos){
   const tr = document.createElement("tr");
   let td;
    for(let i = 0; i < vectordatos.length;i++){
        td = document.createElement(tipo);
        td.textContent = vectordatos[i];
        tr.appendChild(td);
    }

   return tr;
}

function creaTABLE03(cabecera, datos){
    //Paso 1. Creamos el objeto table
    const table = document.createElement("table");
    
    //Paso 2. Añado cabecera
    table.appendChild(dameFilaDatos("th",cabecera));

    //Paso 3. Añado datos
    let nfila = datos.length;
    for(let i = 0; i < nfila; i++){
        table.appendChild(dameFilaDatos("td",datos[i]));
    }

    //Paso 4. Devolvemos el objeto tabla
    return table;
}


//Ejercicio 4. Crear un calendario 
//Observaciones: se puede utilizar chatGPT oara consultar el objeto DATE

    function dameDiasDelMes(anio,mes ) {
        return new Date(anio, mes-1, 0).getDate();
    }

    function dameDiaComienzoMes(anio, mes){
        const fecha = new Date(anio, mes-1, 1);
        return fecha.getDay();
    }

    function dameVector(anio, mes){
        let datos = Array();
        let com = dameDiaComienzoMes(anio, mes);
        console.log("-->" + com);
        if(com === 0) com = 7;
        for(let i = 1 ;i < com; i++) datos[datos.length] = "";
        let dias = dameDiasDelMes(anio,mes);
        for(let i = 1 ;i <= dias; i++) datos[datos.length] = i;


        return datos;
    }

    function vectorAMatriz(vector){
        let matriz = Array();
        let fila = 0;
        let columna = 0
        for(let i = 0; i < vector.length; i++){
            if (!matriz[fila]) matriz[fila] = [];
            matriz[fila][columna] = vector[i];
            if(columna == 6){
                fila++;
                columna = 0
            }else{
                columna++;
            } 
        }
        return matriz;
    }

    function dameTablaMes(anio, mes){
         let datosvector = dameVector(anio, mes);
         let matriz = vectorAMatriz(datosvector);

         const cabecera = ["Lunes", "Martes", "Miércoles", "Jueves","Viernes","Sábado","Domingo"];
         return creaTABLE03(cabecera, matriz);


    }
