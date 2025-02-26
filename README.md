# Neetry-Libra - Online Library Admin Application

## Overview

Neetry-Libra is an Angular-based administrative tool designed to manage an online library system. It features secure authentication, comprehensive user management, product/book management, persons management, and a dynamic dashboard displaying key statistics.

## Features

- **Authentication:**
  - Secure login system with email and password
  - Integration with ReqRes API
  - Route protection with auth guards

- **Dashboard:**
  - Responsive layout with collapsible sidebar navigation
  - Real-time statistics display
  - Quick access to all major features

- **Users Management:**
  - CRUD operations for user data
  - Interactive modal dialogs for user operations
  - Integration with ReqRes API

- **Products/Books Management:**
  - Card-based product display
  - Sorting functionality
  - Pagination with "Show More" capability

- **Persons Management:**
  - Tabular data display
  - Custom pagination
  - Advanced search and filtering
  - Local sorting capabilities

## Technical Stack

- Angular 18.2.12
- Angular Material
- RxJS
- TypeScript

## Getting Started

### Prerequisites

- Node.js
- npm package manager
- Angular CLI version 18.2.12

### Installation

1. Clone the repository
```bash
git clone https://github.com/Yedigaryan/Neetry-Libra.git
```
2. Install dependencies
```bash
npm install
```
3. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure
- src/app/core - Core functionality, guards, services
- src/app/features - Feature modules (dashboard, users, products, etc.)
- src/app/shared - Shared components, directives, and pipes

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
