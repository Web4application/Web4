# Contributing to Paperweb

Thank you for your interest in contributing to Paperweb! We welcome contributions from the community and appreciate your help in making this project better.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement, please open an issue on GitHub:

1. Check if the issue already exists
2. Provide a clear and descriptive title
3. Include relevant details about your environment
4. Provide code examples when applicable

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit with clear messages: `git commit -m "Add feature description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Open a Pull Request with a clear description

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Make your changes
5. Test locally: `npm run build && npm start`

## Coding Standards

- Use TypeScript for type safety
- Follow the existing code style
- Write meaningful variable and function names
- Add comments for complex logic
- Keep components focused and reusable

### Component Guidelines

- Use functional components with React hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Export components as default
- Place styles in the same file or use Tailwind CSS

### Tailwind CSS

- Use Tailwind CSS for styling
- Avoid inline styles
- Use semantic Tailwind classes
- Follow the design system color scheme
- Use responsive prefixes for mobile-first design

## Testing

Before submitting a PR:

1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Check for TypeScript errors
4. Verify responsive design on mobile

## Commit Message Guidelines

- Use clear, descriptive titles
- Prefix with type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`
- Keep first line under 50 characters
- Include issue number if applicable

Examples:
- `feat: add dataset search functionality`
- `fix: resolve navigation mobile menu issue`
- `docs: update API reference section`

## Documentation

If your contribution includes new features:

1. Update relevant documentation
2. Add examples if applicable
3. Update the README if needed
4. Include inline code comments

## Performance

When contributing:

- Minimize bundle size impact
- Avoid unnecessary re-renders
- Use lazy loading where appropriate
- Test on slower connections and devices

## Getting Help

- Check existing documentation in `/docs`
- Review related issues and PRs
- Ask questions in the repository discussions
- Join our community channels

## Recognition

Contributors will be recognized in:

- Pull request comments
- Release notes (for significant contributions)
- Contributors list on GitHub

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue or discussion if you have questions about contributing!

---

Thank you for making Paperweb better!
