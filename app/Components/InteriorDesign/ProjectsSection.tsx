import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleProjectCard from "./SingleProjectCard";
import { Project } from "@/app/Types/Types";
import Link from "next/link";
// import Image from "next/image";
// import { images } from "@/app/(design)/design-projects/page";

export const projects: Project[] = [
  {
    id: 1,
    title: "AS",
    date: "2025",
    location: "Skopje",
    desc1:
      "Located in Skopje,North Macedonia the apartment is designed for a young married couple.",
    desc2:
      "It features a living-dining room and kitchen, bedroom,bathroom and balcony.This cozy 55 m² with its light, neutral color palette, the space feels open and airy, creating a warm and inviting atmosphere. The apartment features an open-plan living area that seamlessly blends the living room, dining space, and kitchen, making it perfect for sharing quality moments together.",
    gallery: [
      "/AS/1.jpg",
      "/AS/2.jpg",
      "/AS/3.jpg",
      "/AS/4.jpg",
      "/AS/5.jpg",
      "/AS/6.jpg",
      "/AS/7.jpg",
      "/AS/8.jpg",
      "/AS/9.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 2,
    title: "VH",
    date: "2024",
    location: "Gevgelija",
    desc1:
      "Located in Gevgelija,North Macedonia the apartment is designed for a young couple.",
    desc2:
      "It features an  living-dining room and kitchen, bedroom,bathroom and balcony.This cozy 79 m² with its light, neutral color palette, the space feels open and airy, creating a warm and inviting atmosphere. The apartment features an open-plan living area that seamlessly blends the living room, dining space, and kitchen, making it perfect for sharing quality moments together.",
    gallery: [
      "/VH/IMG3.jpg",
      "/VH/IMG4.jpg",
      "/VH/IMG5.jpg",
      "/VH/IMG6.jpg",
      "/VH/IMG7.jpg",
      "/VH/IMG8.jpg",
      "/VH/IMG9.jpg",
      "/VH/IMG12.jpg",
      "/VH/kancelarija.jpg",
      "/VH/kancelarija1.jpg",
      "/VH/kujna5.jpg",
      "/VH/office1.jpg",
      "/VH/OFFICE3.jpg",
      "/VH/toalet2.jpg",
      "/VH/toalet.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 3,
    title: "BA",
    date: "2024",
    location: "Gevgelija",
    desc1:
      "The 15 m² boy’s room in Gevgelija is designed with a modern yet cozy feel, offering a functional and comfortable space. The walls are painted in light, neutral colors such as soft beige or light grey, which makes the room feel airy and spacious.",
    desc2:
      "A large, comfortable grey bean bag is placed in the corner, providing a laid-back spot for relaxation or reading. Its soft, plush texture contrasts nicely with the room's clean lines and minimalist aesthetic. The bean bag is a perfect touch for the boy's space, offering flexibility for lounging or entertaining friends.",

    desc3:
      "The room features wood-textured accents, which could be present in the flooring or a feature wall. The wood texture adds warmth to the space, creating a balanced contrast with the light color scheme. A wood-textured bed frame, shelves, or even a desk could further enhance the natural, calming vibe, while ensuring the room remains functional.",

    gallery: [
      "/BA/biro2.jpg",
      "/BA/blagojasoba3.jpg",
      "/BA/blagojasoba4.jpg",
      "/BA/blagojasoba1.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 4,
    title: "BABY",
    date: "2025",
    location: "Stip",
    desc1:
      "The 15 m² baby room in Stip is designed to create a serene and inviting space, perfect for both relaxation and play. The room is painted in soft, light colors such as pastel tones of beige, light grey, or a soft off-white, creating a calming atmosphere ideal for a baby’s room. These gentle hues help make the room feel open and spacious, perfect for a growing baby.",

    gallery: [
      "/BABY/deckasoba1.jpg",
      "/BABY/deckasoba2.jpg",
      "/BABY/deckasoba3.jpg",
      "/BABY/deckasoba4.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 5,
    title: "MP",
    date: "2025",
    location: "Stip",
    desc1:
      "The 15 m² MP room in Stip is designed to create a serene and inviting space, perfect for both relaxation and play. The room is painted in soft, light colors such as pastel tones of beige, light grey, or a soft off-white, creating a calming atmosphere ideal for a MP’s room. These gentle hues help make the room feel open and spacious, perfect for a growing MP.",

    gallery: [
      "/MP/dnevnasoba1.jpg",
      "/MP/dnevnasoba2.jpg",
      "/MP/dnevnasoba3.jpg",
      "/MP/KUJNA4OBR.jpg",
      "/MP/renderkujnaobraboten.jpg",
      "/MP/spalnasoba3obr.jpg",
      "/MP/spalnasoba4.jpg",
      "/MP/spalnasoba6.jpg",
      "/MP/spalnasoba1.jpg",
      "/MP/spalnasoba2.jpg",
      "/MP/toalet.jpg",
      "/MP/toalet2.jpg",
      "/MP/toalet3obr.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 6,
    title: "AN",
    date: "2024",
    location: "Prilep",
    desc1:
      "The 18 m² room for a 10-year-old girl in Prilep is a fun and vibrant space with a perfect blend of pink and blue tones. The walls are painted in soft pastel shades , with one feature wall possibly incorporating a playful pattern. ",
    desc2:
      "The room includes a cozy bed, a small desk for studying, and playful accessories like a rug, cushions, and wall art that reflect her interests. Light wood furniture adds warmth and balance, while natural light floods the space, creating an airy, cheerful atmosphere. It’s a room designed for creativity, relaxation, and fun!",

    gallery: [
      "/AN/img9.jpg",
      "/AN/img10.jpg",
      "/AN/img11.jpg",
      "/AN/img12.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 7,
    title: "RN",
    date: "2024",
    location: "Prilep",
    desc1:
      "The 8 m² room for a 13-year-old boy in Prilep is a stylish and functional space, designed with a modern, youthful feel. The room features a bold blue bed as the focal point, adding a pop of color to the otherwise neutral tone",
    desc2:
      " One wall is adorned with a sleek grey wall panel, creating a sophisticated and contemporary backdrop. The desk and wardrobe are designed with a natural wood texture, adding warmth and balance to the space. The compact layout ensures a practical flow, while the combination of blue, grey, and wood accents gives the room a cool, inviting vibe.",

    gallery: [
      "/RN/img6.jpg",
      "/RN/img7.jpg",
      "/RN/img8.jpg",
    ],
    bgClass: "cover",
  },
  {
    id: 8,
    title: "B10",
    date: "2021",
    location: "Gevgelija",
    desc1:
      "Located in Gevgelija,North Macedonia the apartment is designed for family. The apartment includes two bathrooms, both designed with neutral tones and modern finishes, providing convenience and style",
    desc2:
      "This 98 m² apartment in Gevgelija is the perfect weekend retreat for a family from Skopje. The living room is designed in warm cream and brown tones, creating a cozy and inviting atmosphere. Light wood furniture complements the color palette, giving the space a modern, yet comfortable vibe. The open-plan layout seamlessly integrates the living room with the kitchen and dining area, featuring a dining table that’s perfect for family meals.",
    gallery: [
      "/B10/STANIMG1.jpg",
      "/B10/STANIMG2.jpg",
      "/B10/STANIMG3.jpg",
      "/B10/STANIMG4.jpg",
      "/B10/STANIMG5.jpg",
      "/B10/STANIMG6.jpg",
      "/B10/STANIMG7.jpg",
      "/B10/STANIMG8.jpg",
      "/B10/STANIMG9.jpg",
      "/B10/STANIMG10.jpg",
      "/B10/STANIMG11.jpg",
      "/B10/STANIMG12.jpg",
      "/B10/STANIMG13.jpg",
      "/B10/STANIMG14.jpg",
      "/B10/STANIMG15.jpg",
      "/B10/STANIMG16.jpg",
      "/B10/STANIMG17.jpg",
      "/B10/STANIMG18.jpg",
      "/B10/STANIMG19.jpg",
      "/B10/STANIMG20.jpg",
      "/B10/STANIMG21.jpg",
      "/B10/STANIMG23.jpg",
      "/B10/STANIMG26.jpg",
      "/B10/IMG0.jpg",

    ],
    bgClass: "cover",
  },
  {
    id: 9,
    title: "HAIR SALON",
    date: "2024",
    location: "Gevgelija",
    desc1:
      "The hair salon in Gevgelija spans 46 m² and features a modern and inviting interior. Upon entering, you'll be greeted by a soft and airy atmosphere, with light-colored pink sofas creating a warm and comfortable seating area for customers. These pink sofas add a touch of elegance and comfort, offering a cozy spot to relax while waiting for a service.",
    desc2:
      "The walls are adorned with a unique texture design, featuring a subtle flower pattern. The textured wall adds depth and visual interest, with the floral design softly enhancing the space without overpowering it. The combination of the soft pink tones and floral textures creates a serene and feminine ambiance.",
      desc3: 'The layout of the salon is open and well-organized, making the most of the 46 m² space. There are designated stations for hair styling, with mirrors and modern chairs that complement the overall design. The lighting is bright and well-placed, ensuring that the space feels airy and welcoming. The overall vibe is fresh, contemporary, and relaxing, offering a comfortable space for both clients and stylists to enjoy.',
    gallery: [
      "/HAIRSALON/render1.jpg",
      "/HAIRSALON/render2.jpg",
      "/HAIRSALON/render3.jpg",
      "/HAIRSALON/render4.jpg",
    ],
    bgClass: "cover",
  },
];

const ProjectsSection = () => {
  return (
    <section className="defPadding w-[90%] m-auto ">
      <SectionTitle text="Projects" />

      <div className="mt-[15vh]">
        {projects.map((project, idx: number) => (
          <SingleProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-[15vh]">
        <Link
          href={"/design-projects"}
          className="bg-main-dark text-white text-xl tracking-tighter py-4 px-6 m-auto font-bold uppercase hover:scale-105 transition ease-in-out drop-shadow-lg"
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
