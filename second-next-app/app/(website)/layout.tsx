import Navbar from "@/Components/Navbar";
import "../globals.css";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>

        <footer>
          <h2 className="bg-stone-900 text-white py-3 text-center">footer</h2>
        </footer>
      </body>
    </html>
  );
}
