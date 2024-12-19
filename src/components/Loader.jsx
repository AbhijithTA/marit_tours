

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
