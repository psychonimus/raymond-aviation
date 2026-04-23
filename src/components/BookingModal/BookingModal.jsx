import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, MapPin, Users, Phone, Mail, User } from 'lucide-react';
import './BookingModal.css';
import { useModal } from '../../context/ModalContext';

const BookingModal = () => {
    const { isBookingModalOpen, closeBookingModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        from: '',
        to: '',
        passengers: '',
        date: '',
        time: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here (e.g., API call)
        alert('Request sent successfully!');
        closeBookingModal();
    };

    return (
        <AnimatePresence>
            {isBookingModalOpen && (
                <div className="booking-modal-overlay">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={closeBookingModal}
                    />
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="booking-modal-content"
                    >
                        <button className="close-btn" onClick={closeBookingModal}>
                            <X size={24} />
                        </button>
                        
                        <div className="modal-header">
                            <h2>Request a Quote</h2>
                            {/* <p>Quick booking for your next flight.</p> */}
                        </div>

                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-grid">
                                <div className="form-group span-2">
                                    <label><User size={14} /> Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="John Doe" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label><Mail size={14} /> Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="john@example.com" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><Phone size={14} /> Phone</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="+1 234..." 
                                        required 
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={14} /> From</label>
                                    <input 
                                        type="text" 
                                        name="from" 
                                        placeholder="Origin" 
                                        required 
                                        value={formData.from}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><MapPin size={14} /> To</label>
                                    <input 
                                        type="text" 
                                        name="to" 
                                        placeholder="Destination" 
                                        required 
                                        value={formData.to}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><Users size={14} /> Passengers</label>
                                    <input 
                                        type="number" 
                                        name="passengers" 
                                        placeholder="Count" 
                                        required 
                                        value={formData.passengers}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><Calendar size={14} /> Date</label>
                                    <input 
                                        type="date" 
                                        name="date" 
                                        required 
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><Clock size={14} /> Time</label>
                                    <input 
                                        type="time" 
                                        name="time" 
                                        required 
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group span-3">
                                    <label>Special Requirements</label>
                                    <textarea 
                                        name="description" 
                                        placeholder="Any preferences..." 
                                        rows="2"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Quote Request <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
