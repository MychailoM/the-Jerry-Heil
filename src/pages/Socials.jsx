import { Header } from "../components/Header";
import { SocialsList } from "../components/SocialsList";

export const Socials = () => {
    return(
        <main className="socials">
            <div className="socials__overlay">
                <Header />
                <SocialsList />
            </div>
        </main>
    )
};