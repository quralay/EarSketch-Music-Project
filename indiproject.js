// description: 
// most frequent sounds
setTempo(100);
var maincalmguitar = AK_UNDOG_ACOUSTIC_GUITAR_1;
var knock = HOUSE_ACOUSTIC_PIANO_003;
var stringsofguitar = RD_RNB_ACOUSTIC_NYLONSTRING_1;
var transition = RD_RNB_ACOUSTIC_NYLONSTRING_6;
var slowcalm = RD_UK_HOUSE_ACOUSTICGUITAR_2;
var addition = RD_UK_HOUSE_ACOUSTICGUITAR_11;
var kick = OS_KICK05; // This is the "boom" sound.
var snare = OS_SNARE01; // This is the "cat" sound.
var hihat = OS_CLOSEDHAT01; // This is the "ts" sound.
//a section
function intro(track){
    fitMedia(maincalmguitar, 1, 1, 6);
    fitMedia(AK_UNDOG_CLAPS_SNAPS_1, 2, 1, 6);
    setEffect(2, PAN, LEFT_RIGHT, -50);
    setEffect(3, VOLUME, GAIN, -20, 1, 0, 20); 
    setEffect(3, REVERB, REVERB_TIME, 1000.0);
}
// Rock beat on measure 1
function makeMyDrumBeat(measure){
    makeBeat(kick, 1, measure, "0+++----0+++----");
    makeBeat(snare, 2, measure, "----0+++----0+++");
    makeBeat(hihat, 3, measure, "0+0+0+0+0+0+0+0+");
}
// b section
function verse1(track){
    fitMedia(YG_WEST_COAST_HIP_HOP_HIHAT_5, 4, 6, 12);
    fitMedia(CIARA_MELANIN_DRUMBEAT_1, 5, 7, 14); //differing
    fitMedia(COMMON_LOVE_DRUMBEAT_1, 8, 7, 14); //action
    setTempo(110, 10, 110, 16);
    for (var i=14; i<=20; i=i+1){
    println(i)
    makeMyDrumBeat(i)
}
}
// repetition
function chorus(track){
    fitMedia(YG_WEST_COAST_HIP_HOP_HIHAT_5, 13, 19, 24);
    fitMedia(IRCA_PLENA_2_BAJO_A_MIXO, 12, 14, 20);
    fitMedia(YG_POP_KICK_1, 14, 19, 26);    
}
function end(track){
    fitMedia(RD_RNB_OTHERPERCUSSIONBEAT_16, 19, 27, 43);
    fitMedia(AK_UNDOG_PERC_DRUMS, 20, 22, 30);
    fitMedia(KHALID_NORM_PERC_HIHAT_1, 21, 16, 25);
    setEffect(1, VOLUME, GAIN, -5.0);
    setEffect(1, REVERB, REVERB_TIME, 1000.0);
}
for (var i=25; i<= 27; i++){
  if( i % 4 ==1 ){
    fitMedia(COMMON_LOVE_DRUMBEAT_1, 4,  i, i+1);
  }
  else if ( i % 4 == 3){
    fitMedia(HIPHOP_DUSTYGROOVE_002, 4,  i, i+1); 
  }
  else{
    fitMedia(COMMON_LOVE_DRUMBEAT_1, 4, i, i+1); 
  }
}
for (var i=30; i<= 41; i++){
  if( i % 4 ==1 ){
    fitMedia(AK_UNDOG_BASS_3, 4,  i, i+1);
  }
  else if ( i % 4 == 3){
    fitMedia(AK_UNDOG_BASS_1, 4,  i, i+1); 
  }
  else{
    fitMedia(AK_UNDOG_BASS_2, 4, i, i+1); 
  }
}
intro(1);
verse1(2);
chorus(3);
end(4);