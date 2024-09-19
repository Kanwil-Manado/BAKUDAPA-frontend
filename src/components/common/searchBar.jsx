import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="relative flex-1 max-w-lg mx-auto">
      {/* Ikon search di dalam input */}
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-[#176AD1]" />
      </span>
      
      {/* Input field */}
      <input
        type="text"
        placeholder="Search..."
        className="w-3/4 p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
