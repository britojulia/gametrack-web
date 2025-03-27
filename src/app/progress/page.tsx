import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default function Progress(){
    return(
        <>   
        <NavBar active="PROGRESSO"/>

        <main className="flex h-screen justify-center">
            <div className="bg-black-900 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">SEU PROGRESSO</h2>
                <h3  className="text-lg" >Acompanhe aqui os seus progressos nos jogos</h3>
            </div>
        </main>
        
        <Footer/>

    </>
    )
}