import Paginator from "@/components/Paginator/Paginator";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center p-10 text-white relative">
        <div className="">{children}</div>
        <div className="absolute flex flex-col right-10 h-[30vh] w-[30vh]">
          <Paginator/>
          <div className="flex flex-col p-4 container h-[12vh] w-[30vh] mt-8">
            <h3 className="text-2xl font-bold">Carpe Hora</h3>
            <p className="w-8/12 text-xl">Budget your time like money</p>
          </div>
        </div>
      </body>
    </html>
  );
}
