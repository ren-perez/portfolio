# Assembly + Lab Performance Monitor

**Tableau dashboard** with two pages, focused on **assembly line performance monitoring** and **component/lab testing insights** for a chip & hardware company. Including a **post-production quality testing** makes the dashboard much more valuable because it connects **R&D experiments** with **real-world product performance once scaled**. That way, the business can close the loop between design, production, and field readiness.

---

## 1. Business Requirements

These are the **core goals** the dashboard should meet:

- **Real-time visibility** into assembly line performance (uptime, throughput, downtime), efficiency, resource use, and production bottlenecks..
- **Identify bottlenecks** in the manufacturing process (stations, shifts, defects).
- **Monitor resource utilization** (labor, machines, energy usage).
- **Track yield and quality** (good units vs defective units).
- **Support decision-making** for operations (plant managers, engineers, executives).
- **Enable R&D feedback loop** (testing data from labs feeds into production improvements).
- Enable **quality monitoring** both during production (line defects) and after production (QC sampling).
- **Facilitate continuous improvement** via KPIs (OEE, defect rates, test success rates) at the operational detail level.
- **Provide drill-down capability** (from factory-wide to station/part/test-level detail).
- Improve **supply chain alignment** by tying material availability to production success.

---

## 2. Stakeholders & Their Needs

### a) **Operations Manager**

- Wants: Uptime, downtime causes, production throughput, staffing efficiency.
- Value: Optimize scheduling, reduce delays, maintain output goals.

### b) **Manufacturing/Process Engineers**

- Wants: Defect classification, yield per station, root cause analysis of failures.
- Value: Pinpoint recurring issues and fix them quickly.

### c) **Supply Chain / Logistics**

- Wants: Inventory availability, material shortages, delays impacting line performance.
- Value: Align supply and demand, prevent stockouts or overstock.

### d) **Quality Control (QC)**

- Wants: Pass/fail test rates, failure categories, time-to-detect defects.
- Value: Improve testing protocols, ensure reliable chip/hardware quality.

### e) **R&D / Lab Teams**

- Wants: Component test performance (e.g., new batteries, power supplies, chips), reliability under stress, comparison against benchmarks.
- Value: Inform design iterations, validate new designs before scaling.

### f) **Executives**

- Wants: High-level KPIs: production volume, costs, efficiency, yield.
- Value: Strategic decisions on investments, scaling, partnerships.

---

## 3. Data Inputs That Unlock Value

To **level up business decisions**, think in terms of **operational + logistics + test data**:

### **Page 1: Assembly Line Performance**

- **Production KPIs**
    - Units produced per hour/shift/day
    - Throughput (target vs actual)
    - Cycle time per station
- **Efficiency Metrics**
    - OEE (Overall Equipment Effectiveness)
    - Uptime/Downtime with reason codes
    - Machine utilization %
- **Quality Metrics**
    - Yield (good vs defective units)
    - Scrap/rework rates
    - Defects by station/operator/time
- **Resource Data**
    - Worker allocation, shift coverage
    - Energy consumption per station
- **Supply Chain Tie-in**
    - Material availability & shortages
    - Lead times affecting line performance

### **Page 2: Lab/Testing Insights**

- **Component Test Results**
    - Pass/fail rate for prototypes (batteries, chips, power supplies)
    - Stress test outcomes (temperature, power draw, reliability hours)
    - Time-to-failure distributions
- **Comparative Analytics**
    - Performance vs design targets
    - New component vs previous generation
- **Failure Analysis**
    - Failure mode frequency (thermal, voltage, defects)
    - Correlation with production batch or supplier
- **R&D Feedback Loop**
    - Link test failures back to specific assembly processes
    - Insights into which changes improve yield in mass production

## **Data Inputs (Refined)**

### **Page 1: Assembly Line**

- **Production Metrics:** Units/hour, throughput vs target, cycle time by station.
- **Efficiency:** OEE, uptime/downtime, utilization %.
- **Quality:** Yield, scrap/rework rate, inline defect detection.
- **Resources:** Worker allocation, shift variance, energy usage.
- **Supply Chain:** Materials on-hand, shortages, delayed inputs.

