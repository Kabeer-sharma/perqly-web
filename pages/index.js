<>

<Navbar>
{
import Navbar from "../components/Navbar";
import { Button } from "@shadcn/ui";
import { Search, Gift, Users, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center 
justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-gray-900">Welcome to Perqly 
🚀</h1>
      <p className="text-lg text-gray-600 mt-3">
        Discover exclusive perks and hidden rewards from your memberships.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex items-center w-full max-w-md bg-white 
shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search for perks..."
          className="w-full px-4 py-3 outline-none"
        />
        <Button className="bg-blue-600 text-white px-4 py-2 flex 
items-center">
          <Search size={20} className="mr-2" /> Search
        </Button>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 
text-center">
        <FeatureCard icon={<Gift size={40} />} title="Exclusive Rewards" 
/>
        <FeatureCard icon={<Users size={40} />} title="Membership Perks" 
/>
        <FeatureCard icon={<Star size={40} />} title="Top Deals" />
        <FeatureCard icon={<Search size={40} />} title="Smart Discovery" 
/>
      </div>

      {/* CTA Button */}
      <Button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg 
text-lg font-semibold">
        Explore Perks Now
      </Button>
    </div>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="text-blue-600">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}
</>
