<p>- Revision 1(pre Alpha): had user enabled placement of star systems and was using image layers as reference. Also rudimentary implementation of note textbox postboned to later releases. Storing data was a major issue without using server side components.</p>
<p>- Revision 2(pre Alpha): had fx added for star systems: plasma, corona, glow. Dropped fx due to continous issues with saving data. Using server side components is no option, but outsourcing data to Github to reference in the file is. This keeps file size relatively small.</p>
<p>- Revision 3(pre Alpha): first somewhat directional revision. Dev mode to create star systems during run time. Pre placed star systems placed. Outsourced all possible data to Github. This will render local storage enough, but make internet connection a necessity.</p>
<p>- Alpha 1(19.10.2023): static star icons, custom text box, local storage for text, star background anim, system anim, label toggle, testing phase ended, system iframe</p>
<p>- Alpha 2(20.10.2023): 
  - add real time watch
  - outsourced no longer needed mouse coordinates and fs toggle 
  - add general and hotkey description page div...no content...sorry, real life obligations
  - fixed non passive wheel scroll block
  - fixed default browser key block not working
  - outsourced prevent default function to .js, to enable use in all files<br>
Hotfix 1: reimplemented mouse coordinates. le douche forgot he was using it to define the text box</br></p>
<p>Alpha 3(23.10.2023): - add fx to star icons
- smooth out animation on star icons
- add starfield aesthetics and color tones
- add Orbitron font and style to use globaly
- moved button of the text editor box to the upside
- ctrl-hovering no longer auto opens the system and extended info boxes
- couple of tiny fixes and QoL improvements not worth mentioning because they're standard browser functions
- add starfield banner and icon</p>
<p>Alpha 4(26.10.2023): - add textures to celestial bodies
- minor propertie changes to all bodies due to texture addition etc.
- celestial bodies rotate around their own axis...well actually the texture does
- fixed saturn moons sharing same id
- create and add plasma like .gif for sun
- fixed missaligned orbit of mercury type planet
- moved system html to dedicated folder in preparation for individual star systems
- minor path and reference changes due to new structure
- button selection will now highlight on mouseover
- added style and dimensions to info screen
- toggle hotkey is now settings in preparation for ...well whatever the future holds
- add descriptive text to label
- add me importance to badass importance label...i shall become star!
- minor chanes to all code for new changes to mui importance and button logic
- hid mouse coordinate, only needed ofr background tracking
- initially hid system window as was planned
- moved back to use local files exclusively for performance reasons</p>
<p>Alpha 4 update 2(1.11.2023): - fixed extended info box staying open after confirming text entry
- extended info will open with shift now
- doubleclick icon function will not work with shift hold
- changed slash type to use correct varaint in all file instances
- increased size of system window and added text boxes to the left and right
- added x button to system window to close it
- added blur background to system iframe, to prevent interaction with starmap elements
- prevent pointer events in mostly all elements that should not have interaction on main map
- fixed swapped textures on jupiter moons
- added deimos and phobos type textures
- added celestial body images to system page for test system Vega
- added celestial body info to left systeminfo box(Vega)
- added celestial body info text to right systeminfo box(Vega)
- added function to to open starfield wiki on double click body in left info box(Vega)</p>
<p>Alpha 4 update 3(2.11.2023): - "finalized" sol setup
- "finalized" system script setup
- fixed star labels on main map not hiding on hover, when star labels are toggled off
- added a row of direct wiki link buttons to the main window(creatures, fauna, flora, resources, missios, weapons, spacesuits, packs, helmets, apparel)
- fixed wrong difficulty color on vega triangle</p>
<p>Alpha 5(9.11.2023): - couple small fixes
- added resource wheel and keyworded all systems...that infobase is still sketchy since wikis are still building
- added inara.cz to resource and mission tabs as alternative infobase
- enabled default F3 search function
- added first info stuff to setting page
- fixed error on hovering system iframe exit button
- added new alt-key interaction for star icons -> properties: discovered, settlement
- added city icons to systems with major settlements
- added outpost icon on the fly via toggle box</p>
<p>Alpha 6(23.11.2023):- added (100%)surveyed state(lime color) to alt-key interaction
- applied the propertie logic to all star icons
- added toggle on/off logic to star icon states
- propertie box is now static upper left corner
- discovered state is now cyan color instead of bold, for better visualization
- added option to save the current map state and load it from a location of choice
- fixed outpost icon overlapping with city icon if present
- added staryard markers to systems that have it
- decreased the scale of city, outpst, staryard marker by 35%
- moved the img source declaration to its own .css style for city and staryards
- fixed state box not alinging for very wide system names
- added a direct link banner to the starfield community patch report
- added direct link buttons to local maps on StarfieldMap.io
- added 8 direct links to most important 8 wiki, database, whateveries main page, concerning starfield
- fixed wrong language display on instructions page
- added sound to most interactive elements on star map...maybe even all...haven't tested all of them
- all wiki links are now hidden by default, and will need to be enabled with key h
- added global journal(key j), allow saving local storage and export file
- added dedicated class A and G star .gif
- the .txt based system info has been made obsolete due to recent changes of the wiki...tbh, I can't even remotely hold up with their speed
- fixed system x button not changing color to red when hovered
- fixed blur on opening system card not properly spanning the whole screen
- the right system box has been made smaller and will now only show the name of celestial body in upper left corner, so you know what you are clicking on, and what to expect when double clicking for wiki info
- fixed wrong text of system link hotkey</p>
<p>Alpha 6 Rev 2(30.11.2023):- replaced somewhat broken journal close/open sounds with the standard interaction sound
- changed text of map save to "MapSave"
- added menu click sound to discover, survey, outpost buttons
- added x close button to state button box
- added systems: alpha centauri, valo, wolf, barnard's star
- added dedicated textures for class K and M suns
- corrected box shadow color of system Narion
- moved all planet and moon icons to their dedicated sub folders
- all moons and planets have their real game icons added
- fixed wolf system overmouse not correctly responding by moving the staryard icon</p>
<p>Alpha 6 Rev 3(7.12.2023 RC01):- fixed barnards star link not correctly opening web page
- fixed outpost images not correctly showing when loading map state(with refresh page)
- fixed outpost image not working on multiple stars(with refresh page)
- added star system: luyten's star, procyon B, procyon A, toliman, altair, sirius, the pup, tau ceti, van maanen, piazzi
- new star class icon .gif: WD
- changed vega star(Class A) to resemble a closer color to an actual A class star(white)
- fixed state x box position for some systems with long names</p>
<p>Beta 1 Release(16.12.2023): - fixed non existant moon on tau ceti IX
- all systems that do not have a system iframe, will have a direct link to the wiki now
- fixed code error on groombridge system
- the window pop up when double clicking systems with out widget, will have increased size now(1440x810)</p>
<p>Version 0.1.0.7, 17.12.2023:- the system widget close button is now a static button on the left side of the screen with a clear lable
- fixed missing ID for Altair system widget
- fix position of x button for many system state windows
- changed position of community patch button to better fit to 1920x1080 resolution
- changed position of the stars: algorab, delta pavonis, zelazny to get in line with 1920x1080 button change</p>
<p>Version 0.1.1.6, 18.12.2023: - fixed all x button positions for state toggle
- fixed outpost image toggle not corrrectly working
- added standard browser key mappings to settings
- added missing outpost description to settings
- slightly changed position of xi ophiuchi, bradbury, ursae majoris, bannoc secundus, all three ternions for better accesss
- changed local map and direct wiki link container position to latest 1920x1080 res adaption
- changed positions of all affected elements because of that
- slightly corrected SFCP banner pos again
- added direct link to nexus page for starfield map helper banner</p>
<p>Version 0.1.2, 23.12.2023: - add new systems: bessel, kapteyns star
- fixed ursae majoris, and ursae minoris wrong star color and size on starmap
- fixed typo on luyten's rock name
- fixed wrong planet icon on luyten's rock</p>
<p>Version 0.1.2.4, 29.12.23: - fixed missing resource keywords for oborum proxima
- fixed issues related to typo in luytens rock image etc.
- add missing helium keyword to sakharov system
- fixed typo in copernicus and copernicus minor system preventing wiki link call</p>
<p>Version 0.1.3, 2.1.2024: - fixed missing asterisk in leonis system, preventing opening the wiki link
- added city markers to wolf, ixyll, and narion
- starport renamed to ship build location
- large city renamed to major settled location
- add staryard icon to alpha centauri, porrima, ixyll and kryx
- moved sagan a tiny bit further up to make way for the british royal guard</p>
<p>Versiom 0.1.3.17, 9.1.2024: - fixed duplicate playMenuClick() function on al-battani
- fixed occasional buggy behaviour when adding outpost icon
- fixed settings window only auto closing when an outpost image was defined
- increased the speed of star icon resizer when hovering
- entirely fixed problems with the outpost icon srewing with virtually everything...there was a leftover I missed from like 5-6 versions ago
- reduced scale of all icons from 0.65 to 0.35...sorry grandpa's you need to move closer...i've gotten new glasses
- label font size set to 10
- entirely removed star label toggle -> major reason: pointless and without use, not so major reason: stupid me can't manage to fix with hover state and is actually fed up with it
- placed load/save map state out of settings and in place of previous star label toggle
- moved watch, stars: alpha/beta andraste, as well as carinae/eta cassiopeia further down to make way for previously mentioned changes
- moved the close system button further to center and increased size by mucho
- slightly reduced size of final star icon hover scale
- improved overall accessibility and visual distinction of all system icon elements, for better, well, visual distinctive accessibility
- fixed all weird behaviour for any of the system icons on refresh or starting the page
- you will no longer need to press shift in order to show the star system custom journal text, it will be displayed on hover
- if there is a journal entry for a specific system now, the system label will be underlined</p>
<p>Hotfix 13.01.2024: - fixed broken alt key interaction
- alt key interaction can now be toggled on the star system</p>
<p>Version 0.2, 18.1.2024: - full integration of the radio.html...https://www.nexusmods.com/starfield/mods/8086
- set opacity of starfield icon to 100% for better visualibilittittiely
- a blue circle will appear around the staricon so you know to interact with it
- added version text to banner
- clicking a label will open the stars real life wiki page...if the name is based on a not star info, it will lead to that page instead, like for example Al-Battani who was an Astronomer and Mathematician in the medieval Arabian world...some stars don't have catalogue entries, or any way to trace them regardless of thier catalogue number
- hovering a system label text will render the label cyan
- fixed bannoc appearing smaller then bannoc secundus</p>
<p>- fixed schrodinger label linking to sun instead of zeta serpentis
- removed color change off label on mouse over because le douche is le douche, links are still intact
- correction of luytens star label position

