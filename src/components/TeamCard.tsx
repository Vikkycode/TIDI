import Image from 'next/image';

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
  };
  isSelected: boolean; 
  onClick: () => void; 
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden transition-transform duration-300 ease-in-out
        ${isSelected ? 'scale-105 ring-2 ring-blue-500' : 'hover:scale-105'}
      `}
    >
      {/* Image */}
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={400} // Adjust as needed
        height={300} // Adjust as needed
        className="object-cover h-[300px] w-full"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center 
          opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out
          ${isSelected && 'opacity-100'}
        `}
      >
        <h3 className="text-xl font-bold text-white text-center mb-2">
          {member.name}
        </h3>
        <p className="text-gray-300 text-center">{member.role}</p>
      </div>
    </button>
  );
};

export default TeamMemberCard;
