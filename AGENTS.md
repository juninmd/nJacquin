```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure the creation and maintenance of high-quality, maintainable, and robust AI coding agents within this repository.  Strict adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   All code should be reusable and encapsulated within single, well-defined functions and classes.
*   Avoid duplicating logic across multiple files.
*   When a component or function performs a similar task, implement it in a single place.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize clarity and readability over complex solutions.
*   Use concise and easily understandable code.
*   Avoid unnecessary abstraction or over-engineering.
*   Focus on the essential requirements of each component.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/function should have a single, well-defined purpose.
*   **Open/Closed Principle:**  The system should be extensible without modifying the existing code.  New features should be implemented as new classes/functions.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without changing the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be required to know about methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should be dependent on low-level modules, which in turn depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required.
*   Defer implementation of future requirements to later iterations.
*   Avoid adding unnecessary features or code that isn't immediately useful.

## 5. Code Structure & Best Practices

*   **File Size Limit:**  Each file must not exceed 180 lines of code.
*   **Comments:**  Write clear and concise comments explaining the *why* behind the code, not just the *what*. Focus on the reasoning.
*   **Naming Conventions:** Follow established naming conventions for variables, functions, and classes (e.g., snake_case).
*   **Error Handling:** Implement basic error handling where appropriate, but avoid excessive logging.
*   **Data Structures:** Employ appropriate data structures for efficient data management.
*   **Unit Testing:** Implement comprehensive unit tests for all functions and classes to ensure correctness.  Tests should cover edge cases.
*   **Code Documentation:**  Include a brief API documentation for each class/function, detailing its inputs and outputs.
*   **Maintainability:** Structure the codebase in a logical and easily navigable manner.

## 6. Test Coverage Requirements

*   **Target:**  Aim for at least 80% test coverage across all functions and classes.
*   **Test Types:**  Include unit tests, integration tests, and potentially UI tests (depending on functionality).
*   **Test Case Design:**  Each test case should have a clear purpose and verify a specific aspect of the code.
*   **Test Data:** Use realistic and diverse test data to ensure robustness.

## 7.  Additional Considerations

*   **Algorithm Complexity:** Consider efficiency when designing algorithms.
*   **Security:** Implement basic security measures (e.g., input validation) where necessary.
*   **Version Control:** Utilize a version control system (e.g., Git) for all code changes.
*   **Documentation Updates:**  After implementing changes, update documentation to reflect the new functionality.

## 8.  Specific Requirements (Example - Adapt to the specific Agents.md structure)

*   **Data Input/Output:**  Clearly define the expected data types and formats for input and output.
*   **State Management:** Implement a clear state management mechanism for the agents.
*   **Communication Protocol:** Describe the communication protocol used for interaction.

These guidelines are intended as a starting point.  Regular review and refinement are crucial to ensure the continued quality and effectiveness of the AGENTS.md repository.
```