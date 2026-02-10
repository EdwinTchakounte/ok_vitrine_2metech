const InstallationVideoCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Vidéo d’installation du kit
        </h2>
        <p className="text-gray-500">
          Guide visuel destiné à nos partenaires d’installation
        </p>
      </div>

      {/* Video */}
      <div className="aspect-video rounded-xl overflow-hidden border">
        <iframe
          src="https://www.youtube.com/embed/SXeX896I3aw"
          title="Vidéo d'installation du kit"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Info */}
      <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm p-3 rounded-lg">
        <span>ℹ️</span>
        <p>
          Cette vidéo ne contient pas de son.  
          Une description détaillée est affichée en bas de la vidéo pour expliquer chaque étape.
        </p>
      </div>

    </div>
  );
};

export default InstallationVideoCard;