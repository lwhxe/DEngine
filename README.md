# DEngine
Easy to use, Scratch Esque compiler for creating Discord-Bots.

The project has its documentation on the [LWHXE](https://lwhxe.github.io/project) site.

DEngine uses a variety of external applications to achieve an easy, fast, and safe programming experience.
*Developer Mode is required for certain features of the application; Only enable this if you're confident in your knowledge.*

We're combining the functions of Python and the Discord API implementation in Discord.py.

When you create your project, you will have your functions on the left sidebar. This is what is being compiled by our program.
When you press [ctrl + s], your progress will be saved to "{project_name}.sv".
When you select: Build -> App, "{project_name}.sv", is converted into "{project_name}.py".
When you select: Build -> Executable, "{project_name}.py", is converted into "{project_name}.exe".
When you select: Build -> Installer, Your entire build gets converted into: "{project_name}_installer.exe".

Previous steps will be done automatically. I.E. Build -> Installer, will complete all previous steps (including saving) before creating the Installer.

**Electron is used for the UI.**
**C Language is used for the saving and first conversion processes.**
**Pyinstaller is used to create the executable.**
**TBA**
