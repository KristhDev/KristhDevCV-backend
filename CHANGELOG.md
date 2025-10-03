# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-02

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
- Token verification and token validation middlewares for server authentication
- Path alias and path mapping support for cleaner imports
- Request context DTO to enrich logging and request metadata
- Education domain: education entity, interfaces, DTOs, and dynamic education data support in services
- CV page template system for PDF/HTML generation
- Spanish short month names for localization support
- LinkedIn integration in skills display
- PDF error type and improved PDF error handling and wrapping of Puppeteer errors
- Time adapter for consistent date formatting and locale options

### Changed
- Centralized request context logging and refined request/response logging details
- Removed user-agent adapter initialization from server
- Made education data dynamic in services
- Standardized and renamed environment variables; added Logtail source URL
- Delegated CV template generation to CV service
- Improved context-rich logging across adapters and middleware

### Fixed
- Content height calculation improvements for more stable PDF rendering
- Removed debug console logs in adapters

### Documentation
- Added and updated project documentation and README
- Added changelog documentation and guidance
- Added JSDoc and documentation comments for use cases, facades, entities and DTOs
- Documented environment variables and added app_token to example env

### Configuration
- Added application token configuration (app_token / app_env) and example environment updates
- Configure logger behavior based on environment and updated Logtail configuration
- Use `app_port` for server configuration and added module path aliases

### Chore
- Refined and organized `.gitignore` patterns
- General maintenance: import categorization comments, minor formatting and style adjustments

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