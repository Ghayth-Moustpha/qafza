import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading...');
    
    try {
      const response = await fetch('http://localhost:3000/consultations/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Consultation booked successfully!');
      } else {
        setStatus('Error booking consultation.');
      }
    } catch (error) {
      setStatus('Error booking consultation.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100" dir="rtl">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-4">احجز استشارتك المجانية </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">الاسم </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orchidPurple focus:border-orchidPurple"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">البريد الالكتروني </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orchidPurple focus:border-orchidPurple"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">رقم الهاتف </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orchidPurple focus:border-orchidPurple"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium">الموعد المطلوب </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orchidPurple focus:border-orchidPurple"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">رسالة  (اختياري)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orchidPurple focus:border-orchidPurple"
              rows="4"
            ></textarea>
          </div>
          <button
  type="submit"
  className="w-full bg-orchidPurple text-white p-2 rounded-md transition transform hover:scale-105"
>
  احجز الان
</button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default BookingPage;
