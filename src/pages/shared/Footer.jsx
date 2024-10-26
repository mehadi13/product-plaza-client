import { Separator } from "@/components/ui/separator";
import { Facebook, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import logo from "../../assets/logo.gif"

const Footer = () => {
  return (
    <footer className="bg-slate-300">
      <Separator className="my-6 bg-slate-400" />
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-gray-800 text-gray-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Address Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Our Address</h4>
            <span className="md:block text-center">1234 Buying St. </span>
            <span className="md:block text-center">Product City, 56789</span>
            <p className="text-center">Bangladesh</p>
          </div>

          {/* Contact Details Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Contact Us</h4>
            <p>Email: support@pp.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>

          {/* Social Links Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-6" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Product Plaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
