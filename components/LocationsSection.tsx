import React from "react";
import { LOCATIONS } from "../constants";

const MAP_URLS: Record<string, string> = {
  l1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629472382101!5m2!1sen!2sus",
  l2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5264353746617!2d-74.00845368459635!3d40.70582547933261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5c204!2sWall%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629472506821!5m2!1sen!2sus",
};

const LocationsSection: React.FC = () => {
  const activeLocation = LOCATIONS[0];

  return (
    <section id="locations" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Find Us
          </h4>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Our Boutique
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Spliting Layout between map and info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left: Google Maps Embed */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] bg-[#1a1a1a] w-full">
            <iframe
              src={MAP_URLS[activeLocation.id] || MAP_URLS["l1"]}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(92%) contrast(83%)",
              }}
              allowFullScreen={true}
              loading="lazy"
              title="Location Map"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Map Overlay Gradient for better integration */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          </div>

          {/* Right: Info Details */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-white mb-2">
              {activeLocation.name}
            </h3>
            <div className="w-12 h-[2px] bg-[#D4AF37] mb-8"></div>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <h5 className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                  ADDRESS
                </h5>
                <p className="text-white text-lg font-bold leading-relaxed">
                  {activeLocation.address}
                </p>
              </div>

              {/* Hours */}
              <div>
                <h5 className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                  OPENING HOURS
                </h5>
                <p className="text-gray-400">
                  <span className="block mb-1">Mon - Sun</span>
                  <span className="text-white text-lg">
                    {activeLocation.hours}
                  </span>
                </p>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/?text=Hello D'Cika, I would like to inquire about...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-6 py-3.5 rounded text-xs font-bold tracking-widest uppercase transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:hello@dcikapatisserie.com`}
                  className="flex items-center justify-center space-x-2 border border-white/20 hover:bg-white hover:text-black text-white px-6 py-3.5 rounded text-xs font-bold tracking-widest uppercase transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
