import React, { useState } from 'react';
import { WorkItem } from '../types/work';
import { ExternalLink, Calendar, Tag, Image as ImageIcon } from 'lucide-react';

interface WorkCardProps {
  work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      'Skabash': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Pulse Sports': 'bg-red-100 text-red-800 border border-red-200',
      'Amaka Studio': 'bg-purple-100 text-purple-800 border border-purple-200',
      'Punch Newspaper': 'bg-orange-100 text-orange-800 border border-orange-200',
      'Twitter/X': 'bg-black text-white border border-gray-700',
      'Clippings.me': 'bg-green-100 text-green-800 border border-green-200'
    };
    return colors[platform] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'writing': '📝',
      'content': '🎬',
      'social': '📱',
      'portfolio': '💼'
    };
    return icons[category] || '📁';
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {work.imageUrl && !imageError ? (
          <>
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse text-gray-400">
                  <ImageIcon className="w-8 h-8" />
                </div>
              </div>
            )}
            <img 
              src={work.imageUrl} 
              alt={work.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              } group-hover:scale-105 transition-transform duration-500`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-4xl opacity-60">
              {getCategoryIcon(work.category)}
            </div>
          </div>
        )}
        
        {/* Platform Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPlatformColor(work.platform)}`}>
            {work.platform}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {work.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {work.description}
        </p>

        {/* Date */}
        {work.date && (
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{work.date}</span>
          </div>
        )}

        {/* Tags */}
        {work.tags && work.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {work.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {work.tags.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200">
                +{work.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 group-hover:shadow-lg"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Work
        </a>
      </div>
    </div>
  );
};

export default WorkCard;