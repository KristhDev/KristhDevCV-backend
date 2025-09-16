# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Education system integration for CV generation
- Dynamic education data management
- Education entity and interface definitions
- Education endpoint interface
- Vercel deployment configuration
- Spanish localization support with short month names
- CV page template system
- LinkedIn integration in skills display
- Localization middleware for internationalization support
- PDF error handling and enhanced error management
- Time adapter for consistent date formatting
- Base middleware class architecture
- CV generation service with template delegation
- HTTP status constants for base controller
- PDF generation adapter with Puppeteer integration
- Portfolio API routes and CV generation endpoints
- Complete dependency injection system
- Comprehensive logging system with Winston and Logtail
- User agent parsing and analysis
- Environment-based configuration management

### Changed
- Improved content height calculation in PDF generation
- Enhanced skills display with LinkedIn integration
- Standardized environment variable naming conventions
- Updated Logtail logger configuration
- Refined request logging details and context
- Improved code readability across middlewares and adapters
- Enhanced error context logging
- Refactored CV template generation delegation
- Updated working experience entity properties
- Optimized PDF generation stability

### Fixed
- Content height calculation issues in PDF adapter
- Debug console log cleanup in adapters

### Documentation
- Added JSDoc comments to generate CV methods
- Documented CV facade methods
- Added documentation to entity fromEndpoint methods
- Enhanced portfolio service documentation
- Comprehensive CV DTO documentation
- Added import categorization comments

## [1.0.0] - 2025-08-31

### Added
- Initial project setup with TypeScript configuration
- Core backend infrastructure with Express server
- Dependency injection container architecture
- Winston and Logtail logging integration
- Environment variable configuration system
- Module path aliases for clean imports
- User agent parsing with ua-parser-js
- HTTP client adapter for external API calls
- Domain error handling system
- CV data models and entities (Skill, Working Experience)
- Portfolio service for CV data fetching
- PDF generation using Puppeteer and Chromium
- CV facade and use case architecture
- RESTful API endpoints for CV generation
- Request/response logging middleware
- JSON response utilities
- Base controller class with HTTP status handling

### Build
- Configured TypeScript build system
- Added rimraf for clean builds
- Set up ts-node-dev for development
- Configured PNPM package manager
- Added essential dependencies for logging, PDF generation, and HTTP handling

### Configuration
- TypeScript configuration with path mapping
- Environment variable management with dotenv
- Git repository initialization with appropriate .gitignore
- Module alias configuration for clean imports
- ESM/CommonJS compatibility setup

---

## Changelog Standards

This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and includes:

### Change Categories
- **Added** for new features
- **Changed** for changes in existing functionality  
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes
- **Documentation** for documentation-only changes
- **Build** for build system changes
- **Configuration** for configuration changes

### Commit Convention
This project uses [Conventional Commits](https://www.conventionalcommits.org/) with the following prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `chore:` for maintenance tasks
- `build:` for build system changes
- `config:` for configuration changes

### Versioning
This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

### Release Process
1. Update version in `package.json`
2. Update this changelog with the new version
3. Create a git tag with the version number
4. Push changes and tags to trigger deployment