"use client";

import { createGame } from "@/actions/Home-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        achievement: "",
        totalAchievements: "",
        hours: "",
        platform: ""
    },
    errors: {
        name: "",
        achievement: "",
        totalAchievements: "",
        hours: "",
        platform: ""
    }
};

export default function Form() {
    const [state, formAction, pending] = useActionState(createGame, initialState);

    return (
        <>

            <main className="flex justify-center">
                <div className="bg-black-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-2xl font-bold text-purple-400 mb-4">Cadastrar Jogo</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        <div>
                            <Input 
                                name="name" 
                                placeholder="Nome do jogo" 
                            
                            />
                            <span className="text-sm text-destructive"></span>
                        </div>

                        <div>
                            <Input 
                                name="achievement" 
                                placeholder="Suas conquistas" 
                                
                            />
                            <span className="text-sm text-destructive"></span>
                        </div>

                        <div>
                            <Input 
                                name="totalAchievements" 
                                placeholder="Conquistas totais" 
                            
                            />
                            <span className="text-sm text-destructive"></span>
                        </div>

                        <div>
                            <Input 
                                name="hours" 
                                placeholder="Horas jogadas" 
                            
                            />
                            <span className="text-sm text-destructive"></span>
                        </div>

                        <div>
                            <select 
                                name="platform" 
                                className="w-full p-2 bg-gray-800 rounded border border-purple-700" 
                               
                            >
                                <option value="">Selecione a plataforma</option>
                                <option value="Xbox">Xbox</option>
                                <option value="Steam">Steam</option>
                                <option value="PlayStation">PlayStation</option>
                                <option value="Epic Games">Epic Games</option>
                                <option value="Nintendo Switch">Nintendo Switch</option>
                            </select>
                            <span className="text-sm text-destructive"></span>
                        </div>

                        <div className="flex justify-between">
                            <Button asChild variant="outline">
                                <Link href="/home">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
