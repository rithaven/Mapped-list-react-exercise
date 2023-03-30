
function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (

    <div className="flex items-center justify-center h-screen">
     <ul className="text-3xl list-disc">
      {animals.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;
