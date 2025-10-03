import React from 'react';
import { WorkItem } from '../types/work';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

interface WorkCardProps {
  work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const getPlatformColor = (platform: string) => {
    const colors: { [key: string]: string } = {
      'Skabash': 'bg-blue-100 text-blue-800',
      'Pulse Sports': 'bg-red-100 text-red-800',
      'Amaka Studio': 'bg-purple-100 text-purple-800',
      'Punch Newspaper': 'bg-orange-100 text-orange-800',
      'Twitter/X': 'bg-black text-white',
      'Clippings.me': 'bg-green-100 text-green-800'
    };
    return colors[platform] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {work.imageUrl ? (
          <img 
            src={work.imageUrl} 
            alt={work.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl">
              {work.category === 'writing' && '📝'}
              {work.category === 'content' && '🎬'}
              {work.category === 'social' && '📱'}
              {work.category === 'portfolio' && '💼'}
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPlatformColor(work.platform)}`}>
            {work.platform}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {work.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
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
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Work
        </a>
      </div>
    </div>
  );
};

export default WorkCard;