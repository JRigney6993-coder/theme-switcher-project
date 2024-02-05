import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-purple-800 text-white p-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">WeeeWooo</h1>
      <button onClick={toggleTheme} className="py-2 px-4 bg-purple-900 hover:bg-purple-700 rounded transition duration-300">
        Dark/Light
      </button>
    </header>
  );
};

export default Header;