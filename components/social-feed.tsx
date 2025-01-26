import Image from "next/image";

const images = [
  "/F1.jpg", // Replace these with your actual image paths
  "/F2.jpg",
  "/F3.jpg",
  "/F5.jpg",
  "/F6.jpg",
  "/F4.jpg",
  "/F7.jpg",
  "/F8.jpg",
];

export function SocialFeed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-gray-600">Share your setup with</p>
          <h2 className="text-3xl font-bold">HijabStyleCollection</h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden"> {/* Fixed size */}
              <Image
                src={src}
                alt={`Community shared image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


