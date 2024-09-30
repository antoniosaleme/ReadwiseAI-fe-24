export const AudioTransformer = async (audioBuffer: { data: number[] }) => {

  const byteArray = new Uint8Array(audioBuffer.data);

  const audioBlob = new Blob([byteArray], { type: 'audio/mpeg' });

  const audioUrl = URL.createObjectURL(audioBlob);

  console.log('URL de audio:', audioUrl);

  return audioUrl;
};