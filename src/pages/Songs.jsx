import { Header } from "../components/Header";
import { SongsList } from "../components/SongsList";

export const Songs = () => {
    return(
            <main className="songs">
                <div className="songs__overlay">
                    <Header />
                    <SongsList />  
                </div>
            </main>
        )
};