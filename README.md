# **Human Activity Recognition (HAR) System**

This repository contains a demo implementation of a scalable, ontology-based, fully probabilistic Human Activity Recognition (HAR) system. The system is based on the framework described in the paper:

**"An Ontology-Based, Fully Probabilistic, Scalable Method for Human Activity Recognition" by Pouya Foudeh and Naomie Salim**

---

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [References](#references)

---

## **Introduction**

This project demonstrates a Human Activity Recognition system that handles uncertainty and scalability by leveraging probabilistic ontologies and relational databases. Unlike traditional methods that select only the most probable activity, this system retains multiple candidate activities with associated probabilities, improving flexibility and accuracy in recognizing human activities from sensor data.

The implementation follows the framework described in the referenced paper, providing a practical example of how to apply probabilistic reasoning and ontological modeling in HAR systems.

---

## **Features**

- **Probabilistic Reasoning**: Handles uncertainties in sensor data by maintaining probabilities for multiple activity candidates.
- **Ontology-Based Modeling**: Uses ontologies to represent activities, sensors, and their relationships.
- **Scalable Architecture**: Employs relational databases for efficient storage and processing of large datasets.
- **Modular Design**: Components are organized into modules for sensor data collection, preprocessing, reasoning, and user interaction.
- **Customizable Axioms**: Allows users to define or adjust assertion axioms that relate low-level observations to high-level activities.
- **User Interface**: Provides a simple GUI for monitoring recognized activities and editing axioms.

---

## **Architecture**

The system is composed of the following main components:

1. **Sensor Data Collection**: Simulates or interfaces with sensors to collect raw data.
2. **Data Preprocessing**: Cleans data, extracts features, and classifies low-level activities with associated probabilities.
3. **Ontology Definition and Population**: Defines the ontology schema and populates it with instances based on the sensor data.
4. **Probabilistic Reasoning**: Applies assertion axioms to infer high-level activities from low-level observations.
5. **Database Interaction**: Stores data and axioms in a relational database, enforcing probabilistic constraints.
6. **User Interface**: Provides visualization of recognized activities and tools for editing assertion axioms.

**Workflow Overview:**

- **Data Collection**: Sensors collect raw data at regular intervals.
- **Preprocessing**: Data is cleaned and features are extracted. Low-level activities are classified probabilistically.
- **Ontology Population**: Instances representing observations are added to the ontology.
- **Reasoning**: Probabilistic reasoning is performed to infer high-level activities.
- **Storage**: Data and inference results are stored in a relational database.
- **User Interaction**: Users can view recognized activities and adjust assertion axioms through the GUI.

---

## **Installation**

### **Prerequisites**

- **Python 3.7 or higher**
- **SQLite** (or another relational database system)
- **Python Packages**:
  - `owlready2`
  - `tkinter` (usually included with Python)
  - `numpy`
  - `scikit-learn` (if implementing actual classification)
- **Sensors or Simulated Data**: Actual sensors or simulated data for testing.

### **Steps**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/har-system.git
   cd har-system
   ```

2. **Create a Virtual Environment (Optional but Recommended)**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up the Database**

   - The application uses SQLite by default.
   - The `DatabaseManager` class in `database.py` will create the necessary tables upon initialization.

5. **Configure the Application**

   - Edit `config.py` if necessary to adjust settings such as database name or sensor configurations.

---

## **Usage**

### **Running the Application**

To start the HAR system, run the main script:

```bash
python main.py
```

This will initiate the sensor data collection, preprocessing, reasoning, and start the user interface.

### **User Interface**

- **Activity Monitor**: Displays the current recognized high-level activity and confidence level.
- **Start/Stop Buttons**: Controls the recognition process.
- **Axiom Editor**: Accessed separately to edit assertion axioms.

### **Editing Assertion Axioms**

Run the axiom editor script:

```bash
python axiom_editor.py
```

Use the GUI to:

- Select low-level and high-level activities.
- Set the probability that the low-level activity implies the high-level activity.
- Save axioms to the database.

### **Stopping the Application**

- Use `Ctrl+C` in the terminal to stop the application gracefully.
- The application will save the ontology and close database connections upon exit.

---

## **Project Structure**

```
har-system/
├── sensor_collection.py       # Sensor data collection module
├── data_preprocessing.py      # Data preprocessing and feature extraction
├── feature_extraction.py      # Feature extraction functions
├── classification.py          # Low-level activity classification
├── ontology_definition.py     # Ontology schema definition
├── ontology_population.py     # Ontology population with instances
├── probabilistic_reasoning.py # Probabilistic reasoning and inference
├── assertion_axioms.py        # Assertion axioms definition and loading
├── database.py                # Database interaction and management
├── ui.py                      # User interface for activity monitoring
├── axiom_editor.py            # GUI for editing assertion axioms
├── main.py                    # Main application script
├── config.py                  # Configuration settings
├── requirements.txt           # Python package dependencies
├── README.md                  # Project documentation
└── LICENSE                    # License information
```

---

## **Configuration**

The `config.py` file contains configuration settings for the application.

```python
# config.py

DATABASE_NAME = 'har_database.db'
SENSOR_IDS = [1, 2, 3, 4]
SAMPLING_RATE = 0.33  # Time in seconds between samples
ONTOLOGY_FILE = 'har_ontology.owl'
```

Adjust these settings as needed for your environment.

---

## **Dependencies**

The required Python packages are listed in `requirements.txt`.

```txt
owlready2
numpy
scikit-learn
```

Install them using:

```bash
pip install -r requirements.txt
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

- **Paper**: Pouya Foudeh and Naomie Salim, *An Ontology-Based, Fully Probabilistic, Scalable Method for Human Activity Recognition*. [Link to Paper](#) (Replace with actual link if available)
- **Owlready2 Documentation**: [https://owlready2.readthedocs.io](https://owlready2.readthedocs.io)
- **SQLite Documentation**: [https://www.sqlite.org/docs.html](https://www.sqlite.org/docs.html)

---

## **Acknowledgments**

We would like to thank Pouya Foudeh and Naomie Salim for their foundational work in probabilistic ontology-based human activity recognition, which this project is based upon.

---

## **Contact**

For questions or suggestions, please open an issue or contact [your.email@example.com](mailto:your.email@example.com).

---

*This README was generated to provide comprehensive guidance on setting up and using the HAR system based on the framework described in the referenced paper.*
