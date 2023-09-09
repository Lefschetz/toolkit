import * as Sound_Player from "./sound-player";
import { SoundPlayerConsumer } from "./sound-player-consumer";
import * as Mock_Sound_Player from "./__mocks__/sound-player";

const { SoundPlayer, mockPlaySoundFile } =
  Sound_Player as unknown as typeof Mock_Sound_Player;
jest.mock("./sound-player");
const SoundPlayerMock = jest.mocked(SoundPlayer);

test("player", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();

  expect(SoundPlayerMock).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
