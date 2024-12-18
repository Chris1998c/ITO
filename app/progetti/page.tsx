"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

// Definizione dei tipi per TypeScript
interface Media {
  type: "image" | "video";
  src: string;
}

interface Item {
  id: number;
  name: string;
  price: string;
  media: Media[]; // Array di immagini o video
  description?: string;
}

interface Category {
  id: number;
  name: string;
  items: Item[];
}

// Dati delle categorie con ID corretti
const categories: Category[] = [
  {
    id: 1,
    name: "ACCESSORI",
    items: [
      {
        id: 101,
        name: "Occhiali Da Sole",
        price: "€200",
        media: [
          { type: "image", src: "/OCCHIALI-DA-SOLE-M.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-1.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-2.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-3.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-4.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-5.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-6.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-7.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-8.jpg" },
          { type: "image", src: "/OCCHIALI-DA-SOLE-9.jpg" },
        ],
        description:
          "Un progetto di lusso per una villa moderna con ampie vetrate e design esclusivo.",
      },
    ],
  },
  {
    id: 2,
    name: "SEDIE",
    items: [
      {
        id: 201,
        name: "SEDIA EART",
        price: "€700",
        media: [
          { type: "image", src: "/SEDIA-EART-M.jpg" },
          { type: "image", src: "/SEDIA-EART-1.jpg" },
          { type: "image", src: "/SEDIA-EART-2.jpg" },
          { type: "image", src: "/SEDIA-EART-3.jpg" },
        ],
        description:
          "Sedia ergonomica per ufficio, design moderno e confortevole.",
      },
      {
        id: 202,
        name: "Sedia Flower",
        price: "€700",
        media: [
          { type: "image", src: "/SEDIA-FLOWER-M.jpg" },
          { type: "image", src: "/SEDIA-FLOWER-1.jpg" },
          { type: "image", src: "/SEDIA-FLOWER-2.jpg" },
          { type: "image", src: "/SEDIA-FLOWER-3.jpg" },
        ],
        description:
          "Sedia ergonomica per ufficio, design moderno e confortevole.",
      },
      {
        id: 203,
        name: "Sedia Carina",
        price: "€900",
        media: [
          { type: "image", src: "/SEDIA-CARINA-M.jpg" },
          { type: "image", src: "/SEDIA-CARINA-1.jpg" },
          { type: "image", src: "/SEDIA-CARINA-2.jpg" },
          { type: "image", src: "/SEDIA-CARINA-3.jpg" },
          { type: "image", src: "/SEDIA-CARINA-4.jpg" },
          { type: "image", src: "/SEDIA-CARINA-5.jpg" },
          { type: "image", src: "/SEDIA-CARINA-6.jpg" },
          { type: "image", src: "/SEDIA-CARINA-7.jpg" },
          { type: "image", src: "/SEDIA-CARINA-D.jpg" },
        ],
        description:
          "Sedia ergonomica per ufficio, design moderno e confortevole.",
      },
    ],
  },
  {
    id: 3,
    name: "DIVANI E POLTRONE",
    items: [
      {
        id: 301,
        name: "Divano Black",
        price: "€1500",
        media: [
          { type: "image", src: "/DIVANO-BLACK-M.jpg" },
          { type: "image", src: "/DIVANO-BLACK-1.jpg" },
          { type: "image", src: "/DIVANO-BLACK-2.jpg" },
          { type: "image", src: "/DIVANO-BLACK-3.jpg" },
          { type: "image", src: "/DIVANO-BLACK-4.jpg" },
          { type: "image", src: "/DIVANO-BLACK-5.jpg" },
        ],
        description: "Divano elegante.",
      },
      {
        id: 302,
        name: "Divano Dubai",
        price: "€1800",
        media: [
          { type: "image", src: "/DIVANO-DUBAI-M.jpg" },
          { type: "image", src: "/DIVANO-DUBAI-1.jpg" },
          { type: "image", src: "/DIVANO-DUBAI-2.jpg" },
          { type: "image", src: "/DIVANO-DUBAI-3.jpg" },
          { type: "image", src: "/DIVANO-DUBAI-4.jpg" },
          { type: "image", src: "/DIVANO-DUBAI-5.jpg" },
        ],
        description: "Divano elegante e confortevole.",
      },
    ],
  },
  {
    id: 4,
    name: "OGGETTI PER LA CASA E CUCINA",
    items: [
      {
        id: 401,
        name: "Affumicatore",
        price: "€100",
        media: [
          { type: "image", src: "/AFFUMICATORE-401M.jpg" },
          { type: "image", src: "/AFFUMICATORE-401-1.jpg" },
          { type: "image", src: "/AFFUMICATORE-401-2.jpg" },
          { type: "image", src: "/AFFUMICATORE-401-3.jpg" },
        ],
        description:
          "Oggetti decorativi per dare un tocco vintage alla tua casa.",
      },
    ],
  },
  {
    id: 5,
    name: "TAVOLI",
    items: [
      {
        id: 501,
        name: "Tavolo Magnum",
        price: "€1200",
        media: [
          { type: "image", src: "/TAVOLO-MAGNUM-M.jpg" },
          { type: "image", src: "/TAVOLO-MAGNUM-1.jpg" },
          { type: "image", src: "/TAVOLO-MAGNUM-2.jpg" },
        ],
        description: "Tavolo artigianale.",
      },
      {
        id: 502,
        name: "Tavolo Deco",
        price: "€1500",
        media: [
          { type: "image", src: "/TAVOLO-DECO-M.jpg" },
          { type: "image", src: "/TAVOLO-DECO-1.jpg" },
          { type: "image", src: "/TAVOLO-DECO-2.jpg" },
          { type: "image", src: "/TAVOLO-DECO-3.jpg" },
          { type: "image", src: "/TAVOLO-DECO-4.jpg" },
          { type: "image", src: "/TAVOLO-DECO-5.jpg" },
          { type: "image", src: "/TAVOLO-DECO-6.jpg" },
          { type: "image", src: "/TAVOLO-DECO-7.jpg" },
          { type: "image", src: "/TAVOLO-DECO-D.jpg" },
        ],
        description: "Tavolo Deco.",
      },
    ],
  },
  {
    id: 6,
    name: "GIOIELLI",
    items: [
      {
        id: 601,
        name: "Anello Castle",
        price: "€800",
        media: [
          { type: "image", src: "/ANELLO-CASTLE-M.jpg" },
          { type: "image", src: "/ANELLO-CASTLE-1.jpg" },
          { type: "image", src: "/ANELLO-CASTLE-2.jpg" },
        ],
        description: "Bracciale realizzato in oro artigianale.",
      },
      {
        id: 602,
        name: "Anello Celtico",
        price: "€1500",
        media: [
          { type: "image", src: "/ANELLO-CELTICO-M.jpg" },
          { type: "image", src: "/ANELLO-CELTICO-1.jpg" },
          { type: "image", src: "/ANELLO-CELTICO-2.jpg" },
        ],
        description: "ANELLO  artigianale.",
      },
      {
        id: 603,
        name: "Anello Mappamondo",
        price: "€500",
        media: [
          { type: "image", src: "/ANELLO-MAPPAMONDO-5.jpg" },
          { type: "image", src: "/ANELLO-MAPPAMONDO-1.jpg" },
          { type: "image", src: "/ANELLO-MAPPAMONDO-2.jpg" },
          { type: "image", src: "/ANELLO-MAPPAMONDO-3.jpg" },
          { type: "image", src: "/ANELLO-MAPPAMONDO-4.jpg" },
          { type: "image", src: "/ANELLO-MAPPAMONDO-M.jpg" },
        ],
        description: "ANELLO  artigianale.",
      },
      {
        id: 604,
        name: "Anello Triangolo",
        price: "€900",
        media: [
          { type: "image", src: "/ANELLO-TRIANGOLO-M.jpg" },
          { type: "image", src: "/ANELLO-TRIANGOLO-1.jpg" },
        ],
        description: "ANELLO  artigianale.",
      },
    ],
  },
  {
    id: 7,
    name: "BORSE E VALIGIE",
    items: [
      {
        id: 701,
        name: "Valigia Premium",
        price: "€1500",
        media: [
          { type: "image", src: "/borsa1.jpg" },
          { type: "video", src: "/videos/valigia1.mp4" },
        ],
        description: "Valigia premium per viaggi eleganti.",
      },
    ],
  },
  {
    id: 8,
    name: "LAMPADE",
    items: [
      {
        id: 801,
        name: "Lampada Da Tavolo",
        price: "€400",
        media: [
          { type: "image", src: "/LAMPADA-DA-TAVOLO-M.jpg" },
          { type: "image", src: "/LAMPADA-DA-TAVOLO-1.jpg" },
          { type: "image", src: "/LAMPADA-DA-TAVOLO-2.jpg" },
          { type: "image", src: "/LAMPADA-DA-TAVOLO-3.jpg" },
          { type: "image", src: "/LAMPADA-DA-TAVOLO-4.jpg" },
          { type: "video", src: "/LAMPADA-DA-TAVOLO.mp4" },
        ],
        description: "Lampada moderna per ambienti minimalisti.",
      },
    ],
  },
  {
    id: 9,
    name: "PAKAGING",
    items: [
      {
        id: 901,
        name: "Confezione Regalo",
        price: "€50",
        media: [
          { type: "image", src: "/pakaging1.jpg" },
          { type: "video", src: "/videos/pakaging.mp4" },
        ],
        description: "Confezione regalo personalizzabile.",
      },
    ],
  },
  {
    id: 10,
    name: "STOVIGLIE",
    items: [
      {
        id: 1001,
        name: "Posate Wire",
        price: "€300",
        media: [
          { type: "image", src: "/POSATERIA-W-M.jpg" },
          { type: "image", src: "/POSATERIA-W-1.jpg" },
          { type: "image", src: "/POSATERIA-W-2.jpg" },
          { type: "image", src: "/POSATERIA-W-3.jpg" },
          { type: "image", src: "/POSATERIA-W-4.jpg" },
          { type: "image", src: "/POSATERIA-W-5.jpg" },
          { type: "image", src: "/POSATERIA-W-6.jpg" },
          { type: "image", src: "/POSATERIA-W-7.jpg" },
          { type: "image", src: "/POSATERIA-W-8.jpg" },
          { type: "image", src: "/POSATERIA-W-9.jpg" },
          { type: "image", src: "/POSATERIA-W-10.jpg" },
        ],
        description: "Set completo di piatti artigianali.",
      },
    ],
  },
  {
    id: 11,
    name: "BARCHE",
    items: [
      {
        id: 1101,
        name: "Yacht di Lusso",
        price: "€1,000,000",
        media: [
          { type: "image", src: "/yacht1.jpg" },
          { type: "video", src: "/videos/yacht.mp4" },
        ],
        description: "Yacht di lusso per viaggi esclusivi.",
      },
    ],
  },
  {
    id: 12,
    name: "HARDWARE DESIGN",
    items: [
      {
        id: 1201,
        name: "PC Custom",
        price: "€2500",
        media: [
          { type: "image", src: "/pc-custom.jpg" },
          { type: "video", src: "/videos/pc-custom.mp4" },
        ],
        description: "PC personalizzato per performance elevate.",
      },
    ],
  },
];

