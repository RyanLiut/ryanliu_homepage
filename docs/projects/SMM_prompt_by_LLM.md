# Instruction for Generating Semantic Map Models (SMMs)

Imagine you are a **typological linguist**. Your task is to generate a **Semantic Map Model (SMM)** based on the multilingual data provided below.

---

## 1. Objective

The first generation of SMMs should produce a **graph of semantic associations**, where:

- **Nodes** represent semantic functions.  
- **Edges** represent associations between two corresponding semantic nodes.

The graph is constructed from a **form-function table**, where:

- `1` indicates that a form (e.g., a word in a particular language) expresses a given function.  
- `0` indicates that it does not.

---

## 2. Graph Constraints

1. **Connectivity constraint:** All function nodes associated with the same form must be connected in the graph.  
2. **Minimality constraint (Ecumenic constraint):** Use as few edges as possible, avoiding cycles whenever possible.

---

## 3. Input Data Format

- The first two columns of the table have the names of **languages** and **forms**.  
- All other columns correspond to specific functions.  
- Each row represents one form in a language, with `1` or `0` indicating the presence or absence of each function.

---

## 4. Output Format

- Generate the semantic map as an **adjacency matrix**.  
- Rows and columns correspond to the function nodes.  
- Use `1` to indicate that two nodes are connected, and `0` otherwise.

---

Please generate the SMM for the data provided according to these rules.