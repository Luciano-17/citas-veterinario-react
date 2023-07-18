const Error = ({mensaje}) => {
    return (
        <div className='bg-red-200 text-red-800 text-center md:text-left font-bold border-l-4 border-l-red-800 py-2 px-4 uppercase mb-5 rounded-tr-md rounded-br-md'>
            <p>{mensaje}</p>
        </div>
    );
};

export default Error;