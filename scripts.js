/*
 *    Modular zarqa tables. Learn to leyn, note by note, using interactive zarqa tables
 *    Copyright (C) 2011 Benjamin Levine
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

mobile = (DetectTierIphone()||DetectTierRichCss()||DetectTierOtherPhones());
support = !!(document.createElement('audio').canPlayType);

if(support){
	method = "html5";
	audio = new Audio("");
	ogg_support = audio.canPlayType("audio/ogg");
	mp3_support = audio.canPlayType("audio/mpeg");
	wav_support = audio.canPlayType("audio/vnd.wave");
	/*
    if(ogg_support == "probably")
		type = "ogg";
	else if(mp3_support == "probably")
		type = "mp3";
	else if(wav_support == "probably")
		type = "wav";
	else if(ogg_support == "maybe")
		type = "ogg";
	else if(mp3_support == "maybe")
		type = "mp3";
	else if(wav_support == "maybe")
		type = "wav";
	else if(ogg_support != "no" && ogg_support != "")
		type = "ogg";
	else if(mp3_support != "no" && mp3_support != "")
		type = "mp3";
	else if(wav_support != "no" && wav_support != "")
		type = "wav";
	else {
		type = "mp3";
		support = false;
	}*/
	if(ogg_support != "no" && ogg_support != "")
		type = "ogg";
	else if(wav_support != "no" && wav_support != "")
		type = "wav";
    else if(mp3_support != "no" && mp3_support != "")
		type = "mp3";
	else {
		type = "mp3";
		support = false;
	}
    //alert(type);
	clips=[];
} else {
	support = false;
	type = "mp3";
}

function play(zarqa,sound) {
	if(support){
        //Chromium will not play mp3 files. It will play ogg and wav files
        //type="ogg"
		if(!clips[sound]) clips[sound] = new Audio(type+'/'+zarqa+'/'+sound+'.'+type);
		clips[sound].play();
	}else{
		if(mobile) {
			window.location = type+'/'+zarqa+'/'+sound+'.'+type;
		} else {
		document.getElementById("object").innerHTML = '<object classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" type="audio/mpeg" data="mp3/'+zarqa+'/'+sound+'.mp3"><param name="src" value="mp3/'+zarqa+'/'+sound+'.mp3"><param name="autoplay" value="true"><param name="autoStart" value="1"><object classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" type="audio/x-wav" data="wav/'+zarqa+'/'+sound+'.wav"><param name="src" value="wav/'+zarqa+'/'+sound+'.wav"><param name="autoplay" value="true"><param name="autoStart" value="1"><script type="text/javascript" language="javascript"><object type="audio/mpeg" data="mp3/'+zarqa+'/'+sound+'.mp3"><param name="src" value="mp3/'+zarqa+'/'+sound+'.mp3"><param name="autoplay" value="true"><param name="autoStart" value="1"><object type="audio/ogg" data="ogg/'+zarqa+'/'+sound+'.ogg"><param name="src" value="ogg/'+zarqa+'/'+sound+'.ogg"><param name="autoplay" value="true"><param name="autoStart" value="1"><object type="audio/x-wav" data="wav/'+zarqa+'/'+sound+'.wav"><param name="src" value="wav/'+zarqa+'/'+sound+'.wav"><param name="autoplay" value="true"><param name="autoStart" value="1"><script type="text/javascript" language="javascript">window.location = type+"/"+zarqa+"/"sound+"."+type;</scr'+'ipt></object></object></object></object>';
		}
	}
}

