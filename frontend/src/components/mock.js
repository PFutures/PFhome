// Mock data for Polymathic Futures website
// Data is loaded from content.json file for easy editing
import contentData from "../data/content.json";

// Export data from JSON file with proper formatting
export const mockMagazines = contentData.magazines.map((mag) => ({
  ...mag,
  coverImage: mag.cover_image, // Support both naming conventions
}));

export const mockTeamMembers = contentData.teamMembers;
export const mockServices = contentData.services;
export const consultationTypes = contentData.consultationTypes;

// Legacy testimonials (not in JSON yet, keeping for backward compatibility)
export const mockTestimonials = [
  {
    id: 1,
    quote:
      "Polymathic Futures didn't just show us the future - they made it tangible. Our 2040 magazine revealed three product lines we're now developing.",
    author: "Sarah Mitchell",
    company: "TechNova Industries",
    role: "Chief Innovation Officer",
  },
  {
    id: 2,
    quote:
      "The cross-industry insights were revolutionary. We discovered partnerships we never considered, opening entirely new revenue streams.",
    author: "Dr. James Rodriguez",
    company: "BioMaterials Corp",
    role: "VP of Strategic Development",
  },
  {
    id: 3,
    quote:
      "Their sci-fi prototyping workshop transformed how our team thinks. We're now building products our competitors can't even imagine.",
    author: "Lisa Chen",
    company: "Future Systems Ltd",
    role: "Head of R&D",
  },
];
