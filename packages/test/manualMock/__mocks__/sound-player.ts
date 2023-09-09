export const mockPlaySoundFile = jest.fn();
export const SoundPlayer = jest.fn().mockImplementation(() => {
  return { playSoundFile: mockPlaySoundFile };
});