export default function ProgettiPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Configurazione del carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">I Miei Progetti</h1>
      <p className="mb-6">
        Seleziona una categoria per esplorare i nostri progetti.
      </p>

      {/* Menu a tendina */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg">
          Scegli una categoria
        </Menu.Button>
        <Menu.Items className="absolute left-0 mt-2 w-56 bg-gray-900 text-white rounded-lg shadow-lg">
          {categories.map((category) => (
            <Menu.Item key={category.id}>
              {({ active }) => (
                <a
                  href={`#category-${category.id}`}
                  className={`block px-4 py-2 ${active ? "bg-teal-500" : ""}`}
                >
                  {category.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      {/* Card layout */}
      {categories.map((category) => (
        <div key={category.id} id={`category-${category.id}`} className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl"
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.media[0].src}
                  alt={item.name}
                  width={400}
                  height={300}
                  quality={100}
                  className="object-contain w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modale con carosello */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div
            className="bg-gray-900 text-white rounded-lg shadow-2xl p-4 relative flex flex-col"
            style={{ maxWidth: "840px", maxHeight: "630px" }}
          >
            {/* Pulsante di chiusura */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Carosello con immagini e video */}
            <Slider {...settings} className="relative w-full h-full">
              {selectedItem.media.map((media, index) => (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center"
                >
                  {media.type === "video" ? (
                    <video controls className="w-full h-full object-contain">
                      <source src={media.src} type="video/mp4" />
                      Il tuo browser non supporta il formato video.
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt={`${selectedItem.name} - ${index + 1}`}
                      width={1024}
                      height={768}
                      quality={100}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
              ))}
            </Slider>

            {/* Dettagli del progetto */}
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
              <p className="text-gray-400 mt-2">{selectedItem.description}</p>
              <p className="text-teal-500 mt-4 font-semibold text-xl">
                {selectedItem.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
