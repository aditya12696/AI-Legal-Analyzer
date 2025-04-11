# ⚖️ AI-Based Legal Document Analyzer

A chatbot-powered legal assistant that simplifies complex legal documents and provides relevant Indian case law references using AI/NLP.

---

## 📌 Problem Statement
Most Indian citizens struggle to understand legal documents due to heavy legal jargon and lack of access to simplified explanations.

---

## 🎯 Solution
- Upload legal documents (PDF/DOCX)
- Get simplified summaries
- View highlighted clauses
- Ask questions via chatbot
- Receive relevant Indian case law matches

---

## 🔧 Tech Stack

| Layer        | Technology               |
|--------------|--------------------------|
| Frontend     | React.js, Material UI    |
| Backend      | Java, Spring Boot        |
| NLP/AI       | OpenAI API, SpaCy, BERT  |
| Database     | PostgreSQL               |
| Tools        | VS Code, GitHub, Postman |

---

## 🧩 Modules

- `frontend/` - UI for document upload and chatbot interface  
- `backend/` - Spring Boot APIs for file handling, AI/NLP bridge  
- `nlp-engine/` - Scripts for processing legal documents  
- `database/` - PostgreSQL schema & initial dataset  
- `chatbot-interface/` - Custom intents and bot logic  
- `docs/` - Architecture diagrams, PPTs, and documentation

---

## 🚀 How to Run

```bash
# Backend
cd backend/
mvn spring-boot:run

# Frontend
cd frontend/
npm install
npm start

# NLP Scripts
cd nlp-engine/
python process.py
