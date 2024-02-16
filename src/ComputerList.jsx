import Computer from './Computer';

const ComputerList = ({ computerList, searchTerm }) => {
    return (
        <div className="container-lg mx-auto grid-cols-3">
            {computerList.map((computer, index) => {
                return (
                    <Computer
                        key={index}
                        computerCompany={computer.computer_company}
                        computerModel={computer.computer_model}
                        computerYear={computer.computer_year}
                    />
                )
            })}
        </div>
    );

}

export default ComputerList;