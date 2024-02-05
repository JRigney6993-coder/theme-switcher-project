import money from '../assets/4998348.webp'

const MainContent = () => {
  return (
    <main className="p-5 flex-grow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4">Coding is best yes</h2>
      <p className="mb-2">
        Coding isn't just about typing lines of code; It's... LIFE
      </p>
      <p className="mb-2">
        One must LIVe and THRIVE off every byte of code
      </p>
      <p>
        CODING SETS ONE FREE FROM REALITY 🥶💯👌
      </p>
      <div className="flex flex-row flex-wrap"><img src={money} className="w-40" alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/><img src={money} className='w-40' alt=""/></div>
    </main>
  );
};

export default MainContent;