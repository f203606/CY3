import AddQuest from "./AddQuest";

function App() {
  function minhaFuncao(title) {
    console.log(title);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-md rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <h1 className="text-5xl font-work font-bold w-fit text-center">
          Quests To Do
        </h1>
        <AddQuest saveAddQuest={minhaFuncao} />
      </div>
    </div>
  );
}

export default App;
