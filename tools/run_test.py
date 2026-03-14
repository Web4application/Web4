# Run all standard tests for the x64.optdebug build
tools/run-tests.py --progress dots --exit-after-n-failures=5 --outdir=out/x64.optdebug

# Run a specific test suite (e.g., cctest)
tools/run-tests.py --progress dots --exit-after-n-failures=5 --outdir=out/x64.optdebug cctest

# Run a specific test file
tools/run-tests.py --progress dots --exit-after-n-failures=5 --outdir=out/x64.optdebug cctest/test-heap
