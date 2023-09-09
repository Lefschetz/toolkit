import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

const mockPlaySoundFile = jest
  .spyOn(SoundPlayer.prototype, "playSoundFile")
  .mockImplementation(() => {
    console.log("mocked function");
  });

test("player", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
