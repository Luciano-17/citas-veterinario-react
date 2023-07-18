const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
        if(respuesta) {
            eliminarPaciente(paciente.id);
        };
    };
 
    return (
        <div className="mx-5 mb-10 bg-white shadow-lg px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{paciente.mascota}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                E-mail: {''}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {''}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-yellow-600 hover:bg-yellow-700 transition-all text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 transition-all text-white font-bold uppercase rounded-md"
                    onClick={handleEliminar}
                >Eliminar </button>
            </div>
        </div>
    );
};

export default Paciente;