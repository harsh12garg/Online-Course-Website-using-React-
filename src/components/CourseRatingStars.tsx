
import { Star } from "lucide-react";

interface CourseRatingStarsProps {
  rating: number;
  showNumber?: boolean;
  size?: number;
}

const CourseRatingStars = ({ rating, showNumber = true, size = 16 }: CourseRatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="text-yellow-500 fill-current" size={size} />
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <Star className="text-gray-300 fill-current" size={size} />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="text-yellow-500 fill-current" size={size} />
          </div>
        </div>
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="text-gray-300" size={size} />
      ))}
      
      {showNumber && (
        <span className="text-sm font-medium ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default CourseRatingStars;
