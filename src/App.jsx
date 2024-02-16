import { useState, useEffect } from "react";
import ComputerList from "./ComputerList";

import MOCK_DATA from './MOCK_DATA.json';

const filterComputer = (searchText, listOfComputer) => {
  if (!searchText) {
    return listOfComputer;
  }
  return listOfComputer.filter(({ computer_model }) =>
    computer_model.toLowerCase().includes(searchText.toLowerCase())
  );
}
const data = MOCK_DATA;

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [computerList, setComputerList] = useState(data);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredComputer = filterComputer(searchTerm, data);
      setComputerList(filteredComputer);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <div className="container mx-auto font-mono">
      <div className="flex justify-center flex-col align-middle">
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск по Модели"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
          style={{
            width: '600px',
          }}
        />
        <ComputerList computerList={computerList} />
      </div>
    </div>
  );
}

export default App;
