import { Trash2, Clock, Trophy } from "lucide-react";

export default function CardGames() {
  return (
    <div className="max-w-md mx-auto p-6 bg-black-900 text-white rounded-lg border-2 border-purple-500 shadow-lg text-center">
      <div className="flex justify-between items-center">
        <Trash2/>
      </div>
      
      <h2 className="text-xl font-bold text-purple-400">CALL OF DUTY</h2>
      <p className="text-gray-400">playstation</p>
      
      <div className="mt-4 flex justify-between">
        <div className="text-center w-1/2 pr-4">
          <Clock />
          <p className="text-sm text-gray-400"> HORAS JOGADAS </p>
          <p className="text-xl font-bold">24hrs</p>
        </div>
        <div className="text-center w-1/2 pl-4">
          <Trophy/>
          <p className="text-sm text-gray-400"> CONQUISTA </p>
          <p className="text-xl font-bold">24/70</p>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-400">PROGRESSO</p>
        <p className="text-xl font-bold">60%</p>
      </div>
    </div>
  );
}
