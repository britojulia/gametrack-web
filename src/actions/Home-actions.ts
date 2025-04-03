
const API_URL = "http://localhost:3000/home"


export async function getGames() {
    const response = await fetch(API_URL)
    return await response.json()
}


export async function createGame(initialState: any, formData: FormData) {
    const data ={
        name: formData.get("name"),
        achievement: formData.get("achievement"),
        totalAchievements: formData.get("totalAchievements"),
        hours: formData.get("hours"),
        platform: formData.get("platform")
    }

    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }


    const response = await fetch(API_URL, options)

    if (!response.ok) {
        throw new Error("Erro ao criar o jogo");
    }

    return await response.json();

}