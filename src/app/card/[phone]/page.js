'use client';

import React from 'react';
import { Phone, Globe, Briefcase, Download, MapPin } from 'lucide-react';

export default function UserProfile({ params }) {
  // 1. Unwrap the Promise (Next.js 15 Requirement)
  const resolvedParams = React.use(params); 
  const phoneNumber = resolvedParams.phone;

  // 🟢 YOUR REAL DATA (Hardcoded for immediate launch)
  const userData = {
    name: "Atta Ur Rehman",
    designation: "Advocate High Court",
    company: "LawOrbits Legal Services",
    website: "https://laworbits.com",
    email: "atta.rehman4@gmail.com",
    phone: phoneNumber, // Keeps the number from the URL
    address: "District Courts, Mandi Bahauddin",
    
    // 🟢 YOUR PHOTO (Using your GitHub profile pic as a smart placeholder)
    // You can replace this link with any public image URL later
    photoUrl: "https://github.com/atta808.png", 
    
    // 🟢 YOUR SOCIAL LINKS
    socials: {
      facebook: "https://www.facebook.com/share/1ByNocGV6k/",
      tiktok: "https://tiktok.com/@technaam",
      instagram: "https://instagram.com", // Update when you have the link
      linkedin: "https://linkedin.com",   // Update when you have the link
      x: "https://x.com",                 // Update when you have the link
      whatsapp: `https://wa.me/${phoneNumber.replace('+', '')}`,
    }
  };

  const handleDownloadVCF = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${userData.name}
ORG:${userData.company}
TITLE:${userData.designation}
TEL;TYPE=CELL:${userData.phone}
EMAIL:${userData.email}
URL:${userData.website}
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${userData.name}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      
      <div className="w-full max-w-md bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-36 flex items-center justify-center">
           <h1 className="text-white font-bold text-3xl tracking-[0.3em] opacity-20">TECHNAAM</h1>
        </div>

        {/* Profile Image */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-white flex items-center justify-center shadow-xl overflow-hidden">
               {/* 🟢 Displays your Photo */}
               <img 
                 src={userData.photoUrl} 
                 alt="Profile" 
                 className="w-full h-full object-cover"
                 onError={(e) => {e.target.src='https://ui-avatars.com/api/?name=Atta+Ur+Rehman&background=0D8ABC&color=fff&size=128'}} 
               />
            </div>
        </div>

        {/* Info Section */}
        <div className="pt-20 pb-8 px-6 text-center mt-2">
          <h2 className="text-2xl font-bold text-white tracking-wide">{userData.name}</h2>
          <p className="text-cyan-400 font-medium text-sm uppercase tracking-wider mt-1">{userData.designation}</p>
          <p className="text-slate-400 text-sm mt-2">{userData.company}</p>
          
          <div className="flex items-center justify-center gap-2 mt-2 text-slate-500 text-xs">
            <MapPin size={14} />
            <span>{userData.address}</span>
          </div>

          {/* SOCIAL MEDIA GRID */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-6">
            {userData.socials.facebook && <SocialIcon platform="facebook" link={userData.socials.facebook} color="#1877F2" />}
            {userData.socials.tiktok && <SocialIcon platform="tiktok" link={userData.socials.tiktok} color="#000000" border />}
            {userData.socials.whatsapp && <SocialIcon platform="whatsapp" link={userData.socials.whatsapp} color="#25D366" />}
            
            {/* Show these only if links exist */}
            <SocialIcon platform="instagram" link={userData.socials.instagram} color="#E4405F" />
            <SocialIcon platform="linkedin" link={userData.socials.linkedin} color="#0A66C2" />
            <SocialIcon platform="x" link={userData.socials.x} color="#000000" border />
          </div>

          {/* Main Actions */}
          <div className="space-y-3">
            <a href={`tel:${userData.phone}`} className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all font-semibold shadow-lg shadow-blue-900/20">
              <Phone size={20} />
              Call Now
            </a>

            <div className="grid grid-cols-2 gap-3">
                <a href={userData.website} target="_blank" className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl transition-all border border-slate-600 font-medium text-sm">
                <Globe size={18} />
                Website
                </a>

                <button 
                onClick={handleDownloadVCF}
                className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl transition-all border border-slate-600 font-medium text-sm"
                >
                <Download size={18} />
                Save VCF
                </button>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950 p-4 text-center border-t border-slate-800">
          <p className="text-slate-600 text-xs">Powered by TechNaam Identity</p>
        </div>

      </div>
    </div>
  );
}

// 🟢 Reusable Social Icon Component
function SocialIcon({ platform, link, color, border }) {
  const icons = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M16.5 6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z M7.8 2C6.5 2 5.5 2.1 4.6 2.5a5.1 5.1 0 0 0-1.9 1.9C2.2 5.3 2 6.4 2 7.8v8.4c0 1.4.2 2.5.6 3.4a5.1 5.1 0 0 0 1.9 1.9c.9.4 2 .6 3.4.6h8.4c1.4 0 2.5-.2 3.4-.6a5.1 5.1 0 0 0 1.9-1.9c.4-.9.6-2 .6-3.4V7.8c0-1.4-.2-2.5-.6-3.4a5.1 5.1 0 0 0-1.9-1.9C19 2.2 18 2 16.6 2h-8.4z" />,
    linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />,
    x: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
    tiktok: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9" />,
    whatsapp: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-3 rounded-full bg-white hover:scale-110 transition-transform shadow-md flex items-center justify-center ${border ? 'border border-slate-300' : ''}`}
      style={{ color: color }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={platform === 'x' || platform === 'facebook' || platform === 'linkedin' ? 'currentColor' : 'none'} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {icons[platform]}
      </svg>
    </a>
  );
}