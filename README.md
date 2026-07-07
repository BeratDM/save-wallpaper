# save-win11-wallpaper

Store Windows 11 daily wallpapers into a folder, usable from cli and gui.

Save 1 minute every day. (I spent more time automating it.)

![img](https://pub-55a8605bd8ee494ab002c0bb70e15fed.r2.dev/github/w11wp.PNG)

---

## LLM generated project summary

### 🖼️ Save Windows 11 Wallpaper

[![GitHub Pages](https://img.shields.io/badge/docs-GitHub%20Pages-blue?style=flat-square)](https://beratdm.github.io/save-win11-wallpaper/)
[![GitHub release](https://img.shields.io/github/v/release/BeratDM/save-win11-wallpaper?style=flat-square)](https://github.com/BeratDM/save-win11-wallpaper/releases)
[![GitHub](https://img.shields.io/github/license/BeratDM/save-win11-wallpaper?style=flat-square)](https://github.com/BeratDM/save-win11-wallpaper/blob/main/LICENSE)

Save Windows 11 daily wallpapers to a folder of your choice. Works from both **CLI** and **GUI**.

## ✨ Features

- **CLI & GUI** — Use from the command line for scripting, or launch the friendly GUI for one-click saving.
- **Duplicate Detection** — SHA-256 hashing ensures every saved image is unique.
- **Persistent Config** — Set and forget your default save folder.
- **Timestamped Files** — Saved files follow the `wp-YY-MM-DD-ffffff.png` naming scheme.

## 📚 Documentation

Full documentation is available at:  
**https://beratdm.github.io/save-win11-wallpaper/**

## ⬇ Download

Grab the latest **getwallpaper.exe** from the [Releases page](https://github.com/BeratDM/save-win11-wallpaper/releases) — no Python required.

## 🚀 Quick Start

```bash
# Save wallpaper to a folder
getwallpaper.exe save "C:\Users\YourName\Pictures\Wallpapers"

# Launch the GUI
getwallpaper.exe
```

## ⌨️ CLI Commands

| Command | Description |
|---------|-------------|
| `getwallpaper.exe save [path]` | Save wallpaper to path (uses default if omitted) |
| `getwallpaper.exe config get` | Show current default folder |
| `getwallpaper.exe config set <path>` | Set new default folder |
| `getwallpaper.exe help` | Show help |

Replace `getwallpaper.exe` with `python main.py` if running from source.

## 🖱️ GUI

Run without arguments to launch the GUI:

```bash
getwallpaper.exe
```

## 🔨 Building from Source

```bash
git clone https://github.com/BeratDM/save-win11-wallpaper.git
cd save-win11-wallpaper
pip install pyinstaller
pyinstaller main.spec
```

The executable will be placed in the `dist/` folder.

## 📁 Project Structure

```
save-win11-wallpaper/
├── main.py             # Entry point — dispatches CLI or GUI
├── cli.py              # Command-line interface logic
├── gui.py              # Tkinter-based graphical interface
├── config.py           # Persistent configuration (JSON)
├── getwallpaper.py     # Core wallpaper extraction & saving logic
├── main.spec           # PyInstaller build spec
├── docs/               # GitHub Pages documentation
└── README.md
```

## 📄 License

This project is open source. See the [LICENSE](https://github.com/BeratDM/save-win11-wallpaper/blob/main/LICENSE) file for details.