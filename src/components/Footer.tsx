import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter signup:', data);
      toast.success('Successfully subscribed to newsletter!');
      reset();
    } catch (error) {
      toast.error('Failed to subscribe');
    }
  };

  const links = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Careers', path: '#' },
      { label: 'Contact', path: '/contact' },
      { label: 'FAQ', path: '/faq' },
    ],
    services: [
      { label: 'Design Services', path: '/design-services' },
      { label: 'Custom Furniture', path: '#' },
      { label: 'Space Planning', path: '#' },
      { label: 'Installation', path: '#' },
      { label: 'Maintenance', path: '#' },
    ],
    support: [
      { label: 'Shipping', path: '#' },
      { label: 'Returns', path: '#' },
      { label: 'Warranty', path: '#' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
    ],
    social: [
      { icon: Instagram, label: 'Instagram', url: '#' },
      { icon: Facebook, label: 'Facebook', url: '#' },
      { icon: Twitter, label: 'Twitter', url: '#' },
      { icon: Linkedin, label: 'LinkedIn', url: '#' },
      { icon: Youtube, label: 'YouTube', url: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-2">Stay Connected</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for exclusive offers and design inspiration
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-serif mb-4 block">
              LUXE INTERIORS
            </Link>
            <p className="text-gray-400 mb-6">
              Crafting exceptional living spaces since 2014. Our commitment to quality and innovation
              has made us a leader in luxury furniture and interior design.
            </p>
            <div className="flex items-center space-x-4">
              {links.social.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3 text-gray-400" />
            <span className="text-gray-400">info@luxeinteriors.com</span>
          </div>
          <div className="text-gray-400">
            123 Design District, New York, NY 10001
          </div>
          <div className="text-gray-400">
            Mon - Sat: 10:00 AM - 7:00 PM
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Luxe Interiors. All rights reserved.
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}