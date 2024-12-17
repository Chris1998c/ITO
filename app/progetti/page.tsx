"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

// Definizione dei tipi per TypeScript (opzionale se usi .tsx)
interface Item {
  id: number;
  name: string;
  price: string;
  images: string[]; // Array di immagini per il carosello
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
    name: "MOBILI",
    items: [
      {
        id: 101,
        name: "Villa Moderna",
        price: "€2000",
        images: [
          "/images.jpg",
          "/images.jpg",
          "/images.jpg",
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
        name: "MODELLO 45-",
        price: "€500",
        images: ["/sediamod45.jpg", "/mod45-2.jpg", "/mod45-6.jpg"],
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
        name: "Divano Relax",
        price: "€1500",
        images: ["/mod45-2.jpg", "/mod45-6.jpg"],
        description: "Divano elegante e confortevole per il tuo salotto.",
      },
    ],
  },
  {
    id: 4,
    name: "OGGETTI PER LA CASA",
    items: [
      {
        id: 401,
        name: "Decorazioni Vintage",
        price: "€100",
        images: ["/progetti/decorazioni1.jpg", "/progetti/decorazioni2.jpg"],
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
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 6,
    name: "GIOIELLI",
    items: [
      {
        id: 601,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 7,
    name: "BORSE E VALIGIE",
    items: [
      {
        id: 701,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 8,
    name: "LAMPADE",
    items: [
      {
        id: 801,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 9,
    name: "PAKAGING",
    items: [
      {
        id: 901,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 10,
    name: "STOVIGLIE",
    items: [
      {
        id: 1001,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 11,
    name: "BARCHE",
    items: [
      {
        id: 1101,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
  {
    id: 12,
    name: "HARDWARE DESIGN",
    items: [
      {
        id: 1201,
        name: "Tavolo in Legno",
        price: "€1200",
        images: ["/progetti/tavolo1.jpg", "/progetti/tavolo2.jpg"],
        description: "Tavolo artigianale in legno massello.",
      },
    ],
  },
];

export default function ProgettiPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Configurazione del carosello (slick)
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
                {/* MINIATURA (400×300) */}
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={400}
                  height={300}
                  quality={100}
                  unoptimized={true}
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
            style={{
              maxWidth: "840px",
              maxHeight: "630px",
              overflow: "auto", // Scorrimento se l'immagine è troppo grande
            }}
          >
            {/* Pulsante di chiusura */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Carosello delle immagini */}
            <div className="w-full h-full flex items-center justify-center">
              <Slider {...settings} className="relative w-full h-full">
                {selectedItem.images.map((img, index) => (
                  <div
                  key={index} 
                  className="w-[1024px] h-[768px] flex items-center justify-center">
                    <Image
                      src={img}
                      alt={`${selectedItem.name} - ${index + 1}`}
                      width={1024}
                      height={768}
                      quality={100}
                      unoptimized={true}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>

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