### **Page 2: Lab + Post-Production Testing**

- **Lab (R&D Prototypes):**
    - Pass/fail rate on new chip/battery designs.
    - Stress test results (thermal, electrical load, endurance).
    - Failure distributions (time-to-failure, voltage tolerance).
    - Benchmark vs prior generation.
- **Post-Production QC (Mass-Produced Units):**
    - Random sample testing pass/fail %.
    - Defect categories (thermal, electrical, assembly defects).
    - MTBF (Mean Time Between Failures).
    - Comparison of **production batches vs defect rate**.
    - Supplier correlation (e.g., higher failures tied to specific component suppliers).
- **Cross-Insights:**
    - R&D expectations vs production QC reality.
    - Trends: Do lab-identified risks (like thermal instability) also appear in mass production?
    - Feedback loop: Which issues should R&D redesign vs which are caused by assembly processes.

---

## 4. Dashboard Page Design (High-Level)

### **Page 1: Assembly Line Overview**

- **Top Row (KPIs):**
    - Throughput (units/day vs target)
    - OEE (Overall Equipment Effectiveness)
    - Yield % (good vs defective units)
    - Scrap/Rework %
- **Middle (Visuals):**
    - Heatmap of stations (highlight bottlenecks & downtime).
    - Trend line of production vs demand forecast.
- **Bottom (Drill-Down):**
    - Downtime Pareto chart (most common causes).
    - Material shortages vs downtime correlation.

---

### **Page 2: Lab & Testing (R&D + QC)**

- **Top Row (KPIs):**
    - Prototype Test Success Rate
    - Post-Production QC Pass Rate
    - MTBF (Mean Time Between Failures)
    - Defect Rate by Category
- **Middle (Visuals):**
    - Side-by-side bar: Lab vs QC Pass/Fail %
    - Trend line: Reliability over time (lab vs production units)
    - Scatter: Voltage/Temperature vs Failures (correlation analysis)
- **Bottom (Root Cause & Insights):**
    - Pareto of failure categories (thermal, assembly, supplier defect).
    - Batch/Supplier defect correlation heatmap.
    - Drill-down option → click on defect type to see which production lines/batches are affected.

---

This setup makes the dashboard useful at **three levels**:

1. **Daily ops monitoring** (managers).
2. **Quality oversight** (QC & engineers).
3. **Strategic design decisions** (execs & R&D).

---

# **5. Storytelling Flow (Decision Journey)**

### **Scenario**:

The VP of Operations, along with a QC Engineer and an R&D Lead, meets to review production performance and quality trends for a new chip product line. They use the dashboard to identify issues, drill down, and decide next steps.

---

## **Page 1: Assembly Line Overview**

1. **Start with Top-Level KPIs (At a Glance)**
    - Stakeholders see throughput vs target, OEE, and yield.
    - Example: Throughput is 8% below target, and yield has dropped by 3% this week.
2. **Identify Where the Problem Is**
    - Heatmap of assembly stations shows Line 3 (Testing & Packaging) with high downtime.
    - A trend chart reveals multiple unplanned stops during night shifts.
3. **Investigate Root Cause**
    - Drill into downtime Pareto chart → top causes: “Material Shortage” and “Sensor Calibration Errors.”
    - Cross-check with material supply chart → shortage of cooling components last week aligns with downtime spikes.
4. **Decision Trigger**
    - Operations Manager: Allocates extra inventory buffer for cooling components.
    - Manufacturing Engineer: Schedules preventive maintenance for faulty testing sensors.

**Outcome from Page 1:**

Operations team fixes immediate assembly bottleneck (supply + sensor issue). But they notice defects from Line 3 feed into QC results — they need to check Page 2 for deeper quality issues.

---

## **Page 2: Lab & Testing (R&D + Post-Production QC)**

1. **Compare Lab vs Production Testing Results**
    - KPI cards show: Lab prototype pass rate = 94%, but Post-production QC pass rate = 85%.
    - Gap suggests production is introducing new issues not seen in lab tests.
2. **Explore Defect Distribution**
    - Pareto chart shows “Thermal Instability” as the #1 defect in QC samples.
    - Scatter plot of temperature vs failures confirms production units fail more often above 75°C.
