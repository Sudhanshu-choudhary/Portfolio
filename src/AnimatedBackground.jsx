const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden -z-10">
      {/* Blob 1 */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-700 rounded-full filter blur-2xl opacity-50 animate-blob"/>
      {/* Blob 2 */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-700 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-2000"/>
      {/* Blob 3 */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-700 rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-4000"/>
    </div>
  )
}

export default AnimatedBackground
