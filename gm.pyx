# List all available build configurations and targets
tools/dev/gm.py

# Build the d8 shell for x64 in release mode
tools/dev/gm.py quiet x64.release

# Build d8 for x64 in debug mode
tools/dev/gm.py quiet x64.debug
# Example of running d8 with gdb
gdb --args out/x64.debug/d8 --my-flag my-script.js
