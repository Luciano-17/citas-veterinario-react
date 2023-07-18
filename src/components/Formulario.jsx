import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar formulario
        if([mascota, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Construir el objeto de paciente
        const pacienteObj = {
            mascota, 
            propietario, 
            email, 
            fecha, 
            sintomas
        };

        if(paciente.id) {
            // Editando
            pacienteObj.id = paciente.id;

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? pacienteObj : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Nuevo registro
            pacienteObj.id = generarId();
            setPacientes([...pacientes, pacienteObj]);
        }

        // Resetear formulario
        setMascota('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input 
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        placeholder="propietario@correo.com"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha de alta</label>
                    <input 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                {error && (
                    <Error 
                        mensaje='Todos los campos son obligatorios'
                    />
                )}

                <input 
                    type="submit"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all"
                />
            </form>
        </div>
    );
};

export default Formulario;