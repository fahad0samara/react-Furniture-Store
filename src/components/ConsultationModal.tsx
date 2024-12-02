import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function ConsultationModal() {
  const {
    isConsultationModalOpen,
    toggleConsultationModal,
    consultationSlots,
    selectedSlot,
    setSelectedSlot,
  } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlot) {
      toast.success('Consultation booked successfully!');
      toggleConsultationModal();
      setSelectedSlot(null);
    }
  };

  return (
    <AnimatePresence>
      {isConsultationModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={toggleConsultationModal}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Book a Consultation</h2>
                <button onClick={toggleConsultationModal}>
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select a Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {consultationSlots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-lg text-sm ${
                            selectedSlot?.id === slot.id
                              ? 'bg-black text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          <div>{format(new Date(slot.date), 'MMM d')}</div>
                          <div>{slot.time}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedSlot}
                    className="w-full bg-black text-white py-3 rounded-lg disabled:bg-gray-400"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}