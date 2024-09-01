import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming you have a Card component from Shadcn UI

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string; // Not used in this component, but good to keep for consistency
    imageUrl: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isSelected, onClick }) => {
  return (
    <button onClick={onClick} className="relative">
      <Card 
        className={`transform transition duration-300 ease-in-out 
          ${isSelected ? 'ring-2 ring-blue-500' : 'hover:scale-105'}
        `}
      >
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400} 
          height={300} 
          className="object-cover h-[300px] w-full rounded-t-lg" // Apply rounded corners to the top
        />
        <CardContent className="flex flex-col items-center justify-center">
          <CardTitle className="text-xl font-bold text-gray-800">
            {member.name}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {member.role}
          </CardDescription>
        </CardContent>
      </Card>

      {/* Optional: Overlay (You might not need this with Shadcn UI) */}
      {/* <div
        className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center 
          opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out
          ${isSelected && 'opacity-100'}
        `}
      >
        <h3 className="text-xl font-bold text-white text-center mb-2">
          {member.name}
        </h3>
        <p className="text-gray-300 text-center">{member.role}</p>
      </div> */}
    </button>
  );
};

export default TeamMemberCard;
