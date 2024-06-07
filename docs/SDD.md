# Software Design Document: Inventory Management System

## Database Schema

This schema is coming soon and is made with [Mermaid](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)

```mermaid
erDiagram
    USER ||--o{ TRANSACTION: Contains
    TRANSACTION ||--o{ TRANSACTION_ITEM: Contains
    TRANSACTION_ITEM }o--|| ITEM: Contains

    USER {
        int id PK
        string pass_id
        string first_name
        string last_name
        string student_number
        string class_name
        int[] transaction_id FK
    }

    ITEM {
        int id PK
        string name
        boolean is_student_lendable
    }

    TRANSACTION_ITEM {
        int id PK
        int transaction_id FK
        int item_id FK
        int item_quantity
        string transaction_notes
        date start_date
        date end_date
    }

    TRANSACTION{
        int id PK
        int user_id FK
        int[] transaction_item_id FK
        string date
        string type
    }
```
