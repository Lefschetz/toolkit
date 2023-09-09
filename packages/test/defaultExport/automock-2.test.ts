import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

const mockPlaySoundFile = jest.fn();
jest.mock("./sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
  });
});

test("player", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();

  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
