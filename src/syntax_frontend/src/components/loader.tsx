interface LoadingProps {
  isLoading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading = false }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-75">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default Loading;
