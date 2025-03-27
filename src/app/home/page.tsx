import CardGames from "@/components/card-games";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Star } from "lucide-react";

export default function Home() {
    return (
        <>
            <NavBar active="HOME" />

            <main className="flex h-screen justify-center items-center">
                <div className="bg-black-900 w-2/3 m-6 p-6 rounded flex gap-6 ">
                <div >
                        <h2 className="text-2xl font-bold mb-4">SEUS JOGOS</h2>
                    
                    <CardGames/>
                </div>
                    <div className="max-w-md p-6 bg-black-900 text-white rounded-lg shadow-lg flex-1 rounded border border-purple-700">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">CADASTRAR JOGOS</h2>
                        <div className="mb-4 flex gap-2">
                            <button className="bg-purple-900 text-white px-4 py-2 rounded">Adicionar Jogo</button>
                            <button className="bg-purple-950 text-white px-4 py-2 rounded">Editar</button>
                        </div>
                        <form>
                            <label className="block mb-2">NOME DO JOGO</label>
                            <input type="text" placeholder="Digite o nome do jogo" className="w-full p-2 mb-4 bg-gray-800 rounded border border-gray-700" />
                            
                            <label className="block mb-2">SUAS CONQUISTAS</label>
                            <input type="text" placeholder="Digite suas conquistas no jogo" className="w-full p-2 mb-4 bg-gray-800 rounded border border-gray-700" />
                            
                            <label className="block mb-2">CONQUISTAS TOTAIS</label>
                            <input type="text" placeholder="Digite as conquistas totais do jogo" className="w-full p-2 mb-4 bg-gray-800 rounded border border-gray-700" />
                            
                            <label className="block mb-2">HORAS</label>
                            <input type="text" placeholder="Digite a quantidade de horas jogadas" className="w-full p-2 mb-4 bg-gray-800 rounded border border-gray-700" />
                            
                            <label className="block mb-2">PLATAFORMA</label>
                            <select className="w-full p-2 mb-4 bg-gray-800 rounded border border-purple-700">
                                <option>Selecione a plataforma</option>
                                <option>Xbox</option>
                                <option>Steam</option>
                                <option>PlayStation</option>
                                <option>Epic Games</option>
                                <option>Nintendo Switch</option>
                            </select>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
