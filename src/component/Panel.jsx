export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl mb-4">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {isActive ? (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <p className="text-gray-700 leading-relaxed text-base">{children}</p>
        </div>
      ) : (
        <div className="p-5 flex justify-center">
          <button
            onClick={onActive}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Show
          </button>
        </div>
      )}
    </section>
  );
}