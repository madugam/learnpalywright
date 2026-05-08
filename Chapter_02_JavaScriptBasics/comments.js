// Keyboard Keys & Shortcuts Reference for Windows and Mac
// Useful for JavaScript KeyboardEvent handling

/*
============================================================
SPECIAL / MODIFIER KEYS
============================================================
Windows         Mac                     JS key property       JS code property
------------------------------------------------------------
Ctrl            Cmd (Command)           "Control" / "Meta"    "ControlLeft"/"ControlRight" / "MetaLeft"/"MetaRight"
Alt             Option (Opt)            "Alt" / "AltGraph"    "AltLeft"/"AltRight"
Shift           Shift                   "Shift"               "ShiftLeft"/"ShiftRight"
Win             Cmd (Command)           "Meta"                "MetaLeft"/"MetaRight"
Fn              Fn                      (no standard event)

Note: On Mac, the Command key fires key "Meta". The Option key fires key "Alt".

============================================================
COMMON SHORTCUTS
============================================================
Action                  Windows Shortcut        Mac Shortcut
------------------------------------------------------------
Copy                    Ctrl + C                Cmd + C
Paste                   Ctrl + V                Cmd + V
Cut                     Ctrl + X                Cmd + X
Undo                    Ctrl + Z                Cmd + Z
Redo                    Ctrl + Y                Cmd + Shift + Z
Select All              Ctrl + A                Cmd + A
Save                    Ctrl + S                Cmd + S
Print                   Ctrl + P                Cmd + P
Find                    Ctrl + F                Cmd + F
Replace                 Ctrl + H                Cmd + H
New Tab                 Ctrl + T                Cmd + T
Close Tab               Ctrl + W                Cmd + W
Close Window            Alt + F4                Cmd + W / Cmd + Q
Refresh                 F5 / Ctrl + R           Cmd + R
Hard Refresh            Ctrl + F5               Cmd + Shift + R
Developer Tools         F12 / Ctrl + Shift + I  Cmd + Option + I
Console                 Ctrl + Shift + J        Cmd + Option + J

============================================================
FUNCTION KEYS (F1 - F24)
============================================================
Key         JS key          JS code
------------------------------------------------------------
F1          "F1"            "F1"
F2          "F2"            "F2"
F3          "F3"            "F3"
F4          "F4"            "F4"
F5          "F5"            "F5"
F6          "F6"            "F6"
F7          "F7"            "F7"
F8          "F8"            "F8"
F9          "F9"            "F9"
F10         "F10"           "F10"
F11         "F11"           "F11"
F12         "F12"           "F12"
F13-F24     "F13".."F24"    "F13".."F24"  (Mac keyboards have F13-F19)

============================================================
NAVIGATION KEYS
============================================================
Key         Windows/Mac     JS key              JS code
------------------------------------------------------------
Enter       Enter           "Enter"             "Enter"
Return      Return (Mac)    "Enter"             "NumpadEnter" (numpad)
Tab         Tab             "Tab"               "Tab"
Backspace   Backspace       "Backspace"         "Backspace"
Delete      Delete / Del    "Delete"            "Delete"
Insert      Insert          "Insert"            "Insert"
Home        Home            "Home"              "Home"
End         End             "End"               "End"
Page Up     Page Up         "PageUp"            "PageUp"
Page Down   Page Down       "PageDown"          "PageDown"
Esc         Esc             "Escape"            "Escape"
Space       Spacebar        " " (space)         "Space"

============================================================
ARROW KEYS
============================================================
Key         JS key          JS code
------------------------------------------------------------
Up Arrow    "ArrowUp"       "ArrowUp"
Down Arrow  "ArrowDown"     "ArrowDown"
Left Arrow  "ArrowLeft"     "ArrowLeft"
Right Arrow "ArrowRight"    "ArrowRight"

============================================================
ALPHABET KEYS (A-Z)
============================================================
Key         JS key (lower)  JS key (upper with Shift)   JS code
------------------------------------------------------------
A           "a"             "A"                         "KeyA"
B           "b"             "B"                         "KeyB"
C           "c"             "C"                         "KeyC"
D           "d"             "D"                         "KeyD"
E           "e"             "E"                         "KeyE"
F           "f"             "F"                         "KeyF"
G           "g"             "G"                         "KeyG"
H           "h"             "H"                         "KeyH"
I           "i"             "I"                         "KeyI"
J           "j"             "J"                         "KeyJ"
K           "k"             "K"                         "KeyK"
L           "l"             "L"                         "KeyL"
M           "m"             "M"                         "KeyM"
N           "n"             "N"                         "KeyN"
O           "o"             "O"                         "KeyO"
P           "p"             "P"                         "KeyP"
Q           "q"             "Q"                         "KeyQ"
R           "r"             "R"                         "KeyR"
S           "s"             "S"                         "KeyS"
T           "t"             "T"                         "KeyT"
U           "u"             "U"                         "KeyU"
V           "v"             "V"                         "KeyV"
W           "w"             "W"                         "KeyW"
X           "x"             "X"                         "KeyX"
Y           "y"             "Y"                         "KeyY"
Z           "z"             "Z"                         "KeyZ"

============================================================
NUMBER KEYS (Top Row 0-9)
============================================================
Key         JS key          JS code
------------------------------------------------------------
0           "0"             "Digit0"
1           "1"             "Digit1"
2           "2"             "Digit2"
3           "3"             "Digit3"
4           "4"             "Digit4"
5           "5"             "Digit5"
6           "6"             "Digit6"
7           "7"             "Digit7"
8           "8"             "Digit8"
9           "9"             "Digit9"

============================================================
NUMPAD KEYS
============================================================
Key         JS key          JS code
------------------------------------------------------------
Num Lock    "NumLock"       "NumLock"
Numpad 0    "0"             "Numpad0"
Numpad 1    "1"             "Numpad1"
Numpad 2    "2"             "Numpad2"
Numpad 3    "3"             "Numpad3"
Numpad 4    "4"             "Numpad4"
Numpad 5    "5"             "Numpad5"
Numpad 6    "6"             "Numpad6"
Numpad 7    "7"             "Numpad7"
Numpad 8    "8"             "Numpad8"
Numpad 9    "9"             "Numpad9"
Numpad +    "+"             "NumpadAdd"
Numpad -    "-"             "NumpadSubtract"
Numpad *    "*"             "NumpadMultiply"
Numpad /    "/"             "NumpadDivide"
Numpad .    "."             "NumpadDecimal"
Numpad Enter"Enter"         "NumpadEnter"

============================================================
SYMBOL / PUNCTUATION KEYS
============================================================
Key         JS key          JS code
------------------------------------------------------------
`           "`"             "Backquote"
-           "-"             "Minus"
=           "="             "Equal"
[           "["             "BracketLeft"
]           "]"             "BracketRight"
\\          "\\"            "Backslash"
;           ";"             "Semicolon"
'           "'"             "Quote"
,           ","             "Comma"
.           "."             "Period"
/           "/"             "Slash"

============================================================
WINDOWS / MAC SPECIFIC KEYS
============================================================
Windows Key         JS key: "Meta"          JS code: "MetaLeft" / "MetaRight"
Mac Command (Cmd)   JS key: "Meta"          JS code: "MetaLeft" / "MetaRight"
Mac Option (Opt)    JS key: "Alt"           JS code: "AltLeft" / "AltRight"
Mac Control (Ctrl)  JS key: "Control"       JS code: "ControlLeft" / "ControlRight"
Menu Key (Win)      JS key: "ContextMenu"   JS code: "ContextMenu"

============================================================
LOCK KEYS
============================================================
Key         JS key          JS code
------------------------------------------------------------
Caps Lock   "CapsLock"      "CapsLock"
Num Lock    "NumLock"       "NumLock"
Scroll Lock "ScrollLock"    "ScrollLock"

============================================================
MEDIA KEYS (if available)
============================================================
Key         JS key          JS code
------------------------------------------------------------
Volume Mute     "AudioVolumeMute"   "AudioVolumeMute"
Volume Down     "AudioVolumeDown"   "AudioVolumeDown"
Volume Up       "AudioVolumeUp"     "AudioVolumeUp"
Play/Pause      "MediaPlayPause"    "MediaPlayPause"
Stop            "MediaStop"         "MediaStop"
Track Previous  "MediaTrackPrevious""MediaTrackPrevious"
Track Next      "MediaTrackNext"    "MediaTrackNext"

============================================================
HOW TO USE IN JAVASCRIPT
============================================================

document.addEventListener('keydown', function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Code: " + event.code);
    console.log("Ctrl pressed: " + event.ctrlKey);   // Windows Ctrl / Mac Control
    console.log("Meta pressed: " + event.metaKey);   // Windows Key / Mac Command
    console.log("Alt pressed: " + event.altKey);     // Windows Alt / Mac Option
    console.log("Shift pressed: " + event.shiftKey);

    // Example: Detect Ctrl+S (Windows) or Cmd+S (Mac)
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        console.log("Save shortcut detected!");
    }
});

*/
