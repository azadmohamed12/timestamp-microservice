# Timestamp Microservice API

A simple timestamp microservice built with Node.js and Express that returns Unix and UTC timestamps for given dates.  
It handles both current date requests and user-supplied dates (including Unix timestamps and ISO date strings).

---

## Features

- Returns the current timestamp in Unix and UTC format at `/api`
- Returns Unix and UTC timestamps for a date string or Unix timestamp at `/api/:date`
- Returns an error message for invalid dates

---

## Usage

### 1. Get the current timestamp

```bash
GET /api
