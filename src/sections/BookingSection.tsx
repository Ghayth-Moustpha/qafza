import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const availableTimeSlots = [
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "2:00 PM - 2:30 PM",
  "3:00 PM - 3:30 PM",
];

const BookingSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlot && selectedDate && name && email) {
      setIsBooked(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Schedule a Meeting
        </h2>

        {!isBooked ? (
          <form onSubmit={handleSubmit}>
            {/* Name and Email Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Date Picker with full-width dropdown */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Select a Date:
              </label>
              <div className="relative w-full">
              <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-lg font-bold mb-4">Select a Day</h2>
      <div className="flex justify-between items-center mb-4">
        <button>&lt;</button>
        <p>September 2024</p>
        <button>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {/* Render day numbers, just as an example */}
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`text-center py-1 ${
              day === 29
                ? "bg-blue-200 rounded-full font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="font-medium">Time zone</p>
        <p className="text-gray-500">Lebanon Time (12:47)</p>
      </div>
    </div>
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Select a Time Slot:
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {availableTimeSlots.map((slot) => (
                  <div key={slot}>
                    <input
                      type="radio"
                      id={slot}
                      name="time-slot"
                      value={slot}
                      onChange={() => setSelectedSlot(slot)}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={slot}
                      className={`block p-4 border rounded-lg cursor-pointer text-center ${
                        selectedSlot === slot
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300"
                      } peer-checked:border-blue-600 peer-checked:bg-blue-50`}
                    >
                      {slot}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600">
              Meeting Confirmed!
            </h3>
            <p className="text-gray-600">
              {`Your meeting is scheduled on ${format(
                selectedDate as Date,
                "MMMM d, yyyy"
              )} at ${selectedSlot}.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSection;
