import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-gray-100 ${theme === 'dark' ? 'dark:bg-gray-800' : ''} text-black dark:text-white p-5`}>
      <h1>WeeeWooo</h1>
      <button onClick={toggleTheme} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;