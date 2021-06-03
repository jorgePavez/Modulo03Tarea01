/* se crea una funcion constructor consultorio con el fin de almacenar 
el nombre del consultorio y a los pacientes
 */
function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];

}

//creo la funcion constructora de los pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function() {
            return _rut
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function() {
            return _diagnostico
        }
    });
    //------------set-----------------------

    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function(edad) {
            _edad = edad
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function(rut) {
            _rut = rut
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function(diagnostico) {
            _diagnostico = diagnostico
        }
    });
}



//--------------getter & setter paciente ----------------------
Paciente.prototype.getNombre = function() {
    return this._getNombre;
};


Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this._getEdad;
};


Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
};

Paciente.prototype.getRut = function() {
    return this._getRut;
};


Paciente.prototype.setRut = function(rut) {
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
};


Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
};
//----------------------fin de g & s -----------------

//creación de 2 pacientes
var paciente1 = new Paciente('juan', '23', '11-1', 'muerte segura');
var paciente2 = new Paciente('argelia', '34', '22-2', 'mal gusto');

//guardar paciente en variable para su utilización
var p1 = [paciente1.getNombre(), paciente1.getEdad(), paciente1.getRut(), paciente1.getDiagnostico()];
//console.log(p1)
var p2 = [paciente2.getNombre(), paciente2.getEdad(), paciente2.getRut(), paciente2.getDiagnostico()];
//console.log(p2)

//creación de consultorio con sus pacientes
consultorio1 = new Consultorio('Divino Dolors', [p1, p2]);
//console.log(consultorio1); //imprime todo pulento

//permite mostrar todos los datos de los usuarios registrados
Consultorio.prototype.mostrarDatos = function() {
    console.log(`${this.pacientes}`);
}
consultorio1.mostrarDatos();

Paciente.prototype.buscarPaciente = function() {
    let buscar = "argelia";

    if (buscar == paciente2.getNombre()) {

        console.log(`${paciente2.getNombre()}`);


    } else {
        console.log('no ta')
    }
}

paciente2.buscarPaciente();


/* Consultorio.prototype.buscarNombre = function() {
    console.log(`${this.pacientes}`);
}
consultorio1.mostrarNombre(); */




/* .
1. Crear todo el código usando ES5. ok
2. Crear una función constructora para cada objeto. ok
3. Implementar métodos getters y setters para poder acceder y modificar los datos de
los pacientes. ok
4. Crear un método mediante la propiedad prototype que permita buscar los datos de
los usuarios por nombre y otro método que permita mostrar todos los datos de los
usuarios registrados.ok
5. Instanciar cada objeto utilizando la instrucción new */