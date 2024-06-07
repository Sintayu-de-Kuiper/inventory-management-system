# Software Requirements Specification: Inventory Management System

<!-- prettier-ignore-start -->
<!-- @formatter:off -->
<!-- TOC -->

- [Software Requirements Specification: Inventory Management System](#software-requirements-specification-inventory-management-system)
  - [1. Introduction](#1-introduction)
    - [1.1 Document Purpose](#11-document-purpose)
    - [1.1 Purpose](#11-purpose)
    - [1.2 Intended Audience](#12-intended-audience)
    - [1.2 Intended Use](#12-intended-use)
    - [1.3 Product Scope](#13-product-scope)
    - [1.5 Definitions, Acronyms, and Abbreviations](#15-definitions-acronyms-and-abbreviations)
  - [2. Overall Description](#2-overall-description)
    - [2.1 User Classes](#21-user-classes)
    - [2.2 User Needs](#22-user-needs)
    - [Operating Environment](#operating-environment)
    - [System features and requirements](#system-features-and-requirements)
      - [Pages](#pages)
- [What needs to be clear after this document:](#what-needs-to-be-clear-after-this-document)
  <!-- TOC -->
  <!-- @formatter:on -->
  <!-- prettier-ignore-end -->

## 1. Introduction

### 1.1 Document Purpose

This document goes over the scope, users, features and requirements of the Inventory Management System. This document is
meant to aid in development and can be used to get product owner approval. Developers can use this document as a single
source of truth so that everyone has a clear picture of what needs to be done.

### 1.2 Intended Audience

### 1.3 Intended Use

### 1.4 Product Scope

### 1.5 Definitions, Acronyms, and Abbreviations

- **IMS**: Inventory Management System
- **Inleveren**: Dutch for "Return"
- **Lenen**: Dutch for "Lend"
- **Beheer**: Dutch for "Manage"
- **Beheerders paneel**: Dutch for "Admin panel"

## 2. Overall Description

### 2.1 User Classes

1. **Student**: Default user with basic lending and returning privileges.
2. **Teachers**: Have additional access to administrative functions.
3. **Admin**: Administrators with full control over items and user accounts.

### 2.2 User Needs

- **Student**: Lending, returning, viewing past transactions.
- **Teachers**: Same as students, plus access to administrative panel.
- **Admin**: Add, edit, delete items and user accounts.

### 2.3 Operating Environment

- Single computer setup
- Windows OS
- Offline operation

### 2.4 Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- Prisma with SQLite
- Barcode/QR code scanner

### 2.5 System Features and Requirements

#### Pages Overview

1. **Login**
2. **Register**
3. **Home**
4. **Inleveren**
5. **Lenen**
6. **Beheer**

#### Detailed Page Descriptions

### 3. Login

- **Purpose**: Identification for tracking lent items.
- **Features**:
  - **Scan NFC card**: User can scan their card to log in.

### 4. Register

- **Purpose**: User details collection for easy identification.
- **Features**:
  - **Student number**: Input field.
  - **Name**: Input field.
  - **Class**: Input field.
  - **Register button**: Submission of user details.
- **Questions**:
  - Should this page ask for email or other details?
  - Wat moet er gebeuren als de clas van de student veranderd? Misschien elk schooljaar een popup "Vul klas in"?

### 5. Home

- **Purpose**: User overview and navigation.
- **Features**:
  - **Username**: Displayed in greeting.
  - **Inleveren**: Redirect to "Inleveren" page.
  - **Lenen**: Redirect to "Lenen" page.
  - **Beheer**: Redirect to "Beheer" page. (only for admins)
- **Questions**:
  - Should the user be on this page or should there be a header and not a page?

### 6. Inleveren

- **Purpose**: View lent items and return.
- **Features**:
  - **List of lend items**: Display of items lent.
  - **Per item**:
    - Name, amount, lend period.
    - Return checkbox
    - Return amount selection.
  - **Return button**: Submission of return action.

### 7. Lenen

TODO ###

- **Purpose**: Lending items.
- **Features**:
  - **Scan barcode**: Add item to lending list.
  - **List of items**: Display of scanned items.
  - **Per item**:
    - Name, amount, lend button.
