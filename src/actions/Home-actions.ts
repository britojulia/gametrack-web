import { redirect } from "next/dist/server/api-utils"

const API_URL = "http://localhost:8080/games"


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
            const errors = await response.json()

            return{
                values:{
                    name: formData.get("name"),
                    achievement: formData.get("achievement"),
                    totalAchievements: formData.get("totalAchievements"),
                    hours: formData.get("hours"),
                    platform: formData.get("platform")
                },
                errors:{
                    name: errors.find(error => error.field === "name")?.message,
                    achievement: errors.find(error =>error.field ==="achivment")?.message,
                    totalAchievements: errors.find(error =>error.field ==="totalAchivment")?.message,
                    hours: errors.find(error =>error.field ==="hours")?.message,
                    platform:errors.find(error =>error.field ==="platform")?.message
                }
            }
        }
    


}