REM Reorder the channels in a 5.1 audio file from SMPTE to Film standard
REM L-R-C-LFE-Ls-Rs to L-C-R-LS-RS-LFE
REM usage: smpte-to-film <input_file>

REM Check the license information at
REM https://github.com/adam-sporka/game-audio-bytes

ffmpeg -i %1 -filter_complex "channelsplit=channel_layout=5.1[FL][FR][FC][LFE][BL][BR]" ^
-map "[FL]" -acodec pcm_s24le -ac 1 01.wav ^
-map "[FR]" -acodec pcm_s24le -ac 1 03.wav ^
-map "[FC]" -acodec pcm_s24le -ac 1 02.wav ^
-map "[LFE]" -acodec pcm_s24le -ac 1 06.wav ^
-map "[BL]" -acodec pcm_s24le -ac 1 04.wav ^
-map "[BR]" -acodec pcm_s24le -ac 1 05.wav

ffmpeg ^
-i 01.wav ^
-i 02.wav ^
-i 03.wav ^
-i 04.wav ^
-i 05.wav ^
-i 06.wav ^
-filter_complex "[0:a][1:a][2:a][3:a][4:a][5:a]amerge=inputs=6[aout]" -map "[aout]" -acodec pcm_s24le LCRLsRsLFE__%1

del 01.wav
del 02.wav
del 03.wav
del 04.wav
del 05.wav
del 06.wav