3. **Check Supplier/Batch Correlation**
    - Heatmap links thermal failures to Batch 102 supplied by Vendor X.
    - QC Engineer realizes only units with Vendor X’s cooling module fail consistently.
4. **Validate Against R&D Expectations**
    - R&D Lead notes that lab tests predicted risk of overheating above 80°C, but QC shows failures at 75°C — earlier than expected.
    - Conclusion: Vendor X’s component quality is below spec, amplifying the thermal risk.
5. **Decision Trigger**
    - R&D: Updates testing protocol to simulate real production conditions at 70–75°C.
    - Supply Chain: Flags Vendor X for investigation, secures alternative supplier.
    - Executives: Approve temporary production slowdown to prevent large-scale defective shipments.

**Outcome from Page 2:**

Decision is made to (a) adjust R&D test ranges, (b) hold Vendor X accountable, and (c) stabilize quality before ramping up production.

---

## **Key Takeaway from Storytelling Flow**

The dashboard drives a **narrative from “symptom → root cause → decision”**:

- Page 1 → Detect production inefficiency + assembly bottlenecks.
- Page 2 → Validate with QC & lab data → confirm design vs supplier vs process issue.
- Final → Cross-functional action plan (Ops + QC + R&D + Supply Chain).

---

# **6. Core Data Domains Needed**

To support the 2-page dashboard (Assembly Line + Lab/Testing), we need data from 3 main domains:

1. **Production / Assembly Line Data** → line operations, throughput, downtime, defects.
2. **Quality Control (Post-Production) Data** → sample testing, defect categories, MTBF.
3. **Lab/R&D Testing Data** → prototype tests, stress tests, benchmark results.
4. **Supply Chain Data** → deliveries, suppliers, inspection results.

---

# **7. Mock Data Structures (Tables)**

### **A. Production Data (Assembly Line)**

- **Table: `production_runs`**
    
    
    | Field | Type | Description |
    | --- | --- | --- |
    | timestamp | datetime | When batch/station event occurred |
    | line_id | string | Assembly line identifier (e.g., Line 1, Line 2) |
    | station_id | string | Station/work cell ID |
    | shift | string | Shift (Day/Night) |
    | operator_id | string | Worker/operator on station |
    | units_produced | int | Units produced in that time window |
    | units_defective | int | Units found defective |
    | cycle_time_sec | float | Average cycle time per unit |
    | downtime_minutes | float | Downtime in period |
    | downtime_reason | string | e.g., "Sensor Error", "Material Shortage" |
    | energy_kwh | float | Energy consumed |

---

### **B. Post-Production Quality Testing Data**

- **Table: `qc_tests`**
    
    
    | Field | Type | Description |
    | --- | --- | --- |
    | test_id | string | Unique QC test ID |
    | product_id | string | Serial number of tested product |
    | batch_id | string | Production batch identifier |
    | supplier_id | string | Supplier of key component (if tracked) |
    | test_date | datetime | When QC test was done |
    | test_type | string | Type (Thermal, Voltage, Functional, Stress) |
    | test_result | string | PASS / FAIL |
    | defect_category | string | If fail: “Thermal Instability”, “Assembly Fault” |
    | mtbf_hours | float | Estimated Mean Time Between Failures |
    | tested_by | string | QC operator/lab |

---

### **C. Lab / R&D Prototype Testing Data**

- **Table: `lab_prototype_tests`**
    
    
    | Field | Type | Description |
    | --- | --- | --- |
    | prototype_id | string | ID of experimental chip/battery |
    | design_version | string | R&D design identifier (e.g., v1.2) |
    | supplier_id | string | Supplier used for components |
    | test_date | datetime | When lab test ran |
    | stress_type | string | e.g., Thermal, Voltage, Durability |
    | stress_value | float | e.g., °C, Volts, Hours under load |
    | test_result | string | PASS / FAIL |
    | failure_mode | string | Root cause of failure |
    | benchmark_target | float | Expected benchmark value |
    | actual_result | float | Actual performance outcome |

---

### **D. Supply Chain Data**

