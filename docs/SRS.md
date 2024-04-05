# Software Requirements Specification: Inventory Management System

<!-- @formatter:off -->
<!-- TOC -->
* [Software Requirements Specification: Inventory Management System](#software-requirements-specification-inventory-management-system)
  * [1. Introduction](#1-introduction)
    * [1.1 Document Purpose](#11-document-purpose)
    * [1.1 Purpose](#11-purpose)
    * [1.2 Intended Audience](#12-intended-audience)
    * [1.2 Intended Use](#12-intended-use)
    * [1.3 Product Scope](#13-product-scope)
    * [1.5 Definitions, Acronyms, and Abbreviations](#15-definitions-acronyms-and-abbreviations)
  * [2. Overall Description](#2-overall-description)
    * [2.1 User Classes](#21-user-classes)
    * [2.2 User Needs](#22-user-needs)
    * [Operating Environment](#operating-environment)
    * [System features and requirements](#system-features-and-requirements)
      * [Pages](#pages)
* [What needs to be clear after this document:](#what-needs-to-be-clear-after-this-document)
<!-- TOC -->
<!-- @formatter:on -->

## 1. Introduction

### 1.1 Document Purpose

This document goes over the scope, users, features and requirements of the Inventory Management System. This document is
meant to aid in development and can be used to get product owner approval. Developers can use this document as a single
source of truth so that everyone has a clear picture of what needs to be done.

### 1.1 Purpose

The system is meant to solve a handful of problems surrounding the management and lending of school items.

### 1.2 Intended Audience

### 1.2 Intended Use

### 1.3 Product Scope

### 1.5 Definitions, Acronyms, and Abbreviations

* **IMS**: Inventory Management System
* **Inleveren**: The Dutch term for "Return"
* **Lenen**: The Dutch term for "Lend"
* **Beheer**: The Dutch term for "Manage"
* **Beheerders paneel**: The Dutch term for "Admin panel"

## 2. Overall Description

### 2.1 User Classes

Roles are in order. Each Class has all the rights of all the above Classes.

* **Student:**: This is the default user.
* **Teachers**
* **Admin**

### 2.2 User Needs

* **Student:** Students will be able to lend and hand-in items. They will also be able to view their past lendings and
  account details.
* **Teachers:** Teachers have the same features as students, but they also get access to the *beheerders paneel*.
* **Admin:** The administrator can add, edit and delete items and user accounts.

### Operating Environment

* One single computer
* Windows
* No acces to the internet

### Tech stack

The system will be a web application. The following technologies will be used:

* Next.js
* TypeScript
* TailwindCSS
* Prisma with SQLite
* Barcode/QR code scanner

### System features and requirements

#### Pages

* Login: This is the page where a user needs to scan their card
* Register: This is the page that is shown when a user scans their card for the first time. Here they can fill in their
  details.
* Home: Here you can choose between "Inleveren" or "Lenen" (and "Beheer" if the user is a teacher or higher)
* Inleveren: Here you can see what you have lend and what you need to return
* Lenen: Here you you can scan a barcode to lend an item
* Beheer: Here you can add, edit and delete items and user accounts

#### Detailed Page Descriptions

* **Login**
    * **Purpose**: This page is meant to identify the user so that lend items can be tracked.
    * **Features**:
        * **Scan ncf card**: The user can scan their card to log-in
    * **Questions**:
        * Should the user be able to manually input their student number?

* **Register**
    * **Purpose**: This page is meant to get the user's details so that they can be identified easier.
    * **Features**:
        * **Student number**: The user can input their student number.
        * **Name**: The user can input their full name.
        * **Class**: The user can input their class.
        * **Register button**: The user can click on a button to register their account.
    * **Questions**:
        * Should this page ask for email or other details?
        * Wat moet er gebeuren als de clas van de student veranderd? Misschien elk schooljaar een popup "Vul klas in"?

* **Home**
    * **Purpose**: This page is meant to give the user an overview of what they can do.
    * **Features**:
        * **Username**: The user can see their name in a heading greeting them.
        * **Inleveren**: The user can click on a button to go to the "Inleveren" page
        * **Lenen**: The user can click on a button to go to the "Lenen" page
        * **Beheer**: The user can click on a button to go to the "Beheer" page
    * **Questions**:
        * Should the user be on this page or should there be a header and not a page?

* **Inleveren**
    * **Purpose**: This page is meant to give the user an overview of what they have lend and what they need to return.
    * **Features**:
        * **List of lend items**: The user can see a list of items they have lend.
        * **Per item in list**:
            * **Name**: Name of the item.
            * **Amount**: The user can see how many of the item they have lend.
            * **Lend Period**: The user can see when they lend the item and when it needs to be returned.
                * If the item is late the lend period should be red.
            * **Return CheckBox**: The user can check the box to select the item to return.
                * **Return Amount**: If The user has lent more of the item they can select how many items they want to
                  return.
        * **Return button**: The user can click on a button to return an item.
    * **Questions**:
        * Should the user be able to see the history of lend items?

* **Lenen**
    * TODO

# What needs to be clear after this document:

* What can a user do on each specific page
