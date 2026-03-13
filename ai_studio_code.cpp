#include <iostream>
#include <limits>

// Function to erase lines in terminal
void erase_lines(int count) {
    if (count > 0) {
        std::cout << "\x1b[2K";
        for (int i = 1; i < count; i++) {
            std::cout << "\x1b[1A";
            std::cout << "\x1b[2K";
        }
        std::cout << "\r";
    }
}

int main() {
    int money;

    std::cout << "How much money do you have?\n";
    std::cout << "$";

    // Input validation
    while (!(std::cin >> money)) {
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

        erase_lines(1);
        std::cout << "Invalid input. Please enter a number.\n$";
    }

    // Clear the question lines
    erase_lines(2);

    // Display result
    std::cout << "You have $" << money << ".\n";

    if (money == 0) {
        std::cout << "You are broke 😅\n";
    }
    else if (money < 100) {
        std::cout << "You have a little money.\n";
    }
    else if (money < 1000) {
        std::cout << "You're doing okay.\n";
    }
    else {
        std::cout << "You're rich! 💰\n";
    }

    return 0;
}
