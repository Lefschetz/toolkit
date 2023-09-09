import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

jest.mock("./sound-player");
const SoundPlayerMock = jest.mocked(SoundPlayer);

test("player", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();

  expect(SoundPlayerMock).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = SoundPlayerMock.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;

  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
