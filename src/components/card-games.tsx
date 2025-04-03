"use client";

import { Trash2, Clock, Trophy } from "lucide-react";


interface CardGamesItemProps {
    games: Games;
}

export default function CardGames({ games }: CardGamesItemProps) {
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 dark:bg-black text-white rounded-lg border-2 border-purple-500 shadow-lg text-center">
            <div className="flex justify-between items-center">
                <Trash2 />
            </div>

            <h2 className="text-xl font-bold text-purple-400">{games.name}</h2>
            <p className="text-gray-400">{games.platform}</p>

            <div className="mt-4 flex justify-between">
                <div className="text-center w-1/2 pr-4">
                    <Clock />
                    <p className="text-sm text-gray-400">HORAS JOGADAS</p>
                    <p className="text-xl font-bold">{games.hours} hrs</p>
                </div>
                <div className="text-center w-1/2 pl-4">
                    <Trophy />
                    <p className="text-sm text-gray-400">CONQUISTAS</p>
                    <p className="text-xl font-bold">{games.achievement}/{games.totalAchievements}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm text-gray-400">PROGRESSO</p>
                <p className="text-xl font-bold">%</p>
            </div>
        </div>
    );
}