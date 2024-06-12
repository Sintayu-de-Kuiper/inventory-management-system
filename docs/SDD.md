# Software Design Document: Inventory Management System

## Database Schema

This schema is coming soon and is made with [Mermaid](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)

```mermaid
erDiagram
    USER {
        int UserID PK
        string Name
        string Role
        string Email
        string PasswordHash
        timestamp CreatedAt
        timestamp UpdatedAt
    }

    ITEM {
        int ItemID PK
        string ItemName
        string Barcode
        string Category
        boolean Restricted
        timestamp CreatedAt
        timestamp UpdatedAt
    }

    TRANSACTION {
        int TransactionID PK
        int UserID FK
        string TransactionType
        timestamp TransactionDate
        timestamp CreatedAt
        timestamp UpdatedAt
    }

    TRANSACTIONITEM {
        int TransactionItemID PK
        int TransactionID FK
        int ItemID FK
        timestamp StartDate
        timestamp EndDate
        string Notes
    }

    ADMIN {
        int AdminID PK
        string Name
        string Email
        string PasswordHash
        timestamp CreatedAt
        timestamp UpdatedAt
    }

    USER ||--o{ TRANSACTION : "can make"
    ITEM ||--o{ TRANSACTIONITEM : "can be part of"
    TRANSACTION ||--o{ TRANSACTIONITEM : "can involve"
    ADMIN ||--o{ TRANSACTION : "can view"

    TRANSACTION }|--|| USER : "is made by"
    TRANSACTIONITEM }|--|| TRANSACTION : "belongs to"
    TRANSACTIONITEM }|--|| ITEM : "involves"
```
