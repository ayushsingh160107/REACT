import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StartupList from "./components/StartupList";
import Footer from "./components/Footer";
import PitchModal from "./components/PitchModal";
import { supabase } from "./lib/supabase";

function App() {
  const [startups, setStartups] = useState([]);
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPitchModal, setShowPitchModal] = useState(false);

  // Fetch data from Supabase
  const fetchStartups = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("startups")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setStartups(data);
      setFilteredStartups(data);
    }

    setLoading(false);
  }, []);

  // Run once when app loads
  useEffect(() => {
    fetchStartups();
  }, [fetchStartups]);

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredStartups(startups);
      return;
    }

    const q = query.toLowerCase();

    const filtered = startups.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      s.founder_name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );

    setFilteredStartups(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <Navbar onPitchClick={() => setShowPitchModal(true)} />

      <main className="flex-1">
        <HeroSection onSearch={handleSearch} />

        <StartupList
          startups={filteredStartups}
          loading={loading}
          searchQuery={searchQuery}
        />
      </main>

      <Footer />

      {showPitchModal && (
        <PitchModal
          onClose={() => setShowPitchModal(false)}
          onSuccess={fetchStartups}
        />
      )}
      
    </div>
  );
}

export default App;