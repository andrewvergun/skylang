import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import MessageUs from "@/components/MessageUs/MessageUs";

export const metadata = {
    title: "SkyLang - Мовна школа",
    description: "Мовна школа польської та англійської мови",
};

export default function RootLayout({children}) {
    return (
        <html lang="uk">
        <body>
        <Header/>
        {children}
        <MessageUs/>
        <Footer/>
        <CookieBanner/>
        </body>
        </html>
    );
}