import React, { useMemo, useState } from "react";
import { FiMessageCircle, FiShield } from "react-icons/fi";
import MedicineSearch from "./MedicineSearch";
import MedicineStats from "./MedicineStats";
import MedicineCard from "./MedicineCard";
import MedicineModal from "./MedicineModal";
import MedicalDisclaimer from "./MedicalDisclaimer";
import "./css/Medicine.css";

const MEDICINES = [
  {
    id: "m1",
    name: "Amoxicillin",
    category: "Antibiotic",
    uses: ["Bacterial throat infections", "Sinus infections", "Skin infections"],
    effects: ["Inhibits bacterial cell wall synthesis"],
    side_effects: ["Nausea", "Mild rash", "Stomach upset", "Diarrhea", "Headache"],
    alternatives: ["Azithromycin", "Cephalexin", "Doxycycline"],
    warnings: ["Complete full course", "Avoid self-medication", "Tell doctor about penicillin allergy"],
    description: "A penicillin-type antibiotic used to treat bacterial infections.",
    dosage_info: "Common adult range: 250mg to 500mg every 8 hours as prescribed.",
    interactions: ["Warfarin", "Methotrexate", "Allopurinol"],
    created_at: "2026-02-17",
  },
  {
    id: "m2",
    name: "Atorvastatin",
    category: "Statin",
    uses: ["Lower LDL cholesterol", "Reduce cardiovascular risk"],
    effects: ["Blocks HMG-CoA reductase enzyme"],
    side_effects: ["Muscle pain", "Constipation", "Nausea", "Joint pain", "Fatigue"],
    alternatives: ["Rosuvastatin", "Simvastatin", "Pravastatin"],
    warnings: ["Avoid grapefruit excess", "Monitor liver enzymes"],
    description: "A statin medication used to lower cholesterol and support heart health.",
    dosage_info: "Typical dose: 10mg to 40mg once daily based on lipid profile.",
    interactions: ["Clarithromycin", "Cyclosporine", "Gemfibrozil", "Grapefruit juice"],
    created_at: "2026-02-17",
  },
  {
    id: "m3",
    name: "Ibuprofen",
    category: "Pain Relief",
    uses: ["Fever reduction", "Headache", "Mild to moderate pain", "Inflammation"],
    effects: ["Inhibits prostaglandin synthesis via COX inhibition"],
    side_effects: ["Acidity", "Nausea", "Dizziness", "Fluid retention", "Stomach irritation"],
    alternatives: ["Paracetamol", "Naproxen", "Diclofenac"],
    warnings: ["Take after food", "Avoid in gastric ulcer history"],
    description: "A nonsteroidal anti-inflammatory drug used for pain and inflammation.",
    dosage_info: "Usually 200mg to 400mg every 6 to 8 hours if advised.",
    interactions: ["Aspirin", "ACE inhibitors", "Diuretics", "Alcohol"],
    created_at: "2026-02-17",
  },
  {
    id: "m4",
    name: "Metformin",
    category: "Diabetes",
    uses: ["Type 2 diabetes glucose control", "Improve insulin sensitivity"],
    effects: ["Reduces hepatic glucose output", "Improves peripheral glucose uptake"],
    side_effects: ["Bloating", "Loose stools", "Metallic taste", "Nausea"],
    alternatives: ["Sitagliptin", "Empagliflozin", "Glimepiride"],
    warnings: ["Take with meals", "Monitor kidney function"],
    description: "First-line oral medicine commonly used in type 2 diabetes management.",
    dosage_info: "Often started low and increased gradually to reduce GI effects.",
    interactions: ["Iodinated contrast", "Alcohol", "Cimetidine"],
    created_at: "2026-02-17",
  },
  {
    id: "m5",
    name: "Levocetirizine",
    category: "Allergy",
    uses: ["Allergic rhinitis", "Sneezing", "Itchy eyes"],
    effects: ["Selective H1 receptor blockade"],
    side_effects: ["Sleepiness", "Dry mouth", "Tiredness"],
    alternatives: ["Cetirizine", "Fexofenadine", "Loratadine"],
    warnings: ["Use caution before driving", "Avoid alcohol with sedating effect"],
    description: "An antihistamine used for common allergy symptoms.",
    dosage_info: "Common dose is once daily, usually in the evening.",
    interactions: ["Alcohol", "Sedatives"],
    created_at: "2026-02-17",
  },
  {
    id: "m6",
    name: "Omeprazole",
    category: "Acidity",
    uses: ["Acid reflux", "GERD symptom relief", "Ulcer protection"],
    effects: ["Suppresses gastric acid secretion via proton pump inhibition"],
    side_effects: ["Headache", "Abdominal pain", "Nausea"],
    alternatives: ["Pantoprazole", "Esomeprazole", "Famotidine"],
    warnings: ["Use shortest effective duration", "Long-term use needs review"],
    description: "A proton pump inhibitor that reduces stomach acid production.",
    dosage_info: "Usually taken before meals, often before breakfast.",
    interactions: ["Clopidogrel", "Warfarin", "Ketoconazole"],
    created_at: "2026-02-17",
  },
];

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMedicines = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return MEDICINES;

    return MEDICINES.filter((item) => {
      const name = item.name.toLowerCase();
      const category = item.category.toLowerCase();
      return name.includes(query) || category.includes(query);
    });
  }, [searchTerm]);

  const totalMedicines = MEDICINES.length;
  const totalCategories = new Set(MEDICINES.map((item) => item.category)).size;

  const openMedicineModal = (medicine) => {
    setSelectedMedicine(medicine);
    setIsModalOpen(true);
  };

  const closeMedicineModal = () => {
    setIsModalOpen(false);
    setSelectedMedicine(null);
  };

  return (
    <section className="medicine-page">
      <div className="medicine-hero">
        <span className="medicine-hero-badge">
          <FiShield /> AI-Powered • Educational Only
        </span>
        <h1>Understand Your Medicines</h1>
        <p>Search any medicine to learn about uses, side effects, interactions, and safer alternatives.</p>

        <MedicineSearch
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search medicines by name or category..."
        />
      </div>

      <MedicineStats
        medicineCount={totalMedicines}
        categoryCount={totalCategories}
        safeInfo="100%"
      />

      <div className="medicine-content">
        <MedicalDisclaimer />

        <div className="medicine-grid">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} onClick={openMedicineModal} />
            ))
          ) : (
            <div className="medicine-empty-state">
              <h3>No medicines found</h3>
              <p>Try a different name or category keyword.</p>
            </div>
          )}
        </div>
      </div>

      <button type="button" className="medicine-float-help" aria-label="Open support">
        <FiMessageCircle />
      </button>

      <MedicineModal medicine={selectedMedicine} open={isModalOpen} onClose={closeMedicineModal} />
    </section>
  );
};

export default Medicine;
