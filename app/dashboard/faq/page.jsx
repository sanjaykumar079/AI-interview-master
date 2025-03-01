import React from 'react';

const profiles = [
  {
    name: "Sanjay kumar",
    tagline: "Full Stack Developer",
    image: "/pic.jpg"
  },
  {
    name: "syed peer",
    tagline: "Frontend Developer",
    image: "/syed.jpg"
  },
  {
    name: "Sai Alekhya",
    tagline: "ML Engineer",
    image: "/sai.jpg"
  },
  {
    name: "Sneha sanjana",
    tagline: "Python develper",
    image: "/sneha.jpg"
  }
];

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="rounded-lg border-2 border-gray-900 bg-card text-card-foreground shadow-sm w-full max-w-md dark:bg-gray-950"
        >
          <div className="space-y-1.5 bg-gray-900 dark:bg-gray-800 p-6 flex flex-col items-center gap-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-20 h-20">
              <img className="aspect-square h-full w-full object-contain" alt={profile.name} src={profile.image} />
            </span>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="text-gray-300">{profile.tagline}</p>
            </div>
          </div>
          
        </div>
        
      ))}
    </div>
    
  );
};

export default Page;
