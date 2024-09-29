# Modular Zarqa Tables

Zarqa tables are the classic tools used to learn to leyn (read) from the Hebrew Bible. The words of the hebrew bible are assigned notes (taamim) and the word chanted to the tune of the note. Typically the zarqa tables are learned by rote and used by the student when learning a particular hebrew text.

These modular zarqa tables create an interactive version of these tables - the table is displayed on screen and plays the note when pressed. The note changes colour to indicate which one is being played.
Inspiratation for this project came from the book 'The Music of the Hebrew Bible and the Western Ashkenazic Chant Tradition' by Victor Tunkel (ISBN-10 0-9531104-8-6) which includes sheet music for each zarqa table.

The code builds a zarqa table for each of these books using a image of the zarqa table, audio of each of the notes (ogg, mp3 and wav formats for compatibility) and a config file. This makes building many zarqa tables easier than hand coding each one.

## The different Zarqa Tables

Since different books of the hebrew bible have different notes, there is a different zarqa table for different books. The zarqa tables here are:
1. Torah
2. Haftarah
3. Rosh Hashanah and Yom Kippur
4. Shir Hashirim, Ruth and Koheles
5. Eichah
6. Esther

## Config file

The first four lines of the config file set details of the image of the zarqa table measured in pixels: image_width, image_height, line_height and rollover_distance (i.e. distance between the top black image and the bottom blue image).
The rest of the config file sets the notes of each line of the zarqa table along with a pixel distance from the edge of the image.

## File Permissions

Must make sure that that audio files (and folder) on the server have permissions that allow anyone access.

## License

GNU General Public License v3.0 or later

See [COPYING](COPYING) to see the full text.
