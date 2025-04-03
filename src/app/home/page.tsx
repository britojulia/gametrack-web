"use client";

import { getGames } from "@/actions/Home-actions";
import CardGames from "@/components/card-games";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Link, Plus } from "lucide-react";

export default async function Home() {
    const data: Games[] = await getGames()

    return (
        <>
            <NavBar active="HOME" />

            <main className="flex h-screen justify-center items-center">
                <div className="bg-black-900 w-2/3 m-6 p-6 rounded flex gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">SEUS JOGOS</h2>
                        
                    </div>
                    <div className="max-w-md p-6 bg-black-900 text-white rounded-lg shadow-lg flex-1 rounded border border-purple-700">
                        <h2 className="text-2xl font-bold text-purple-400 mb-4">CADASTRAR JOGOS</h2>
                        <Button asChild>
                            <Link href="/games/form">
                                <Plus /> Novo Jogo
                            </Link>
                        </Button>

                        {data.length === 0 ? (
                            <p>Nenhum jogo cadastrado</p>
                        ) : (
                            data.map((games) => <CardGames key={games.id} games={games} />)
                        )}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
