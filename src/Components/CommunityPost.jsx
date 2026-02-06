import React from "react";

const artists = [
  {
    id: 1,
    name: "Rafiqul Karim",
    image: "https://i.ibb.co.com/VWHG31YZ/dream-machinery.jpg",
    description:
      "Dream Machinery empowers artists to turn imagination into reality. We provide innovative tools, collaborative spaces, and resources that inspire creativity and skill growth. By connecting creators, showcasing talent, and fostering artistic collaboration, we help artists elevate their craft and share their visionary work with the world.",
  },
  {
    id: 2,
    name: "Maruf Hassan",
    image: "https://i.ibb.co.com/p6rYN7KQ/depth-of-silence.jpg",
    description:
      "Depth of Silence captures the profound stillness of the human experience. Through subtle tones and minimalistic forms, the artwork evokes introspection, calm, and emotional depth. Every detail invites viewers to pause, reflect, and connect with the unspoken narratives that reside within silence, creating a meditative artistic journey.",
  },
  {
    id: 3,
    name: "Tahia Chowdhury",
    image:
      "https://i.ibb.co.com/RG2dZgXP/Commissioning-Watch-Art-Matthew-Miller-Studio-Art.jpg",
    description:
      "While Salvador Dalí’s surrealist “melting watch” paintings are amongst the 20th century’s best known artworks, a search for current day artists specialising in the figurative depictions of watches generates barely a handful of names, though most of whom show their works on Instagram. This is the story of my first commission, a graphic of the Voutilainen GMT-6.",
  },
];
const CommunityPost = () => {
  return (
    <section className="community-highlight py-10 bg-base-400">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Community Highlights</h2>
        <p className="mb-7">
          Discover and connect with our amazing community of artists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="artist-card bg-base-300 rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-80 h-40 mx-auto object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold">{artist.name}</h3>
              <p className="text-sm leading-relaxed">{artist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPost;
