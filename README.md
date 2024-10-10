# **Human Activity Recognition (HAR) System**

Welcome to the **Human Activity Recognition (HAR) System** repository. This project is a demonstration of a scalable, ontology-based, fully probabilistic Human Activity Recognition system, implemented with modern web technologies and designed with a focus on high-quality, responsive user interfaces.

---

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Admin Dashboard](#admin-dashboard)
  - [User Dashboard](#user-dashboard)
  - [Axiom Editor](#axiom-editor)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## **Introduction**

This project showcases a Human Activity Recognition (HAR) system that addresses uncertainty and scalability challenges by leveraging probabilistic ontologies and relational databases. The system maintains multiple candidate activities with associated probabilities, enhancing flexibility and accuracy in recognizing human activities from sensor data.

**Key Highlights:**

- **Modern UI/UX Design:** The application features a sleek, responsive interface with interactive elements and smooth hover effects, enhancing user engagement.
- **Responsive Design:** Ensures optimal viewing experience across a wide range of devices, from desktops to mobile phones.
- **High-Quality Codebase:** Structured with best practices in mind, making the codebase maintainable and scalable.

---

## **Features**

- **Probabilistic Reasoning:** Handles uncertainties in sensor data by maintaining probabilities for multiple activity candidates.
- **Ontology-Based Modeling:** Uses ontologies to represent activities, sensors, and their relationships.
- **Scalable Architecture:** Employs relational databases for efficient storage and processing of large datasets.
- **Data Smoothing:** Implements probabilistic data smoothing techniques to enhance prediction accuracy.
- **Customizable Axioms:** Allows users to define or adjust assertion axioms that relate low-level observations to high-level activities.
- **Modern User Interface:** Features a responsive design with interactive buttons, hover effects, and intuitive navigation.
- **Real-Time Data Streaming:** Provides real-time updates of recognized activities and sensor data.
- **Admin Dashboard:** Offers administrative functionalities, including system control and axiom management.
- **User Dashboard:** Presents users with current activity recognition in an accessible format.

---

## **Demo**

[![HAR System Demo](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

*Click the image above to watch a demo of the HAR system in action.*

---

## **Architecture**

The system is composed of the following main components:

1. **Sensor Data Collection:** Simulates or interfaces with sensors to collect raw data.
2. **Data Preprocessing:** Cleans data, extracts features, and classifies low-level activities with associated probabilities.
3. **Ontology Definition and Population:** Defines the ontology schema and populates it with instances based on the sensor data.
4. **Probabilistic Reasoning:** Applies assertion axioms to infer high-level activities from low-level observations.
5. **Database Interaction:** Stores data and axioms in a relational database, enforcing probabilistic constraints.
6. **User Interface:** Provides visualization of recognized activities and tools for editing assertion axioms.
7. **Real-Time Streaming:** Implements WebSocket connections for real-time data updates.

**Workflow Overview:**

- **Data Collection:** Sensors collect raw data at regular intervals.
- **Preprocessing:** Data is cleaned and features are extracted. Low-level activities are classified probabilistically.
- **Ontology Population:** Instances representing observations are added to the ontology.
- **Reasoning:** Probabilistic reasoning is performed to infer high-level activities.
- **Storage:** Data and inference results are stored in a relational database.
- **User Interaction:** Users can view recognized activities and adjust assertion axioms through the responsive web interface.

---

## **Installation**

### **Prerequisites**

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **SQLite** (or another relational database system)
- **TypeScript** (Installed globally or via npm)

### **Steps**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/har-system.git
   cd har-system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up the Database**

   - The application uses SQLite by default.
   - The `DatabaseManager` class in `databaseManager.ts` will create the necessary tables upon initialization.
   - You can populate the database with fake data using the provided script:

     ```bash
     sqlite3 har_database.db < populate_fake_data.sql
     ```

4. **Configure the Application**

   - Copy `config/config.example.ts` to `config/config.ts`:

     ```bash
     cp src/config/config.example.ts src/config/config.ts
     ```

   - Adjust settings in `config.ts` as needed.

5. **Build the Application**

   ```bash
   npm run build
   ```

6. **Start the Application**

   ```bash
   npm run dev
   ```

---

## **Usage**

### **Running the Application**

- **Development Mode:**

  ```bash
  npm run dev
  ```

- **Production Mode:**

  ```bash
  npm run build
  npm run serve
  ```

### **Admin Dashboard**

- Access the admin dashboard at `http://localhost:3000/admin`.
- **Features:**
  - **Start/Stop System:** Control the HAR system's data processing.
  - **Real-Time Sensor Data:** View live updates of sensor readings and activity probabilities.
  - **Edit Axioms:** Modify assertion axioms via an intuitive interface with responsive forms and hover effects.

### **User Dashboard**

- Access the user dashboard at `http://localhost:3000/`.
- **Features:**
  - **Current Activity Display:** Shows the recognized high-level activity with smooth transitions and animations.
  - **Responsive Design:** Adapts to various screen sizes, providing an optimal viewing experience on any device.

### **Axiom Editor**

- Accessible from the admin dashboard.
- **Features:**
  - **Interactive Forms:** Add or modify axioms with real-time validation.
  - **Modern UI Elements:** Utilize sliders, dropdowns, and toggle switches with hover and focus effects.

---

## **Project Structure**

```
har-system/
├── src/
│   ├── classification/
│   ├── config/
│   │   ├── config.example.ts
│   │   └── config.ts
│   ├── context/
│   ├── database/
│   ├── ontology/
│   ├── preprocessing/
│   ├── reasoning/
│   ├── sensors/
│   ├── services/
│   ├── ui/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── UserDashboard.tsx
│   │   │   ├── AxiomEditor.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── index.tsx
│   └── main.tsx
├── public/
│   └── index.html
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── LICENSE
```

---

## **Configuration**

The `config.ts` file contains configuration settings for the application.

```typescript
// src/config/config.ts

export const DATABASE_NAME = 'har_database.db';
export const SENSOR_IDS = [1, 2, 3, 4];
export const SAMPLING_RATE = 0.33; // Time in seconds between samples
export const ONTOLOGY_FILE = 'har_ontology.owl';
export const WEBSOCKET_PORT = 8080;
```

Adjust these settings as needed for your environment.

---

## **Dependencies**

The project relies on modern web technologies and libraries, including:

- **React** with **TypeScript**
- **Vite** for fast development builds
- **Tailwind CSS** for utility-first styling
- **TypeORM** for database interaction
- **WebSockets** for real-time data streaming
- **React Router** for client-side routing
- **Additional packages:** `react-router-dom`, `ws`, `typeorm`, `sqlite3`, etc.

Install all dependencies using:

```bash
npm install
```

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -am 'Add a new feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **References**

- **Paper:** Pouya Foudeh and Naomie Salim, *An Ontology-Based, Fully Probabilistic, Scalable Method for Human Activity Recognition*. [Access the Paper](https://arxiv.org/pdf/2109.02902)
- **React Documentation:** [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **TypeScript Documentation:** [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- **Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Vite Documentation:** [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- **TypeORM Documentation:** [https://typeorm.io/#/](https://typeorm.io/#/)

---

## **Acknowledgments**

We would like to thank Pouya Foudeh and Naomie Salim for their foundational work in probabilistic ontology-based human activity recognition, which inspired this project.

---

## **Contact**

For questions, suggestions, or support, please open an issue or contact [your.email@example.com](mailto:your.email@example.com).

---

*This README provides comprehensive guidance on setting up and using the HAR system based on the framework described in the referenced paper, with a focus on modern UI/UX design and high-quality code standards.*

---

# **Screenshots**

*(Note: Replace the placeholder text with actual screenshots of your application)*

### **Admin Dashboard**

![Admin Dashboard Screenshot](screenshots/admin_dashboard.png)

- **Features:**
  - Start/Stop system controls with responsive buttons.
  - Real-time sensor data display with hover effects.
  - Navigation links to other admin functionalities.

### **User Dashboard**

![User Dashboard Screenshot](screenshots/user_dashboard.png)

- **Features:**
  - Displays the current recognized activity.
  - Responsive layout adapting to different screen sizes.
  - Smooth transitions and animations.

### **Axiom Editor**

![Axiom Editor Screenshot](screenshots/axiom_editor.png)

- **Features:**
  - Interactive form for adding/editing axioms.
  - Real-time validation and feedback.
  - Modern UI elements with focus and hover effects.

---

# **Modern UI Elements**

- **Responsive Buttons:**

  - Buttons adjust their size and layout based on the device's screen size.
  - Hover effects provide visual feedback, enhancing user interaction.

  ```css
  /* Example Tailwind CSS classes for buttons */
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Hover Me
  </button>
  ```

- **Interactive Forms:**

  - Input fields and controls are designed for ease of use.
  - Focus states and validation messages improve the user experience.

- **Navigation Menus:**

  - Responsive navigation that collapses into a hamburger menu on smaller screens.
  - Smooth animations enhance the aesthetic appeal.

---

# **Responsive Design**

The application is built with mobile-first principles, ensuring accessibility and usability across various devices.

- **Grid Layouts:**

  - Uses CSS grids and flexbox for flexible layouts.
  - Components rearrange themselves based on screen size.

- **Media Queries:**

  - Tailwind CSS simplifies the use of media queries.
  - Adjusts font sizes, margins, and paddings for optimal readability.

---

# **Hover Effects**

Interactive elements incorporate hover effects to provide immediate feedback.

- **Button Hover Effects:**

  - Change in background color or shadow on hover.
  - Indicates that the element is clickable.

- **Link Underlines:**

  - Underlines appear when hovering over links, signaling interactivity.

---

# **Future Enhancements**

- **Authentication and Authorization:**

  - Implement secure authentication mechanisms.
  - Role-based access control for admin and user functionalities.

- **Advanced Analytics:**

  - Include charts and graphs for data visualization.
  - Historical data analysis and reporting.

- **Integration with Real Sensors:**

  - Interface with actual sensor hardware for real-world deployment.
  - Expand support for various sensor types.

---

# **Getting Help**

If you encounter any issues or have questions, please:

- Check the [Issues](https://github.com/mcochranca/HAR/issues) section to see if the problem has already been reported.
- Open a new issue with detailed information about the problem.
- Contact the maintainer at [mcochran@sagelyf.com](mailto:mcohran@sagelyf.com) for direct assistance.

---

---

<div align="center">

[Home](Home) • [Getting Started](Getting-Started) • [Project Overview](Project-Overview) • [Contributing](Contributing) • [FAQ](FAQ)

[![GitHub stars](https://img.shields.io/github/stars/mcochranca/HAR?style=social)](https://github.com/mcochranca/HAR/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mcochranca/HAR?style=social)](https://github.com/yourusername/har-system/network/members)

[![Twitter Follow](https://img.shields.io/twitter/follow/igeniusly?style=social)](https://twitter.com/igeniusly)

<sub>© 2023 HAR System Project. All rights reserved.</sub>

</div>

