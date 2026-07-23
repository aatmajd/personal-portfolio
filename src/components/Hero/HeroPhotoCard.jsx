import profileImage from "../../assets/images/profile1.jpeg";

function HeroPhotoCard() {
  return (
    <div className="relative max-w-[280px] mx-auto">

    {/* Glow */}

    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
    <div className="bg-gray-900/80 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 shadow-2xl">
      <img
        src={profileImage}
        alt="Aatmaj Deshpande"
        className="w-full rounded-2xl object-cover"
      />

    </div> </div>
  );
}

export default HeroPhotoCard;