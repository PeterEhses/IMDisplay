---
# Think of the lines within the --- as switches. Some can be set to true or false like a light switch
# Some take a specific type of data like a number, a date, or text.
# Some are commented (they have  a # in front of them like this line). Remove the # to make them do something.
# Commented lines will be ignored and the fields will default to some value defined in code. 

draft: false          # should this be shown?
# remove: 15.06.2023  # When should this be removed? Must be in standard german date format (dd.mm.yyyy)
# fullscreen: true    # should this poster have a footer? 
# noborder: true      # should this poster have a colored border?
# lifetime: 6000      # how long (in ms) should the poster be visible?

# Uncomment any org/suborg chips that you want to display
# Chips will determine the border color.
orgs: [ 
    # 'GES', # FB Gestaltung
    # 'ID',  # Intermedia Design
    # 'MD',  # Mode Design
    # 'AR',  # Architektur
    # 'IA',  # Innenarchitektur
    # 'KD',  # Kommunikationsdesign
    # 'ES'   # Edelstein und Schmuck
]
suborgs: [
    # "MR",  # Medienräume
    # "GM",  # Games
    # "NF",  # Narrative Formate
    # "HM",  # Hypermedia
    # "IÄ"   # Intermediale Ästhetik
]

# this content will be auto-applied to the layout. Prefer this over putting info in the markdown!
title: 'Touchdesigner Thursdays'              # The largest visible Text in the Footer
description: 'Bring your own laptop & beer'   # The (small) line under the title
type: 'Workshops'                             # the larger text in the bottom left. 
background: testevent.png                     # put the url or relative path of any image or video file you want to use as the background. Prefer small files!
# unmute: true                                # if it's a video: should the video sound be played? Try to avoid. 
timeAndDate: '14.06 | 18:00'                  # the time and date of the event, will be displayed top right over the background. Choose any formatting. I recommend dd.mm | hh.mm

# put any additional content you want to put in the frame below.
# This will be autoformatted over the background.
# Separate text blocks will generate distinct text containers, headings (prefix the line with `# ` for H1, `## ` for H2 and so on, mind the space after #) will be rendered as large text.
# No other markdown features are implemented and tested as of now. General styling (bold, italic, etc.) might work. 
---
[//]: # This is where the markdown begins. Anything written here will be composited over the backgorund. The only exception are comments like this one!
[//]: # here's an example of a heading:
# This is the example file. You shouldn't ever see it in production ;)

[//]: # Here's an example of a paragraph:

paragraphs are easy, don't use any special characters, just write like this!