import { getGames } from "@/actions/Home-actions";
import CardGames from "@/components/card-games";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import Form from "./form/page";

export default async function Home() {
    const data: Games[] = await getGames();

    return (
        <>
            <NavBar active="HOME" />

            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-4xl p-6">
                    <h2 className="text-3xl font-bold text-black mb-6 text-center">SEUS JOGOS</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        {data.length === 0 ? (
                            <p className="text-gray-500 text-center col-span-2">Nenhum jogo cadastrado</p>
                        ) : (
                            data.map((game) => (
                                <CardGames key={game.id} games={game} className="shadow-lg border border-purple-400 p-4 rounded-lg bg-white" />
                            ))
                        )}
                    </div>

                    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-purple-700 w-full">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">CADASTRAR JOGOS</h2>
                        <Form />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
