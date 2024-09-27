export const AudioTransformer = async (audioBuffer: { data: number[] }) => {
  // Convertir el array de datos en un Uint8Array
  const byteArray = new Uint8Array(audioBuffer.data);

  // Crear un Blob con el array de bytes
  const audioBlob = new Blob([byteArray], { type: 'audio/mpeg' });  // Cambia el tipo según tu formato de audio

  // Crear una URL de objeto para reproducir el Blob
  const audioUrl = URL.createObjectURL(audioBlob);

  console.log('URL de audio:', audioUrl);

  return audioUrl;
};