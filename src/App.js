
function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="mb-10 text-2xl font-bold">Mapping Through A List And Rendering</h2>
     <ul className="text-3xl list-disc">
      {animals.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;
