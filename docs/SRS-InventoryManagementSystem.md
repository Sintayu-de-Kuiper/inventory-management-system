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

This document goes over scope, users, features and requirements of the Inventory Management System. This document is
meant to aid in development and can be used to get product owner approval. Developers can use this document as a single
source of truth so that everyone has a clear picture of what needs to be done.

### 1.1 Purpose

The systems is meant to solve a handful of problem surrounding the management and lending of school items.

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

One single computer
Windows
No acces to the internet

### System features and requirements

#### Pages

* Login: This is the page where a user needs to scan their card
* Home: Here you can choose between "Inleveren" or "Lenen" (and "Beheer" if the user is a teacher)
* Inleveren: Here you can see what you have lend and what you need to return
* Lenen: TODO ###########

# What needs to be clear after this document:

* What technologies are used with the website
* Which pages the website exist
* What can a user do on each specific page