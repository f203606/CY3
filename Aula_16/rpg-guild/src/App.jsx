import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Guilds } from "./components/guilds";
import { Members } from "./components/members";
import { GuildForm } from "./components/guildForm";
import { MemberForm } from "./components/memberForm";


//O retorno implícito ocorre quando você omite a palavra-chave return e utiliza a sintaxe de parênteses para envolver o JSX do componente, resultando em um retorno automático.

const App = () => (
  <Router>
    <div className="bg-[#ECEAE0] w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guilds" element={<Guilds />} />
        <Route path="/members" element={<Members />} />
        <Route path="/guilds/:guildId" element={<GuildForm/>} />
        <Route path="/members/:memberId" element={<MemberForm />} />
      </Routes>
    </div>
  </Router>
)

export default App;
