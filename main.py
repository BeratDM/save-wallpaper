import sys
import ctypes
from cli import handle_cli
from gui import WallpaperSaverApp


def _hide_console_window():
    # Minimize the console window on Windows.
    # The spec builds the exe with console=True to support printing values to console when the CLI commands are run,
    # therefore a console window appears when the packaged exe is run and this function minimizes it.
    if sys.platform != "win32":
        return
    try:
        kernel32 = ctypes.windll.kernel32
        user32 = ctypes.windll.user32
        hwnd = kernel32.GetConsoleWindow()
        if hwnd:
            user32.ShowWindow(hwnd, 0)
    except Exception:
        pass


if __name__ == "__main__":
    # Minimize the console window if no CLI args are provided
    if len(sys.argv) < 2:
        _hide_console_window()

    # Check if CLI commands were used
    if handle_cli():
        sys.exit(0)  # CLI handled, exit

    # Otherwise launch GUI
    app = WallpaperSaverApp()
    app.mainloop()
