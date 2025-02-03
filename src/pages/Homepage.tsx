import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { WordRotate } from "../components/WordFlip";
import Underline from "../components/Underline";
import Footer from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col dark:text-neutral-100 text-neutral-800">
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col bg-gradient-to-b from-blue-100 to-green-200 dark:from-gray-800 dark:to-gray-900 py-28">
        <title className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bricolage-grotesque flex flex-col sm:flex-row sm:gap-4 justify-center items-center text-indigo-900 dark:text-indigo-400">
          <h1>Experience</h1>
          <WordRotate
            words={[
              
              "Encrypted",
              "Confedential",
              "Real-time",
             
            ]}
          />
          <h1>Chats</h1>
        </title>
        <h3 className="mt-3 px-8 sm:text-lg xl:text-xl max-w-2xl font-medium text-center">
        Say it and let it go. Secure, temporary chats—
          <div className="inline-block ml-1">
            no records, no worries.
            <Underline />
          </div>
        </h3>
        <section className="flex flex-col gap-2 mt-10 xl:mt-12 justify-center items-center font-semibold text-white">
          <button
            onClick={() => {
              navigate("/chat");
            }}
            className="px-6 py-3 w-48 sm:w-96 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create a room
          </button>
          <button
            className="px-6 py-3 w-48 sm:w-96 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join a room
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;