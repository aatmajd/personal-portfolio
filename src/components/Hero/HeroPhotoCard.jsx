import profileImage from "../../assets/images/profile1.jpeg";

function HeroPhotoCard() {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 max-w-xs mx-auto">
      <img
        src={profileImage}
        alt="Aatmaj Deshpande"
        className="w-full rounded-xl"
      />

    </div>
  );
}

export default HeroPhotoCard;