- **Table: `materials_supply`**
    
    
    | Field | Type | Description |
    | --- | --- | --- |
    | material_id | string | Component/part ID |
    | supplier_id | string | Supplier |
    | delivery_date | datetime | Date material was received |
    | quantity_delivered | int | Units delivered |
    | quality_check | string | PASS / FAIL on incoming inspection |

---

## **Key Relationships**

- `production_runs.batch_id` ↔ `qc_tests.batch_id` (connects production with QC outcomes).
- `qc_tests.supplier_id` ↔ `materials_supply.supplier_id` (links defects with suppliers).
- `lab_prototype_tests.design_version` ↔ R&D vs QC comparison (new designs vs mass production).

---

# **8. Tableau-Friendly Design**

For this demo, I will use **3–4 flat CSV/Excel files** (easy to import into Tableau Public):

1. `production_runs.csv`
2. `qc_tests.csv`
3. `lab_prototype_tests.csv`
4. `materials_supply.csv`

Each file should have **5k–20k rows of mock data** (enough to show trends, but not huge).

---

# **9. Example Mock Data Points**

- Production: Line 3 has frequent downtime due to “Sensor Error” → causes defect spikes.
- QC: Batch 102 from Supplier X → high fail rate in thermal tests.
- Lab: Prototype v1.2 predicted failures at 80°C, but QC shows failures at 75°C.

That way, when you load into Tableau, you’ll see **exactly the story flow we designed earlier**.

---

Here’s a **full list of requirements** you’d need for the mock data generator to really support your 2-page Tableau dashboard storytelling:

---

## Requirements for Storytelling-Ready Mock Data

### 1. **Time & Frequency**

- Data should be **continuous and granular** (e.g., per minute or per 5 minutes for assembly lines, per test run for quality/labs).
- Cover **months of data**, not just days, so Tableau shows **clear trends and seasonality**.
- Allow multiple **shifts per day** (morning/afternoon/night).

---

### 2. **Assembly Line Data**

- **Production volume**: number of units produced per time period.
- **Yield rate**: % of good vs defective units. Needs **variation over time** (not flat).
- **Downtime events**: include random machine breakdowns, maintenance windows, power outages.
- **Cycle time per unit**: variable, with improvement trends over weeks.
- **Rework count**: how many items sent back for fixes.

---

### 3. **Operational Context**

- **Machines & lines**: multiple assembly lines (Line A, Line B, etc.), each with different performance.
- **Operators/workers**: variation by team/shift to simulate human performance.
- **Suppliers**: add component delivery delays → impact production (storytelling for logistics).

---

### 4. **Post-Production Quality Testing (Lab Data)**

- **Test batches**: chips/batteries/power units tested daily.
- **Test parameters**: temperature tolerance, power efficiency, clock speed, safety score.
- **Pass/Fail outcomes**: with % pass that fluctuates by batch and part type.
- **Root cause tags**: (e.g., “Overheating,” “Power fluctuation,” “Assembly defect”).
- **R&D experiments**: new product versions with higher variability.

---

### 5. **Logistics & Supply Chain (optional, but high-value)**

- **Raw material arrival times** vs **planned schedule**.
- **Inventory levels** (low inventory causes slowdowns).
- **Lead times** and **supplier defect rates**.

---

### 6. **Storytelling Features**

- **Trends over time**: show productivity improvement or decline.
- **Events**: simulate spikes (e.g., “new product launch,” “machine upgrade,” “supplier delay”).
- **Comparisons**: multiple lines, multiple plants, multiple test labs.
- **KPIs**: generate high-level summary metrics (OEE, yield, scrap rate).

---

### 7. **Data Structure**

You’ll likely need **two related tables**:

1. `assembly_line_data` → high-frequency, operational data (per shift or per minute).
2. `quality_testing_data` → batch-level results from lab/testing.

These can be **joined** in Tableau for full storytelling (e.g., see how assembly line issues affect test failures).

---

⚡ **Summary:**

The script generator for true Tableau storytelling must:

- produce **granular, continuous time-series data** (not just one row per day),
- simulate **natural variability, trends, and events**,
- include both **assembly line ops + quality lab results**,
- and allow **aggregation** (e.g., per line, per plant, per supplier).

---