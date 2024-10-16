# Scam Protect Backend

### [Dev Post](https://devpost.com/software/scam-protect?ref_content=my-projects-tab&ref_feature=my_projects)

### Functionality

The Scam Protect Backend is the core engine of the platform that facilitates the connection between the frontend, extension, and databases. It manages data processing, API interactions, and server-side logic to support the voting system, scam identification, and real-time user interaction.

### How to Use:

1. **Download Required Repositories**:

   - Clone, fork, or download the frontend repository: [Scam Protect Frontend](https://github.com/UmarRS/scam_prot_vote)
   - Clone, fork, or download the extension repository: [Scam Protect Extension](https://github.com/UmarRS/scam_prot)

   Refer to their respective repositories for further instructions on setup.

2. **Install Dependencies**:

   - Run `npm install` to install the necessary packages.

3. **Add Environment Variables**:

   - Run `npm install dotenv`
   - Create a `.env` file in the root directory of the project.
   - Add the following keys to the `.env` file:
     ```
     GEMINI_API_KEY=YOUR API KEY
     MONGODB_URI=YOUR MONGODB URI
     ```
   - The collections in the database will auto-populate; however, you need to manually create and add the `keys` database.

4. **Start the Server**:
   - Run the development server with the command: `npm run dev`.

---

### Built With

- Express.js
- Gemini API
- Google Cloud
- JavaScript
- MongoDB
- Node.js
