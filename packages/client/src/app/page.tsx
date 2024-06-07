import React from "react";
import { Button } from "../components/ui/button";
import Card from "../components/home/card";
import SignInButton from "../components/home/signInButton";

const cards = [
  {
    heading: "AI Chat Assistant",
    info: "A cutting-edge AI assistant providing comprehensive support for all your cryptocurrency and wallet-related queries.",
  },
  {
    heading: "Intent Based Actions",
    info: "Specify your needs and let our intelligent agents find the optimal solutions effortlessly.",
  },
  {
    heading: "Advanced Automation",
    info: "Enjoy seamless experiences with passkeys, gas abstraction, and batch transactions for ultimate convenience.",
  },
  {
    heading: "Cross-Chain Transfers",
    info: "Experience instant cross-chain transactions within the BNB ecosystem.",
  },
];

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative">
        <div className="hidden md:block">
          <header className="py-6 px-12 flex justify-between items-center">
            <div className="text-3xl font-bold">AI-FlowWallet</div>
            <nav className="space-x-8">
              <a href="#" className="hover:text-[#FFE900]">About</a>
              <a href="#" className="hover:text-[#FFE900]">Features</a>
              <a href="#" className="hover:text-[#FFE900]">Pricing</a>
              <a href="#" className="hover:text-[#FFE900]">Blog</a>
            </nav>
            <SignInButton />
          </header>
          <div className="flex justify-center items-center pt-20">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold mb-4">Building AI solution</h1>
              <p className="text-lg mb-8">Our AI powered suite of solutions empowers your business with cutting-edge capabilities.</p>
              <div className="space-x-4">
                <Button className="bg-[#FFE900] text-black px-6 py-3">Get started</Button>
                <Button className="bg-transparent border border-white px-6 py-3">Contact sales</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            <div className="grid grid-cols-2 gap-8">
              {cards.map((card, index) => (
                <Card key={index} heading={card.heading} info={card.info} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col h-screen justify-center items-center px-12">
          Interface only available on Desktop right now. Mobile interface coming soon.
        </div>
      </div>
    </div>
  );
};

export default Home;
