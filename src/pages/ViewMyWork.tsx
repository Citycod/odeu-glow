import  { useState, useMemo } from 'react';
import { workItems, workCategories } from '../data/workData';
import WorkCard from '../components/WorkCard';
import CategoryFilter from '../components/CategoryFilter';
import { Search, Filter, Globe } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ViewMyWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWork = useMemo(() => {
    return workItems.filter((work) => {
      const matchesCategory = selectedCategory ? work.category === selectedCategory : true;
      const matchesSearch = work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          work.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          work.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
         <div className="mb-7">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-8 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">My Work</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my published work, content creations, and professional portfolio across various platforms
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search work by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={workCategories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-gray-600">
            <Filter className="w-4 h-4 mr-2" />
            <span>{filteredWork.length} projects found</span>
          </div>
        </div>

        {/* Work Grid */}
        {filteredWork.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWork.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No work found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Interested in collaborating?{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-700 font-medium">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewMyWork;