import React, { useState, useEffect } from "react";
import { Save, Plus, Trash2, Edit2, X, LogOut } from "lucide-react";
import contentData from "../data/content.json";
import { useNavigate } from "react-router-dom";

const ContentEditor = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(contentData);
  const [activeTab, setActiveTab] = useState("magazines");
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [saveStatus, setSaveStatus] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("editor_authenticated");
    localStorage.removeItem("editor_auth_time");
    navigate("/");
  };

  useEffect(() => {
    // Load data from JSON file
    setData(contentData);
  }, []);

  const handleInputChange = (e, field, index = null, subField = null) => {
    const value = e.target.value;
    
    if (index !== null) {
      // Editing existing item
      const newData = { ...data };
      const items = [...newData[activeTab]];
      
      if (subField !== null) {
        // Handle nested fields (like arrays)
        if (field === "industries" || field === "expertise" || field === "features") {
          items[index][field] = value.split(",").map((item) => item.trim());
        } else {
          items[index][field] = { ...items[index][field], [subField]: value };
        }
      } else {
        items[index][field] = value;
      }
      
      newData[activeTab] = items;
      setData(newData);
    } else {
      // New item form
      if (subField !== null) {
        setFormData({
          ...formData,
          [field]: { ...formData[field], [subField]: value },
        });
      } else if (field === "industries" || field === "expertise" || field === "features") {
        setFormData({
          ...formData,
          [field]: value.split(",").map((item) => item.trim()),
        });
      } else {
        setFormData({
          ...formData,
          [field]: value,
        });
      }
    }
  };

  const handleSave = () => {
    // Convert data to JSON string
    const jsonString = JSON.stringify(data, null, 2);
    
    // Create a blob and download
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setSaveStatus("✅ JSON file downloaded! Copy it to frontend/src/data/content.json");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleAdd = () => {
    const newData = { ...data };
    // Use formData if it has content, otherwise use template
    const itemToAdd = Object.keys(formData).length > 0 ? formData : getTemplate(activeTab);
    newData[activeTab] = [...newData[activeTab], itemToAdd];
    setData(newData);
    setShowAddForm(false);
    setFormData({});
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const newData = { ...data };
      newData[activeTab] = newData[activeTab].filter((_, i) => i !== index);
      setData(newData);
    }
  };

  const getTemplate = (tab) => {
    const templates = {
      magazines: {
        id: String(data.magazines.length + 1),
        title: "",
        year: "",
        description: "",
        cover_image: "",
        industries: [],
        preview: "",
        pdf_url: "",
      },
      teamMembers: {
        id: String(data.teamMembers.length + 1),
        name: "",
        role: "",
        bio: "",
        background: "",
        expertise: [],
        photo_url: "",
        linkedin: "",
        email: "",
      },
      services: {
        id: String(data.services.length + 1),
        title: "",
        description: "",
        features: [],
        timeframe: "",
        ideal_for: "",
      },
      articles: {
        id: String(data.articles.length + 1),
        title: "",
        excerpt: "",
        date: new Date().toISOString().split("T")[0],
        readTime: "",
        category: "",
        image: "",
      },
      consultationTypes: {
        id: String(data.consultationTypes.length + 1),
        type: "",
        duration: "",
        description: "",
      },
    };
    return templates[tab] || {};
  };

  const renderField = (item, field, index, label, type = "text") => {
    const value = item[field];
    // For features array, join with newlines for better readability
    const displayValue = Array.isArray(value)
      ? field === "features"
        ? value.join("\n")
        : value.join(", ")
      : value || "";

    return (
      <div key={field} style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "var(--text-primary)",
          }}
        >
          {label}:
        </label>
        {type === "textarea" || field === "features" ? (
          <textarea
            value={displayValue}
            onChange={(e) => {
              if (field === "features") {
                // Split by newlines for features
                const newData = { ...data };
                const items = [...newData[activeTab]];
                items[index][field] = e.target.value
                  .split("\n")
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0);
                newData[activeTab] = items;
                setData(newData);
              } else {
                handleInputChange(e, field, index);
              }
            }}
            style={{
              width: "100%",
              padding: "12px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-medium)",
              borderRadius: "4px",
              color: "var(--text-primary)",
              minHeight: field === "features" ? "200px" : "100px",
              fontFamily: "inherit",
            }}
          />
        ) : (
          <input
            type={type}
            value={displayValue}
            onChange={(e) => handleInputChange(e, field, index)}
            style={{
              width: "100%",
              padding: "12px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-medium)",
              borderRadius: "4px",
              color: "var(--text-primary)",
              fontFamily: "inherit",
            }}
          />
        )}
      </div>
    );
  };

  const renderItem = (item, index) => {
    const fields = {
      magazines: [
        { key: "title", label: "Title" },
        { key: "year", label: "Year" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "cover_image", label: "Cover Image URL" },
        { key: "industries", label: "Industries (comma-separated)" },
        { key: "preview", label: "Preview", type: "textarea" },
        { key: "pdf_url", label: "PDF URL" },
      ],
      teamMembers: [
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        { key: "bio", label: "Bio", type: "textarea" },
        { key: "background", label: "Background", type: "textarea" },
        { key: "expertise", label: "Expertise (comma-separated)" },
        { key: "photo_url", label: "Photo URL" },
        { key: "linkedin", label: "LinkedIn URL" },
        { key: "email", label: "Email" },
      ],
      services: [
        { key: "title", label: "Title" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "features", label: "Features (comma-separated)", type: "textarea" },
        { key: "timeframe", label: "Timeframe" },
        { key: "ideal_for", label: "Ideal For" },
      ],
      articles: [
        { key: "title", label: "Title" },
        { key: "excerpt", label: "Excerpt", type: "textarea" },
        { key: "date", label: "Date", type: "date" },
        { key: "readTime", label: "Read Time" },
        { key: "category", label: "Category" },
        { key: "image", label: "Image URL" },
      ],
      consultationTypes: [
        { key: "type", label: "Type" },
        { key: "duration", label: "Duration" },
        { key: "description", label: "Description", type: "textarea" },
      ],
    };

    return (
      <div
        key={index}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
          <h3 style={{ color: "var(--brand-primary)", margin: 0 }}>
            {item.title || item.name || item.type || `Item ${index + 1}`}
          </h3>
          <button
            onClick={() => handleDelete(index)}
            style={{
              background: "#ff4444",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
        {fields[activeTab]?.map((field) =>
          renderField(item, field.key, index, field.label, field.type)
        )}
      </div>
    );
  };

  const tabs = [
    { id: "magazines", label: "Magazines" },
    { id: "teamMembers", label: "Team Members" },
    { id: "services", label: "Services" },
    { id: "articles", label: "Articles" },
    { id: "consultationTypes", label: "Consultation Types" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        padding: "40px 20px",
        color: "var(--text-primary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h1 style={{ color: "var(--brand-primary)", marginBottom: "8px" }}>
              Content Editor
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Edit your website content. Changes will be downloaded as JSON file.
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "var(--brand-primary)";
              e.target.style.color = "var(--brand-primary)";
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "var(--border-subtle)";
              e.target.style.color = "var(--text-secondary)";
            }}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "32px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAddForm(false);
                setFormData({});
              }}
              style={{
                padding: "12px 24px",
                background: activeTab === tab.id ? "var(--brand-primary)" : "transparent",
                color: activeTab === tab.id ? "#000000" : "var(--text-primary)",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid var(--brand-primary)" : "2px solid transparent",
                cursor: "pointer",
                fontWeight: activeTab === tab.id ? "600" : "400",
                transition: "all 0.2s",
              }}
            >
              {tab.label} ({data[tab.id]?.length || 0})
            </button>
          ))}
        </div>

        {/* Add Button */}
        <div style={{ marginBottom: "24px" }}>
          <button
            onClick={() => {
              setShowAddForm(!showAddForm);
              setFormData(getTemplate(activeTab));
            }}
            style={{
              background: "var(--brand-primary)",
              color: "#000000",
              border: "none",
              padding: "12px 24px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
            }}
          >
            <Plus size={18} />
            Add New {tabs.find((t) => t.id === activeTab)?.label}
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div
            style={{
              background: "var(--bg-secondary)",
              border: "2px solid var(--brand-primary)",
              borderRadius: "8px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <h3 style={{ color: "var(--brand-primary)", margin: 0 }}>Add New Item</h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setFormData({});
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>
            {Object.keys(formData).map((key) => {
              const field = key;
              const value = Array.isArray(formData[field])
                ? formData[field].join(", ")
                : formData[field] || "";
              return (
                <div key={field} style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "500",
                      color: "var(--text-primary)",
                      textTransform: "capitalize",
                    }}
                  >
                    {field.replace(/_/g, " ")}:
                  </label>
                  {field === "description" ||
                  field === "bio" ||
                  field === "background" ||
                  field === "preview" ||
                  field === "excerpt" ||
                  field === "features" ? (
                    <textarea
                      value={value}
                      onChange={(e) => {
                        if (field === "features") {
                          // Split by newlines for features
                          setFormData({
                            ...formData,
                            [field]: e.target.value
                              .split("\n")
                              .map((item) => item.trim())
                              .filter((item) => item.length > 0),
                          });
                        } else {
                          setFormData({ ...formData, [field]: e.target.value });
                        }
                      }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        minHeight: field === "features" ? "200px" : "100px",
                        fontFamily: "inherit",
                      }}
                    />
                  ) : (
                    <input
                      type={field === "date" ? "date" : "text"}
                      value={value}
                      onChange={(e) => {
                        if (field === "industries" || field === "expertise") {
                          setFormData({
                            ...formData,
                            [field]: e.target.value.split(",").map((item) => item.trim()),
                          });
                        } else {
                          setFormData({ ...formData, [field]: e.target.value });
                        }
                      }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border-medium)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        fontFamily: "inherit",
                      }}
                    />
                  )}
                </div>
              );
            })}
            <button
              onClick={handleAdd}
              style={{
                background: "var(--brand-primary)",
                color: "#000000",
                border: "none",
                padding: "12px 24px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600",
                marginTop: "16px",
              }}
            >
              Add Item
            </button>
          </div>
        )}

        {/* Items List */}
        <div>
          {data[activeTab]?.map((item, index) => renderItem(item, index))}
        </div>

        {/* Save Button */}
        <div
          style={{
            position: "sticky",
            bottom: 0,
            background: "var(--bg-primary)",
            padding: "24px",
            borderTop: "2px solid var(--border-subtle)",
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "var(--text-secondary)" }}>
            {saveStatus || "Make your changes and click Save to download the JSON file"}
          </div>
          <button
            onClick={handleSave}
            style={{
              background: "var(--brand-primary)",
              color: "#000000",
              border: "none",
              padding: "12px 32px",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <Save size={20} />
            Save & Download JSON
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;

