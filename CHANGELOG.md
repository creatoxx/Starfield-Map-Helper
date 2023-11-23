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
