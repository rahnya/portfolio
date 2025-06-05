import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Here you would normally send the data to your backend
      console.log('Form data:', formData);
      
      // Simulate submission
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {submitted && (
        <div className="mb-6 p-3 bg-primary/10 text-primary rounded-md">
          Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-navy mb-2">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.name ? 'border-secondary' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-secondary">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-navy mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.email ? 'border-secondary' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-secondary">{errors.email}</p>}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-navy mb-2">Sujet</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.subject ? 'border-secondary' : 'border-gray-300'
          }`}
        />
        {errors.subject && <p className="mt-1 text-sm text-secondary">{errors.subject}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-navy mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.message ? 'border-secondary' : 'border-gray-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-secondary">{errors.message}</p>}
      </div>
      
      <div className="text-right">
        <Button type="submit" variant="secondary">
          Envoyer
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;