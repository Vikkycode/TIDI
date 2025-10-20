// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { useState } from "react";


// interface Testimonial {
//   quote: string;
//   name: string;
//   designation: string;
//   videoUrl: string; // URL to the video testimonial
//   poster?:string; // Placeholder Image URL
// }

// export function AnimatedTestimonialsDemo() {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);



//   const testimonials: Testimonial[] = [
//     // ... your testimonial data with video URLs ...
//         {
//       quote:
//         "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//       name: "Sarah Chen",
//       designation: "Product Manager at TechFlow",
//       videoUrl: "/testimonials/sarah.mp4", // Example video URL
//       poster: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Michael Rodriguez",
//       designation: "CTO at InnovateSphere",
//       videoUrl: "/testimonials/Micheal.mp4", // Example video URL
//       poster: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   const handleVideoClick = (videoUrl: string) => {
//     if (selectedVideo === videoUrl && isPlaying) {
//       // If same video is clicked while playing, pause it
//       setIsPlaying(false);
//     } else {
//       setSelectedVideo(videoUrl);
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Testimonials</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 md:px-0">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="relative rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105">
//             <div className="w-full h-64 md:h-72" onClick={() => handleVideoClick(testimonial.videoUrl)}>
//               {selectedVideo === testimonial.videoUrl ? (
//                 <video
//                   src={testimonial.videoUrl}
//                   autoPlay={isPlaying}
//                   controls
//                   className="w-full h-full object-cover rounded-t-lg" // Apply rounded corners to the top
//                   onPause={() => setIsPlaying(false)}
//                   onEnded={() => setIsPlaying(false)}
//                 />
//               ) : (
//                 <img src={testimonial.poster || ''} alt={testimonial.name} className="w-full h-full object-cover cursor-pointer rounded-t-lg"/>
//               )}


//             </div>
//             <div className="p-6">
//               <blockquote className="text-gray-700 text-lg mb-4">"{testimonial.quote}"</blockquote>
//               <footer className="text-gray-800">
//                 <cite className="font-bold">{testimonial.name}</cite>, {testimonial.designation}
//               </footer>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

