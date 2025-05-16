function LevelCompleteModal({ message, onNext, isLast }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="border border-primary p-6 rounded-xl text-center shadow-xl text-primary">
        <p className="text-lg mb-4">{message}</p>

        {isLast ? (
          <>
            <p className=" text-secondary text-xl mb-4"> ¡Feliz primer aniversario! </p>
            <button
              onClick={onNext}
              className="mt-2 bg-third px-6 py-2 rounded-xl cursos-pointer hover:scale-110 transition-transform duration-300"
            >
              Pequeño repasito del año
            </button>
          </>
        ) : (
          <button
            onClick={onNext}
            className="mt-4 bg-third px-6 py-2 rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            Siguiente nivel
          </button>
        )}
      </div>
    </div>
  );
}

export default LevelCompleteModal;
