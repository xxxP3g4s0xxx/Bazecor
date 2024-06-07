import { VirtualType } from "@Renderer/types/virtual";

const DefyWireless: VirtualType = {
  device: {
    info: {
      vendor: "Dygma",
      product: "Defy",
      keyboardType: "wireless",
      displayName: "Dygma Defy",
      urls: [
        {
          name: "Homepage",
          url: "https://www.dygma.com/defy/",
        },
      ],
    },
    usb: {
      vendorId: 13807,
      productId: 18,
    },
    keyboard: {
      rows: 5,
      columns: 16,
    },
    keyboardUnderglow: {
      rows: 2,
      columns: 89,
    },
    RGBWMode: true,
    bootloader: false,
    components: {
      keymap: {},
    },
    instructions: {
      en: {
        updateInstructions:
          "To update the firmware, the keyboard needs a special reset. When the countdown starts, press and hold the Escape key. Soon after the countdown finished, the Neuron's light should start a blue pulsing pattern, and the flashing will proceed. At this point, you should release the Escape key.",
      },
    },
  },
  virtual: {
    version: {
      data: "v1.0.9beta 7622bb53 c9d9b7b-dirty",
      eraseable: false,
    },
    "keymap.custom": {
      data: "41 30 31 32 33 34 0 0 0 0 35 36 37 38 39 0 43 20 26 8 21 23 0 0 0 0 28 24 12 18 19 0 57 4 22 7 9 10 17152 0 0 0 11 13 14 15 51 52 53980 29 27 6 25 5 0 0 0 0 17 16 54 55 56 0 53853 17452 44 49467 49209 226 227 0 0 231 76 49209 52028 44 49162 230 41 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 43 85 95 96 97 87 0 0 0 0 75 74 82 77 0 0 0 84 92 93 94 86 83 0 0 0 78 80 81 79 70 0 0 46 89 90 91 99 0 0 0 0 0 0 0 0 0 0 0 0 98 65535 65535 65535 0 0 0 0 0 65535 65535 65535 65535 0 0 58 59 60 61 62 63 65535 65535 64 65 66 67 68 69 0 0 0 0 22710 22709 23785 0 65535 65535 0 0 23663 0 0 65535 0 0 0 22713 22711 22733 23785 0 65535 65535 0 0 23664 20866 20865 0 0 0 0 0 0 0 19682 65535 65535 65535 65535 0 0 0 0 0 0 0 65535 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 65535 65535 0 0 0 0 0 0 0 0 53 2079 2080 2081 2101 0 65535 65535 0 2083 2095 2096 2093 2094 0 0 2078 56 2102 2103 2082 0 65535 65535 0 2084 2086 2087 45 46 0 0 0 0 49 2097 0 65535 65535 65535 65535 0 47 48 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 65535 0 0 0 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 ",
      eraseable: true,
    },
    "keymap.default": {
      data: "41 30 31 32 33 34 35 0 0 51518 37 38 39 45 46 42 43 20 26 8 21 23 128 0 0 28 24 12 18 19 47 48 57 4 22 7 9 10 129 0 0 11 13 14 15 51 52 229 49 29 27 6 25 5 0 0 0 0 17 16 54 55 56 229 224 227 42 76 44 40 226 225 79 81 80 40 17152 74 82 77 41 58 59 60 61 62 63 0 0 64 65 66 67 68 69 42 43 0 82 0 0 0 0 0 0 86 36 37 38 84 0 40 57 80 81 79 0 0 0 0 0 87 33 34 35 85 0 49 225 49 0 0 0 0 0 0 0 0 99 30 31 32 82 229 224 227 226 44 76 40 42 44 79 228 76 17492 39 44 80 81 ",
      eraseable: false,
    },
    "keymap.onlyCustom": {
      data: "1 ",
      eraseable: true,
    },
    "settings.defaultLayer": {
      data: "0 ",
      eraseable: true,
    },
    "settings.valid?": {
      data: "true",
      eraseable: false,
    },
    "settings.version": {
      data: "1",
      eraseable: false,
    },
    "settings.crc": {
      data: "18462/18462",
      eraseable: false,
    },
    "eeprom.contents": {
      data: "",
      eraseable: false,
    },
    "eeprom.free": {
      data: "",
      eraseable: false,
    },
    "led.at": {
      data: "",
      eraseable: false,
    },
    "led.setAll": {
      data: "",
      eraseable: false,
    },
    "led.mode": {
      data: "0",
      eraseable: true,
    },
    "led.fade": {
      data: "0",
      eraseable: true,
    },
    "led.brightness": {
      data: "153 ",
      eraseable: true,
    },
    "led.brightness.wireless": {
      data: "153 ",
      eraseable: true,
    },
    "led.brightnessUG": {
      data: "153 ",
      eraseable: true,
    },
    "led.brightnessUG.wireless": {
      data: "153 ",
      eraseable: true,
    },
    "led.theme": {
      data: "",
      eraseable: false,
    },
    palette: {
      data: "255 196 0 0 0 254 24 0 0 0 0 255 231 255 0 0 0 254 234 0 0 52 255 0 255 0 232 0 0 77 168 87 125 0 235 19 20 0 36 219 85 0 126 129 255 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ",
      eraseable: true,
    },
    "colormap.map": {
      data: "10 4 4 4 4 4 12 10 4 4 4 4 4 12 2 4 4 4 4 4 8 10 4 4 4 4 4 10 8 1 5 6 2 2 12 12 4 4 4 4 4 12 12 4 4 4 4 4 12 7 7 4 4 4 4 12 12 7 7 7 4 4 9 3 1 5 6 7 2 12 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 10 12 12 12 12 12 12 10 0 3 3 3 0 12 12 0 3 0 3 0 11 12 0 3 3 3 0 12 12 3 5 6 9 12 12 12 12 12 12 12 12 12 12 12 9 3 9 10 12 12 1 3 3 3 10 12 12 12 12 12 12 12 12 3 1 5 6 12 12 12 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 7 12 8 8 8 8 8 8 15 12 15 7 7 9 15 15 12 3 0 1 9 15 15 15 15 15 15 9 15 8 15 12 15 15 15 15 15 8 8 8 8 8 8 15 15 15 12 3 15 15 15 12 11 0 3 12 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 15 12 12 12 12 12 12 12 12 7 7 7 7 7 12 12 4 4 5 5 4 12 12 12 12 7 7 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 7 7 5 5 7 12 12 4 4 5 5 4 12 12 12 12 5 5 12 12 12 12 5 12 12 12 12 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 ",
      eraseable: true,
    },
    "idleleds.time_limit": {
      data: "300 ",
      eraseable: true,
    },
    "idleleds.wireless": {
      data: "300 ",
      eraseable: true,
    },
    "hardware.version": {
      data: "Dygma Defy",
      eraseable: false,
    },
    "hardware.side_power": {
      data: "1",
      eraseable: false,
    },
    "hardware.side_ver": {
      data: "left: 5\r\nright: 5 ",
      eraseable: false,
    },
    "hardware.sled_ver": {
      data: "left: 115\r\nright: 115 ",
      eraseable: false,
    },
    "hardware.sled_current": {
      data: "left: 63\r\nright: 63 ",
      eraseable: false,
    },
    "hardware.layout": {
      data: "ISO",
      eraseable: false,
    },
    "hardware.joint": {
      data: "127",
      eraseable: false,
    },
    "hardware.keyscan": {
      data: "50",
      eraseable: false,
    },
    "hardware.crc_errors": {
      data: "left: 0 right: 0 ",
      eraseable: false,
    },
    "hardware.firmware": {
      data: "c9d9b7b",
      eraseable: false,
    },
    "hardware.chip_id": {
      data: "VirtualDefyWirelessVirtualDefyWireless",
      eraseable: false,
    },
    "qukeys.holdTimeout": {
      data: "250",
      eraseable: true,
    },
    "qukeys.overlapThreshold": {
      data: "80",
      eraseable: true,
    },
    "superkeys.map": {
      data: "262 281 1 1 1 0 0 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 65535 ",
      eraseable: true,
    },
    "superkeys.waitfor": {
      data: "500 ",
      eraseable: true,
    },
    "superkeys.timeout": {
      data: "250 ",
      eraseable: true,
    },
    "superkeys.repeat": {
      data: "20 ",
      eraseable: true,
    },
    "superkeys.holdstart": {
      data: "200 ",
      eraseable: true,
    },
    "superkeys.overlap": {
      data: "20 ",
      eraseable: true,
    },
    "macros.map": {
      data: "8 44 6 225 8 11 7 225 8 8 8 28 8 54 8 44 6 225 8 7 7 225 8 28 8 10 8 16 8 4 8 23 8 8 8 22 0 0 225 8 8 8 28 8 54 8 44 6 225 8 7 7 225 8 28 8 10 8 16 8 4 8 23 8 8 8 22 0 0 79 7 227 0 6 227 8 80 7 227 8 84 8 5 8 24 8 15 8 15 8 8 8 23 8 8 8 7 8 44 8 15 8 12 8 22 8 23 8 40 0 6 227 8 80 7 227 8 84 8 5 8 4 8 17 8 17 8 8 8 21 8 44 8 28 8 8 8 15 8 15 8 18 8 26 8 40 0 6 227 8 80 7 227 8 84 8 11 8 32 8 40 6 227 8 79 7 227 0 6 227 8 80 7 227 8 84 8 11 8 33 8 40 6 227 8 79 7 227 0 6 227 8 80 7 227 8 84 8 6 8 11 8 8 8 6 8 14 8 15 8 12 8 22 8 23 8 40 0 6 227 8 80 7 227 8 84 8 5 8 4 8 17 8 17 8 8 8 21 8 44 8 10 8 21 8 8 8 8 8 17 8 40 6 227 8 79 7 227 0 6 227 8 80 7 227 8 84 8 5 8 4 8 17 8 17 8 8 8 21 8 44 8 21 8 8 8 7 8 40 6 227 8 79 7 227 0 6 227 8 80 7 227 8 84 8 5 8 4 8 17 8 17 8 8 8 21 8 44 8 5 8 15 8 24 8 8 8 40 6 227 8 79 7 227 0 8 84 8 10 8 12 8 19 8 11 8 28 2 0 200 8 40 0 0 8 10 8 21 8 8 8 8 8 17 8 40 0 8 84 8 5 8 4 8 17 8 17 8 8 8 21 8 44 8 21 8 8 8 7 8 40 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 ",
      eraseable: true,
    },
    "macros.trigger": {
      data: "false",
      eraseable: false,
    },
    "macros.memory": {
      data: "2048",
      eraseable: false,
    },
    help: {
      data: "version\r\nkeymap.custom\r\nkeymap.default\r\nkeymap.onlyCustom\r\nsettings.defaultLayer\r\nsettings.valid?\r\nsettings.version\r\nsettings.crc\r\neeprom.contents\r\neeprom.free\r\nled.at\r\nled.setAll\r\nled.mode\r\nled.brightness\r\nled.theme\r\npalette\r\ncolormap.map\r\nidleleds.time_limit\r\nhardware.version\r\nhardware.side_power\r\nhardware.side_ver\r\nhardware.sled_ver\r\nhardware.sled_current\r\nhardware.layout\r\nhardware.joint\r\nhardware.keyscan\r\nhardware.crc_errors\r\nhardware.firmware\r\nhardware.chip_id\r\nqukeys.holdTimeout\r\nqukeys.overlapThreshold\r\nsuperkeys.map\r\nsuperkeys.waitfor\r\nsuperkeys.timeout\r\nsuperkeys.repeat\r\nsuperkeys.holdstart\r\nsuperkeys.overlap\r\nmacros.map\r\nmacros.trigger\r\nhelp\r\nmouse.speed\r\nmouse.speedDelay\r\nmouse.accelSpeed\r\nmouse.accelDelay\r\nmouse.wheelSpeed\r\nmouse.wheelDelay\r\nmouse.speedLimit\r\nlayer.activate\r\nlayer.deactivate\r\nlayer.isActive\r\nlayer.moveTo\r\nlayer.state",
      eraseable: false,
    },
    "mouse.speed": {
      data: "20 ",
      eraseable: true,
    },
    "mouse.speedDelay": {
      data: "2 ",
      eraseable: true,
    },
    "mouse.accelSpeed": {
      data: "20 ",
      eraseable: true,
    },
    "mouse.accelDelay": {
      data: "2 ",
      eraseable: true,
    },
    "mouse.wheelSpeed": {
      data: "2 ",
      eraseable: true,
    },
    "mouse.wheelDelay": {
      data: "100 ",
      eraseable: true,
    },
    "mouse.speedLimit": {
      data: "127 ",
      eraseable: true,
    },
    "layer.activate": {
      data: "false",
      eraseable: false,
    },
    "layer.deactivate": {
      data: "false",
      eraseable: false,
    },
    "layer.isActive": {
      data: "0",
      eraseable: false,
    },
    "layer.moveTo": {
      data: "false",
      eraseable: false,
    },
    "layer.state": {
      data: "1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
      eraseable: false,
    },
    "wireless.battery.left.level": {
      data: "80",
      eraseable: false,
    },
    "wireless.battery.right.level": {
      data: "80",
      eraseable: false,
    },
    "wireless.battery.left.status": {
      data: "1",
      eraseable: false,
    },
    "wireless.battery.right.status": {
      data: "1",
      eraseable: false,
    },
    "wireless.battery.savingMode": {
      data: "0",
      eraseable: true,
    },
    "wireless.energy.modes": {
      data: "0 0 0 0 0 0 0 0 0 0 0",
      eraseable: true,
    },
    "wireless.energy.disable": {
      data: "true",
      eraseable: false,
    },
    "wireless.energy.currentMode": {
      data: "0",
      eraseable: true,
    },
    "wireless.bluetooth.macs": {
      data: "",
      eraseable: false,
    },
    "wireless.bluetooth.peer_ids": {
      data: "",
      eraseable: false,
    },
    "wireless.bluetooth.remove": {
      data: "",
      eraseable: false,
    },
    "wireless.bluetooth.deviceName": {
      data: "",
      eraseable: true,
    },
    "wireless.bluetooth.list": {
      data: "",
      eraseable: false,
    },
    "wireless.rf.power": {
      data: "0",
      eraseable: false,
    },
    "wireless.rf.stability": {
      data: "0",
      eraseable: false,
    },
    "wireless.rf.channelHop": {
      data: "false",
      eraseable: true,
    },
    "wireless.rf.syncPairing": {
      data: "",
      eraseable: false,
    },
  },
};

export default DefyWireless;
