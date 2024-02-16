const Computer = ({ computerCompany, computerModel, computerYear }) => {

    return (
        <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
            <div className="italic">Производитель: {computerCompany}</div>
            <div className="italic">Модель: {computerModel}</div>
            <div className="italic">Год: {computerYear}</div>
        </div>
    );
}

export default Computer;