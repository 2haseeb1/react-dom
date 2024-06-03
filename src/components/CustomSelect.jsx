
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const CustomSelect = () => {
  return (
    <div className="relative w-full max-w-xs">
      <select className="select select-primary w-full max-w-xs pr-10">
        <option disabled selected>What is the best TV show?</option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default CustomSelect;
