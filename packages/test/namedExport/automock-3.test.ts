import { SoundPlayer } from "./sound-player";
import { SoundPlayerConsumer } from "./sound-player-consumer";

jest.mock("./sound-player");
const SoundPlayerMock = jest.mocked(SoundPlayer);

test("player", () => {
  const mockPlaySoundFile = jest.fn();
  SoundPlayerMock.mockImplementation(() => {
    return {
      playSoundFile: mockPlaySoundFile,
    };
  });

  const soundPlayerConsumer = new SoundPlayerConsumer();

  expect(SoundPlayerMock).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
