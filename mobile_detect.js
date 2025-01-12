/* *******************************************
// Copyright 2010, Anthony Hand
//
// File version date: September 30, 2010
//
// LICENSE INFORMATION
// Licensed under the Apache License, Version 2.0 (the "License"); 
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at 
//        http://www.apache.org/licenses/LICENSE-2.0 
// Unless required by applicable law or agreed to in writing, 
// software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
// either express or implied. See the License for the specific 
// language governing permissions and limitations under the License. 
//
// http://code.google.com/p/mobileesp/
//
// *******************************************
*/

var isIphone=false;var isTierIphone=false;var isTierRichCss=false;var isTierGenericMobile=false;var engineWebKit="webkit";var deviceAndroid="android";var deviceIphone="iphone";var deviceIpod="ipod";var deviceIpad="ipad";var deviceMacPpc="macintosh";var deviceNuvifone="nuvifone";var deviceSymbian="symbian";var deviceS60="series60";var deviceS70="series70";var deviceS80="series80";var deviceS90="series90";var deviceWinPhone7="windows phone os 7";var deviceWinMob="windows ce";var deviceWindows="windows";var deviceIeMob="iemobile";var devicePpc="ppc";var enginePie="wm5 pie";var deviceBB="blackberry";var vndRIM="vnd.rim";var deviceBBStorm="blackberry95";var deviceBBBold="blackberry97";var deviceBBTour="blackberry96";var deviceBBCurve="blackberry89";var deviceBBTorch="blackberry 98";var devicePalm="palm";var deviceWebOS="webos";var engineBlazer="blazer";var engineXiino="xiino";var deviceKindle="kindle";var vndwap="vnd.wap";var wml="wml";var deviceBrew="brew";var deviceDanger="danger";var deviceHiptop="hiptop";var devicePlaystation="playstation";var deviceNintendoDs="nitro";var deviceNintendo="nintendo";var deviceWii="wii";var deviceXbox="xbox";var deviceArchos="archos";var engineOpera="opera";var engineNetfront="netfront";var engineUpBrowser="up.browser";var engineOpenWeb="openweb";var deviceMidp="midp";var uplink="up.link";var engineTelecaQ='teleca q';var devicePda="pda";var mini="mini";var mobile="mobile";var mobi="mobi";var maemo="maemo";var maemoTablet="tablet";var linux="linux";var qtembedded="qt embedded";var mylocom2="com2";var manuSonyEricsson="sonyericsson";var manuericsson="ericsson";var manuSamsung1="sec-sgh";var manuSony="sony";var manuHtc="htc";var svcDocomo="docomo";var svcKddi="kddi";var svcVodafone="vodafone";var disUpdate="update";var uagent=navigator.userAgent.toLowerCase();function DetectIphone()
{if(uagent.search(deviceIphone)>-1)
{if(DetectIpad()||DetectIpod())
return false;else
return true;}
else
return false;}
function DetectIpod()
{if(uagent.search(deviceIpod)>-1)
return true;else
return false;}
function DetectIpad()
{if(uagent.search(deviceIpad)>-1&&DetectWebkit())
return true;else
return false;}
function DetectIphoneOrIpod()
{if(uagent.search(deviceIphone)>-1||uagent.search(deviceIpod)>-1)
return true;else
return false;}
function DetectAndroid()
{if(uagent.search(deviceAndroid)>-1)
return true;else
return false;}
function DetectAndroidWebKit()
{if(DetectAndroid()&&DetectWebkit())
return true;else
return false;}
function DetectWebkit()
{if(uagent.search(engineWebKit)>-1)
return true;else
return false;}
function DetectS60OssBrowser()
{if(DetectWebkit())
{if((uagent.search(deviceS60)>-1||uagent.search(deviceSymbian)>-1))
return true;else
return false;}
else
return false;}
function DetectSymbianOS()
{if(uagent.search(deviceSymbian)>-1||uagent.search(deviceS60)>-1||uagent.search(deviceS70)>-1||uagent.search(deviceS80)>-1||uagent.search(deviceS90)>-1)
return true;else
return false;}
function DetectWindowsPhone7()
{if(uagent.search(deviceWinPhone7)>-1)
return true;else
return false;}
function DetectWindowsMobile()
{if(DetectWindowsPhone7())
return false;if(uagent.search(deviceWinMob)>-1||uagent.search(deviceIeMob)>-1||uagent.search(enginePie)>-1)
return true;if((uagent.search(devicePpc)>-1)&&!(uagent.search(deviceMacPpc)>-1))
return true;if(uagent.search(manuHtc)>-1&&uagent.search(deviceWindows)>-1)
return true;else
return false;}
function DetectBlackBerry()
{if(uagent.search(deviceBB)>-1)
return true;if(uagent.search(vndRIM)>-1)
return true;else
return false;}
function DetectBlackBerryWebKit()
{if(uagent.search(deviceBB)>-1&&uagent.search(engineWebKit)>-1)
return true;else
return false;}
function DetectBlackBerryTouch()
{if((uagent.search(deviceBBStorm)>-1)||(uagent.search(deviceBBTorch)>-1))
return true;else
return false;}
function DetectBlackBerryHigh()
{if(DetectBlackBerryWebKit())
return false;if(DetectBlackBerry())
{if(DetectBlackBerryTouch()||uagent.search(deviceBBBold)>-1||uagent.search(deviceBBTour)>-1||uagent.search(deviceBBCurve)>-1)
return true;else
return false;}
else
return false;}
function DetectBlackBerryLow()
{if(DetectBlackBerry())
{if(DetectBlackBerryHigh())
return false;else
return true;}
else
return false;}
function DetectPalmOS()
{if(uagent.search(devicePalm)>-1||uagent.search(engineBlazer)>-1||uagent.search(engineXiino)>-1)
{if(DetectPalmWebOS())
return false;else
return true;}
else
return false;}
function DetectPalmWebOS()
{if(uagent.search(deviceWebOS)>-1)
return true;else
return false;}
function DetectGarminNuvifone()
{if(uagent.search(deviceNuvifone)>-1)
return true;else
return false;}
function DetectSmartphone()
{if(DetectIphoneOrIpod())
return true;if(DetectS60OssBrowser())
return true;if(DetectSymbianOS())
return true;if(DetectWindowsMobile())
return true;if(DetectWindowsPhone7())
return true;if(DetectAndroid())
return true;if(DetectBlackBerry())
return true;if(DetectPalmWebOS())
return true;if(DetectPalmOS())
return true;if(DetectGarminNuvifone())
return true;return false;};function DetectArchos()
{if(uagent.search(deviceArchos)>-1)
return true;else
return false;}
function DetectBrewDevice()
{if(uagent.search(deviceBrew)>-1)
return true;else
return false;}
function DetectDangerHiptop()
{if(uagent.search(deviceDanger)>-1||uagent.search(deviceHiptop)>-1)
return true;else
return false;}
function DetectMaemoTablet()
{if(uagent.search(maemo)>-1)
return true;if(uagent.search(maemoTablet)>-1&&uagent.search(linux)>-1)
return true;else
return false;}
function DetectSonyMylo()
{if(uagent.search(manuSony)>-1)
{if(uagent.search(qtembedded)>-1||uagent.search(mylocom2)>-1)
return true;else
return false;}
else
return false;}
function DetectOperaMobile()
{if(uagent.search(engineOpera)>-1)
{if(uagent.search(mini)>-1||uagent.search(mobi)>-1)
return true;else
return false;}
else
return false;}
function DetectSonyPlaystation()
{if(uagent.search(devicePlaystation)>-1)
return true;else
return false;};function DetectNintendo()
{if(uagent.search(deviceNintendo)>-1||uagent.search(deviceWii)>-1||uagent.search(deviceNintendoDs)>-1)
return true;else
return false;};function DetectXbox()
{if(uagent.search(deviceXbox)>-1)
return true;else
return false;};function DetectGameConsole()
{if(DetectSonyPlaystation())
return true;if(DetectNintendo())
return true;if(DetectXbox())
return true;else
return false;};function DetectKindle()
{if(uagent.search(deviceKindle)>-1)
return true;else
return false;}
function DetectMobileQuick()
{if(DetectIpad())
return false;if(DetectSmartphone())
return true;if(uagent.search(deviceMidp)>-1||DetectBrewDevice())
return true;if(DetectOperaMobile())
return true;if(uagent.search(engineNetfront)>-1)
return true;if(uagent.search(engineUpBrowser)>-1)
return true;if(uagent.search(engineOpenWeb)>-1)
return true;if(DetectDangerHiptop())
return true;if(DetectMaemoTablet())
return true;if(DetectArchos())
return true;if((uagent.search(devicePda)>-1)&&(uagent.search(disUpdate)<0))
return true;if(uagent.search(mobile)>-1)
return true;if(DetectKindle())
return true;return false;};function DetectMobileLong()
{if(DetectMobileQuick())
return true;if(DetectGameConsole())
return true;if(DetectSonyMylo())
return true;if(uagent.search(manuSamsung1)>-1||uagent.search(manuSonyEricsson)>-1||uagent.search(manuericsson)>-1)
return true;if(uagent.search(svcDocomo)>-1)
return true;if(uagent.search(svcKddi)>-1)
return true;if(uagent.search(svcVodafone)>-1)
return true;return false;};function DetectTierIphone()
{if(DetectIphoneOrIpod())
return true;if(DetectAndroid())
return true;if(DetectAndroidWebKit())
return true;if(DetectWindowsPhone7())
return true;if(DetectBlackBerryWebKit())
return true;if(DetectPalmWebOS())
return true;if(DetectGarminNuvifone())
return true;if(DetectMaemoTablet())
return true;else
return false;};function DetectTierRichCss()
{if(DetectMobileQuick())
{if(DetectTierIphone())
return false;if(DetectWebkit())
return true;if(DetectS60OssBrowser())
return true;if(DetectBlackBerryHigh())
return true;if(DetectWindowsMobile())
return true;if(uagent.search(engineTelecaQ)>-1)
return true;else
return false;}
else
return false;};function DetectTierOtherPhones()
{if(DetectMobileLong())
{if(DetectTierIphone())
return false;if(DetectTierRichCss())
return false;else
return true;}
else
return false;};
