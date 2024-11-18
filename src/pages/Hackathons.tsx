import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import HackathonCard from "../components/HackathonCard";

const Hackathons = () => {
  const [hackathons, setHackathons] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [prize, setPrize] = useState("");
  const [participants, setParticipants] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fetchDataFromLocalhost = async () => {
    try {
      const response = await fetch("http://localhost:8080/hackathons");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setHackathons(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchDataFromLocalhost();
  }, []);

  // Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const postDataToLocalhost = async (eventData: any) => {
    try {
      const response = await fetch("http://localhost:8080/hackathons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to add event");
      }

      const data = await response.json();
      console.log("Event added successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in POST request:", error);
      throw error;
    }
  };

  const addEvent = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !date || !prize || !participants || !image) {
      alert("All fields, including the image, must be filled out.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("prize", prize);
    formData.append("participants", participants);
    formData.append("image", image);

    const eventData = {
      title,
      date,
      prize,
      participants,
      image: imagePreview,
    };

    try {
      const updatedHackathons = await postDataToLocalhost(eventData);
      setHackathons(updatedHackathons);
      setTitle("");
      setDate("");
      setPrize("");
      setParticipants("");
      setImage(null);
      setImagePreview(null);
      fetchDataFromLocalhost();
    } catch (error) {
      console.error("Error while submitting form:", error);
      alert("Error while submitting the form");
    }
    setOpen(false);
  };

  const Refresh = () => {
    useEffect(() => {
      fetchDataFromLocalhost();
    }, []);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PageHeader
          title="Hackathons"
          description="Participate in exciting hackathons and showcase your skills"
        />
        <button onClick={() => fetchDataFromLocalhost()}>
          Fetch Hackathons
        </button>

        {hackathons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <HackathonCard
                key={index}
                title={hackathon.title}
                date={hackathon.date}
                prize={hackathon.prize}
                participants={hackathon.participants}
                image={hackathon.image}
              />
            ))}
          </div>
        ) : (
          <p>No hackathons found</p>
        )}
        <div className="max-w-2xl mx-auto px-4 py-8">
          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-6"
          >
            Click to Add Event
          </button>

          {open && (
            <form
              className="bg-white p-6 rounded-lg shadow-lg space-y-6"
              onSubmit={addEvent}
            >
              <h1 className="text-2xl font-semibold text-gray-800">
                Add Event
              </h1>

              {/* Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title:
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Prize Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Prize:
                </label>
                <input
                  type="text"
                  value={prize}
                  onChange={(e) => setPrize(e.target.value)}
                  required
                  className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Participants Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Participants:
                </label>
                <input
                  type="number"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  required
                  className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 text-black block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-xs mx-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                onClick={() => Refresh()}
                className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Add Event
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Hackathons;