major code revision:

- the way outpost images are handled has been completely redone. they are now static elements that will have its visbility toggled when an outpost added is to system. this should solve any issues whatsoever
- the small journal, as well as the text display has been completely removed for reasons stated further down
- the system widget is gone for good. reason: to much effort for way to less benefit...the animation was decent and visually appeasant, but what's the use if you'd end up on the wiki anyways? but watch this...
- resource wheel will show the whole palette of available resources for all systems now
- increased accessibility and size of the element text box for better reading
- corrected position of resource wheel to consider other elements and not overlapp as much
- corrected position of system Newton to new changes
- massive correction of color distribution on the resource wheel, they should all match exactly now
- of course the new added elements(left side as-tx) do not have proper colors because they don't have individual colors, but share all the same color: #A1E4DB...i still gave them color variations so the wheel wouldn't look single colored on one side of the spectrum
- distributed all relevant new keywords to the system divs
- moved the state box further to the left so it doesn't look out of place with the new changes

and now for the major bomb drop:

- the whole "system mini journal aspect" has been revamped. there is now a dedicated system "journal" if you press the "s"(system) or "c"(codex). the structure might be intially confusing, because you will be presented with a 240 elements grid. each of the elements has a "button" like shape and a text input area. the text input area is supposed to act like a "naming field", so, for example, you could write a system name into it. if you then click the adjacent button, it will expand the "journal" underneath which will give you access to 12 text fields plus 12 adjacent image spaces. the idea here is simple: combine text and images you make in game

technically that means what I present you with here, is an interactable in game "Wikipedia" or "Codex" or whatever name you wanna give it. adding images is as easy as to make a Steam screenshot and then use the Steam overlay to catch the image link and put it into your journal's URL imagelink section. of course all the new features are fully saved to local storage, and can be exported to an external .json, so to say "saved" as a game would be saved. but mind though, given the sheer quantitie of entries this new addition is potentially going to add to local storage, I wouldn't rely on LS at all. from here now it's more like a "short time" saving/back-up instance depending on the number of entries. you will most certainly lose content if you close the application without properly saving(exporting) to .json

and if that wasn't enough, as already mentioned, there are two instances of that new journal. one is a"system" journal, the other is meant to be used as "fauna/flora codex"., but of course you are free to use those journals for whatever you like. i'd love to see some of you guys sharing .json exports online for others to import. but mind though, the codex, for now, is basically just a copy aste variant of the system journal, because I didn't found the time and enough reasons to customize it apart from the system journal. but that doesn't mean it is not fully intact, it only means it will be subject to strong visual variation in future updates</p>
