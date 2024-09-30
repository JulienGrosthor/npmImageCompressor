import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

// Fonction asynchrone pour compresser les images WEBP
async function compressImages() {
    try {
        const files = await imagemin(['images/*.webp'], {
            destination: 'build/images', // Dossier de destination des images optimisées
            plugins: [
                imageminPngquant({
                    quality: [0.6, 0.8], // Qualité minimale et maximale
                    speed: 10,           // Vitesse d'optimisation (plus rapide, moins de qualité)
                    strip: true,         // Supprimer les métadonnées
                    dithering: 0.8       // Dithering (niveau de bruit)
                })
            ]
        });

        console.log(`Images optimisées : ${files.length} fichier(s) traité(s).`);
    } catch (error) {
        console.error('Erreur lors de la compression des images :', error);
    }
}

// Appeler la fonction de compression
compressImages();
