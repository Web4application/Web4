#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#ifdef _WIN32
#include <windows.h>
#include <shlobj.h>
#else
#include <unistd.h>
#include <pwd.h>
#endif

static void create_directory(const char *path) {
#ifdef _WIN32
    _mkdir(path);
#else
    mkdir(path, 0755);
#endif
}

void init_user_storage() {
    char username[256];
    char user_path[512];

#ifdef _WIN32
    DWORD size = sizeof(username);
    GetUserNameA(username, &size);
#else
    struct passwd *pw = getpwuid(getuid());
    strcpy(username, pw->pw_name);
#endif

    // Create user-specific folder inside web4lib
    snprintf(user_path, sizeof(user_path), "web4lib/%s", username);
    create_directory("web4lib");
    create_directory(user_path);

    printf("[Web4] User storage ready at: %s\n", user_path);
}
