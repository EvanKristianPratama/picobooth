import React, { useState } from 'react';
import { X, Calendar, MapPin, Mail, User, Phone, CheckCircle2, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    location: '',
    printMode: 'Both 4R & Thermal Receipt'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-xl rounded-3xl p-8 border border-[#34d399]/30 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#34d399]/20 text-[#34d399] flex items-center justify-center mx-auto border border-[#34d399]/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-syne font-bold text-white">Booking Request Received!</h3>
            <p className="text-white/70 text-sm max-w-md mx-auto">
              Thank you, {formData.name}. Our event concierge team will reach out to confirm your date ({formData.date}) and custom overlay setup within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#34d399] text-[#050807] font-bold text-sm hover:bg-white transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#34d399] uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Reserve Pico Booth
              </span>
              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                Book Pico Strips For Your Event
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-white/70 mb-1 block">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#34d399] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/70 mb-1 block">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#34d399] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-white/70 mb-1 block">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c1510] border border-white/10 text-white text-sm focus:border-[#34d399] focus:outline-none"
                  >
                    <option value="Wedding">Wedding Celebration</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Corporate">Corporate Brand Activation</option>
                    <option value="Gala">Private Gala / Concert</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-white/70 mb-1 block">Event Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                    <input
                      required
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#34d399] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-white/70 mb-1 block">Venue City / Location</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                  <input
                    required
                    type="text"
                    placeholder="Jakarta / Bali / Grand Ballroom"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-[#34d399] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#34d399] text-[#050807] font-bold text-base hover:bg-white transition-all duration-300 shadow-xl shadow-[#34d399]/20"
              >
                Submit Booking Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
