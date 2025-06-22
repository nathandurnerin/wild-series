// Update the import path if the file is named differently or located elsewhere
// For example, if the file is 'SearchBarVisuelle.tsx' in 'components/SearchBarVisuelle':
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-10">
            Retrouvez toutes vos séries préférées
          </h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
