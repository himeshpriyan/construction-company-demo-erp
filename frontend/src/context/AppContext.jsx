import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  initialUsers,
  initialMaterials,
  initialProjects,
  initialVendors,
  initialEnquiries,
  initialQuotations,
  initialPurchaseOrders,
  initialGRNs,
  initialIssues,
  initialTools,
  initialToolIssues,
  initialEmergencyDCs
} from '../data/mockData';

const AppContext = createContext();

// Helper to safely load data from localStorage or fallback to default mock dataset
const loadStorageData = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.error(`Error loading ${key} from storage:`, err);
  }
  return fallback;
};

// Helper to save data to localStorage
const saveStorageData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to storage:`, err);
  }
};

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(() => loadStorageData('erp_users', initialUsers));
  const [user, setUser] = useState(null);
  const [materials, setMaterials] = useState(() => loadStorageData('erp_materials', initialMaterials));
  const [projects, setProjects] = useState(() => loadStorageData('erp_projects', initialProjects));
  const [vendors, setVendors] = useState(() => loadStorageData('erp_vendors', initialVendors));
  const [enquiries, setEnquiries] = useState(() => loadStorageData('erp_enquiries', initialEnquiries));
  const [quotations, setQuotations] = useState(() => loadStorageData('erp_quotations', initialQuotations));
  const [purchaseOrders, setPurchaseOrders] = useState(() => loadStorageData('erp_purchaseorders', initialPurchaseOrders));
  const [grns, setGrns] = useState(() => loadStorageData('erp_grns', initialGRNs));
  const [issues, setIssues] = useState(() => loadStorageData('erp_issues', initialIssues));
  const [tools, setTools] = useState(() => loadStorageData('erp_tools', initialTools));
  const [toolIssues, setToolIssues] = useState(() => loadStorageData('erp_toolissues', initialToolIssues));
  const [emergencyDCs, setEmergencyDCs] = useState(() => loadStorageData('erp_emergencydcs', initialEmergencyDCs));
  const [loading, setLoading] = useState(true);

  // Sync to localStorage whenever states change
  useEffect(() => { saveStorageData('erp_users', users); }, [users]);
  useEffect(() => { saveStorageData('erp_materials', materials); }, [materials]);
  useEffect(() => { saveStorageData('erp_projects', projects); }, [projects]);
  useEffect(() => { saveStorageData('erp_vendors', vendors); }, [vendors]);
  useEffect(() => { saveStorageData('erp_enquiries', enquiries); }, [enquiries]);
  useEffect(() => { saveStorageData('erp_quotations', quotations); }, [quotations]);
  useEffect(() => { saveStorageData('erp_purchaseorders', purchaseOrders); }, [purchaseOrders]);
  useEffect(() => { saveStorageData('erp_grns', grns); }, [grns]);
  useEffect(() => { saveStorageData('erp_issues', issues); }, [issues]);
  useEffect(() => { saveStorageData('erp_tools', tools); }, [tools]);
  useEffect(() => { saveStorageData('erp_toolissues', toolIssues); }, [toolIssues]);
  useEffect(() => { saveStorageData('erp_emergencydcs', emergencyDCs); }, [emergencyDCs]);

  // Restore authenticated user on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('erp_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Error reading stored user", e);
    }
    setLoading(false);
  }, []);

  // --- Auth Functions ---
  const login = async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    const matchedUser = users.find(
      u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass
    );

    if (matchedUser) {
      const safeUserData = {
        _id: matchedUser._id || `usr_${Date.now()}`,
        name: matchedUser.name,
        email: matchedUser.email,
        role: matchedUser.role,
        profileImage: matchedUser.profileImage || '',
        token: `mock_jwt_token_${matchedUser.role}_${Date.now()}`
      };
      setUser(safeUserData);
      localStorage.setItem('erp_user', JSON.stringify(safeUserData));
      localStorage.setItem('erp_token', safeUserData.token);
      toast.success(`Welcome back, ${safeUserData.name}!`);
      return true;
    }

    toast.error("Invalid email or password");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('erp_user');
    localStorage.removeItem('erp_token');
    localStorage.removeItem('erp_refresh_token');
    toast.success("Logged out successfully");
  };

  const updateProfile = async (profileData) => {
    try {
      if (!user) return false;
      const updatedUser = {
        ...user,
        ...profileData
      };
      setUser(updatedUser);
      localStorage.setItem('erp_user', JSON.stringify(updatedUser));

      // Also update in users list
      setUsers(prev => prev.map(u => u.email.toLowerCase() === updatedUser.email.toLowerCase() ? { ...u, ...profileData } : u));
      toast.success("Profile updated successfully!");
      return true;
    } catch (error) {
      toast.error("Error updating profile");
      return false;
    }
  };

  // Reset entire ERP state back to fresh mock data
  const resetToDemoData = () => {
    setUsers(initialUsers);
    setMaterials(initialMaterials);
    setProjects(initialProjects);
    setVendors(initialVendors);
    setEnquiries(initialEnquiries);
    setQuotations(initialQuotations);
    setPurchaseOrders(initialPurchaseOrders);
    setGrns(initialGRNs);
    setIssues(initialIssues);
    setTools(initialTools);
    setToolIssues(initialToolIssues);
    setEmergencyDCs(initialEmergencyDCs);

    saveStorageData('erp_users', initialUsers);
    saveStorageData('erp_materials', initialMaterials);
    saveStorageData('erp_projects', initialProjects);
    saveStorageData('erp_vendors', initialVendors);
    saveStorageData('erp_enquiries', initialEnquiries);
    saveStorageData('erp_quotations', initialQuotations);
    saveStorageData('erp_purchaseorders', initialPurchaseOrders);
    saveStorageData('erp_grns', initialGRNs);
    saveStorageData('erp_issues', initialIssues);
    saveStorageData('erp_tools', initialTools);
    saveStorageData('erp_toolissues', initialToolIssues);
    saveStorageData('erp_emergencydcs', initialEmergencyDCs);

    toast.success("Demo data has been reset to default!");
  };

  // --- Material Master Functions ---
  const addMaterial = async (material) => {
    try {
      const maxIdNum = materials.reduce((max, m) => {
        const num = parseInt(m.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const materialId = material.id || `MAT${String(maxIdNum + 1).padStart(3, '0')}`;
      const newMat = {
        _id: `mat_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: materialId,
        ...material,
        currentStock: Number(material.currentStock) || 0,
        minLevel: Number(material.minLevel) || 0,
        lastPrice: Number(material.lastPrice) || 0,
        latestPrice: Number(material.latestPrice) || 0
      };

      setMaterials(prev => [...prev, newMat]);
      toast.success("Material added successfully");
      return newMat;
    } catch (error) {
      toast.error("Error adding material");
      return false;
    }
  };

  const updateMaterial = async (id, material) => {
    try {
      let updatedData = null;
      setMaterials(prev => prev.map(m => {
        if (String(m.id) === String(id) || String(m._id) === String(id)) {
          updatedData = { ...m, ...material };
          return updatedData;
        }
        return m;
      }));
      toast.success("Material updated successfully");
      return updatedData;
    } catch (error) {
      toast.error("Error updating material");
      return false;
    }
  };

  const deleteMaterial = async (id) => {
    try {
      setMaterials(prev => prev.filter(m => String(m.id) !== String(id) && String(m._id) !== String(id)));
      toast.success("Material deleted successfully");
      return true;
    } catch (error) {
      toast.error("Error deleting material");
      return false;
    }
  };

  const updateStockOnGRN = async (grnItems) => {
    try {
      setMaterials(prev => {
        const updated = [...prev];
        (grnItems || []).forEach(item => {
          const idx = updated.findIndex(m => m.id === item.materialId || m._id === item.materialId);
          const recQty = Number(item.receivedQty || 0);
          const price = Number(item.unitPrice || 0);

          if (idx !== -1) {
            updated[idx] = {
              ...updated[idx],
              currentStock: (Number(updated[idx].currentStock) || 0) + recQty,
              lastPrice: updated[idx].latestPrice || updated[idx].lastPrice || price,
              latestPrice: price || updated[idx].latestPrice,
              name: item.name || updated[idx].name
            };
          } else {
            // Material doesn't exist yet, auto-create
            updated.push({
              _id: `mat_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
              id: item.materialId || `MAT${String(updated.length + 1).padStart(3, '0')}`,
              name: item.name || 'New Material',
              category: 'General',
              unit: item.unit || 'Nos',
              brand: '—',
              lastPrice: price,
              latestPrice: price,
              currentStock: recQty,
              minLevel: 0
            });
          }
        });
        return updated;
      });
    } catch (error) {
      toast.error("Failed to update stock for GRN");
    }
  };

  const deductStockOnIssue = async (issueItems) => {
    try {
      // Validate all stock levels
      for (const item of (issueItems || [])) {
        const mat = materials.find(m => m.id === item.materialId || m._id === item.materialId);
        if (!mat) {
          toast.error(`Material "${item.materialId}" not found`);
          return false;
        }
        if ((Number(mat.currentStock) || 0) < Number(item.qty || 0)) {
          toast.error(
            `Insufficient stock for "${mat.name}". Available: ${mat.currentStock}, Requested: ${item.qty}`
          );
          return false;
        }
      }

      // Deduct
      setMaterials(prev => prev.map(mat => {
        const match = (issueItems || []).find(i => i.materialId === mat.id || i.materialId === mat._id);
        if (match) {
          const newStock = Math.max(0, (Number(mat.currentStock) || 0) - Number(match.qty || 0));
          return { ...mat, currentStock: newStock };
        }
        return mat;
      }));
      return true;
    } catch (error) {
      toast.error("Failed to deduct stock for issue");
      return false;
    }
  };

  // --- Vendor Functions ---
  const addVendor = async (vendor) => {
    try {
      const maxIdNum = vendors.reduce((max, v) => {
        const num = parseInt(v.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const vendorId = vendor.id || `VND${String(maxIdNum + 1).padStart(3, '0')}`;
      const newVendor = {
        _id: `vnd_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: vendorId,
        ...vendor
      };
      setVendors(prev => [...prev, newVendor]);
      toast.success("Vendor added successfully");
      return newVendor;
    } catch (error) {
      toast.error("Error adding vendor");
      return false;
    }
  };

  const updateVendor = async (id, vendor) => {
    try {
      let updatedData = null;
      setVendors(prev => prev.map(v => {
        if (String(v.id) === String(id) || String(v._id) === String(id)) {
          updatedData = { ...v, ...vendor };
          return updatedData;
        }
        return v;
      }));
      toast.success("Vendor updated successfully");
      return updatedData;
    } catch (error) {
      toast.error("Error updating vendor");
      return false;
    }
  };

  const deleteVendor = async (id) => {
    try {
      setVendors(prev => prev.filter(v => String(v.id) !== String(id) && String(v._id) !== String(id)));
      toast.success("Vendor deleted successfully");
      return true;
    } catch (error) {
      toast.error("Error deleting vendor");
      return false;
    }
  };

  // --- Project Functions ---
  const addProject = async (project) => {
    try {
      const maxIdNum = projects.reduce((max, p) => {
        const num = parseInt(p.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const projectId = project.id || `PRJ${String(maxIdNum + 1).padStart(3, '0')}`;
      const newProject = {
        _id: `prj_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: projectId,
        ...project,
        budget: Number(project.budget) || 0,
        status: project.status || 'Active'
      };
      setProjects(prev => [...prev, newProject]);
      toast.success("Project added successfully");
      return newProject;
    } catch (error) {
      toast.error("Error adding project");
      return false;
    }
  };

  const updateProject = async (id, project) => {
    try {
      let updatedData = null;
      setProjects(prev => prev.map(p => {
        if (String(p.id) === String(id) || String(p._id) === String(id)) {
          updatedData = { ...p, ...project };
          return updatedData;
        }
        return p;
      }));
      toast.success("Project updated successfully");
      return updatedData;
    } catch (error) {
      toast.error("Error updating project");
      return false;
    }
  };

  const deleteProject = async (id) => {
    try {
      setProjects(prev => prev.filter(p => String(p.id) !== String(id) && String(p._id) !== String(id)));
      toast.success("Project deleted successfully");
      return true;
    } catch (error) {
      toast.error("Error deleting project");
      return false;
    }
  };

  // --- Enquiry Functions ---
  const addEnquiry = async (enquiry) => {
    try {
      const maxIdNum = enquiries.reduce((max, e) => {
        const num = parseInt(e.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const enqId = enquiry.id || `ENQ-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newEnq = {
        _id: `enq_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: enqId,
        date: enquiry.date || new Date().toISOString().split('T')[0],
        status: enquiry.status || 'Open',
        ...enquiry
      };
      setEnquiries(prev => [...prev, newEnq]);
      toast.success("Enquiry created successfully!");
      return newEnq;
    } catch (e) {
      toast.error("Failed to create enquiry");
      return false;
    }
  };

  const updateEnquiry = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setEnquiries(prev => prev.map(e => {
        if (String(e.id) === String(id) || String(e._id) === String(id)) {
          updatedData = { ...e, ...updatedFields };
          return updatedData;
        }
        return e;
      }));
      return updatedData;
    } catch (e) {
      console.error("Error updating enquiry", e);
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      setEnquiries(prev => prev.filter(e => String(e.id) !== String(id) && String(e._id) !== String(id)));
      toast.success("Enquiry deleted successfully");
      return true;
    } catch (e) {
      toast.error("Failed to delete enquiry");
      return false;
    }
  };

  // --- Quotation Functions ---
  const addQuotation = async (quotation) => {
    try {
      const maxIdNum = quotations.reduce((max, q) => {
        const num = parseInt(q.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const quoteId = quotation.id || `QUO-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newQuote = {
        _id: `quo_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: quoteId,
        quoteDate: quotation.quoteDate || new Date().toISOString().split('T')[0],
        status: quotation.status || 'Pending',
        ...quotation
      };
      setQuotations(prev => [...prev, newQuote]);
      toast.success("Quotation recorded successfully!");
      return newQuote;
    } catch (e) {
      toast.error("Failed to record quotation");
      return false;
    }
  };

  const updateQuotation = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setQuotations(prev => prev.map(q => {
        if (String(q.id) === String(id) || String(q._id) === String(id)) {
          updatedData = { ...q, ...updatedFields };
          return updatedData;
        }
        return q;
      }));
      return updatedData;
    } catch (e) {
      console.error("Error updating quotation", e);
    }
  };

  const deleteQuotation = async (id) => {
    try {
      setQuotations(prev => prev.filter(q => String(q.id) !== String(id) && String(q._id) !== String(id)));
      toast.success("Quotation deleted successfully");
      return true;
    } catch (e) {
      toast.error("Failed to delete quotation");
      return false;
    }
  };

  // --- Purchase Order Functions ---
  const addPurchaseOrder = async (po) => {
    try {
      const maxIdNum = purchaseOrders.reduce((max, p) => {
        const num = parseInt(p.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 22); // Starts from 22 so first PO becomes PO-023
      const poId = po.id || `PO-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newPO = {
        _id: `po_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: poId,
        date: po.date || new Date().toISOString().split('T')[0],
        status: po.status || 'Sent',
        taxType: po.taxType || 'Intra-State',
        ...po
      };
      setPurchaseOrders(prev => [...prev, newPO]);
      toast.success(`PO ${poId} generated successfully!`);
      return newPO;
    } catch (e) {
      toast.error("Failed to generate Purchase Order");
      return false;
    }
  };

  const updatePurchaseOrder = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setPurchaseOrders(prev => prev.map(p => {
        if (String(p.id) === String(id) || String(p._id) === String(id)) {
          updatedData = { ...p, ...updatedFields };
          return updatedData;
        }
        return p;
      }));
      return updatedData;
    } catch (e) {
      console.error("Error updating Purchase Order", e);
    }
  };

  const deletePurchaseOrder = async (id) => {
    try {
      const targetPO = purchaseOrders.find(p => String(p.id) === String(id) || String(p._id) === String(id));
      if (!targetPO) return false;

      // Filter out the deleted PO
      const remainingPOs = purchaseOrders.filter(p => String(p.id) !== String(id) && String(p._id) !== String(id));

      // Sort remaining POs by numerical suffix
      remainingPOs.sort((a, b) => {
        const numA = parseInt(a.id?.replace(/\D/g, '') || 0, 10);
        const numB = parseInt(b.id?.replace(/\D/g, '') || 0, 10);
        return numA - numB;
      });

      // Renumber sequentially starting from 23
      let currentNum = 23;
      const idMap = {};
      const renumberedPOs = remainingPOs.map(po => {
        const newId = `PO-${String(currentNum).padStart(3, '0')}`;
        const oldId = po.id;
        if (oldId !== newId) {
          idMap[oldId] = newId;
        }
        currentNum++;
        return { ...po, id: newId };
      });

      setPurchaseOrders(renumberedPOs);

      // Also update referencing GRNs if any PO ID shifted
      if (Object.keys(idMap).length > 0) {
        setGrns(prev => prev.map(g => {
          let updated = { ...g };
          if (g.poId && idMap[g.poId]) updated.poId = idMap[g.poId];
          if (g.poRef && idMap[g.poRef]) updated.poRef = idMap[g.poRef];
          return updated;
        }));
      }

      toast.success("Purchase Order deleted and remaining POs renumbered successfully");
      return true;
    } catch (e) {
      toast.error("Failed to delete Purchase Order");
      return false;
    }
  };

  // --- GRN Functions ---
  const addGRN = async (grn) => {
    try {
      const dateStr = grn.grnDate || '';
      let year = new Date().getFullYear();
      const yearMatch = dateStr.match(/^(\d{4})-\d{2}-\d{2}/) || dateStr.match(/\b(20\d{2})\b/);
      if (yearMatch) year = parseInt(yearMatch[1], 10);

      const maxIdNum = grns.reduce((max, g) => {
        if (g.id) {
          const regex = new RegExp(`^GRN-${year}-(\\d+)$`);
          const match = g.id.match(regex);
          if (match) {
            const num = parseInt(match[1], 10);
            if (!isNaN(num) && num < 100000) {
              return num > max ? num : max;
            }
          }
        }
        return max;
      }, 0);

      const grnId = grn.id || `GRN-${year}-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newGRN = {
        _id: `grn_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: grnId,
        grnDate: grn.grnDate || new Date().toISOString().split('T')[0],
        status: grn.status || 'Completed',
        ...grn
      };

      setGrns(prev => [newGRN, ...prev]);
      toast.success("GRN registered successfully!");
      return newGRN;
    } catch (e) {
      toast.error("Failed to record GRN");
      return false;
    }
  };

  const updateGRN = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setGrns(prev => prev.map(g => {
        if (String(g.id) === String(id) || String(g._id) === String(id)) {
          updatedData = { ...g, ...updatedFields };
          return updatedData;
        }
        return g;
      }));
      return updatedData;
    } catch (e) {
      console.error("Error updating GRN", e);
    }
  };

  const deleteGRN = async (id) => {
    try {
      setGrns(prev => prev.filter(g => String(g.id) !== String(id) && String(g._id) !== String(id)));
      toast.success("GRN record deleted");
      return true;
    } catch (e) {
      toast.error("Failed to delete GRN");
      return false;
    }
  };

  // --- Material Issue Functions ---
  const addIssue = async (issue) => {
    try {
      const dateStr = issue.issueDate || '';
      let year = new Date().getFullYear();
      const yearMatch = dateStr.match(/^(\d{4})-\d{2}-\d{2}/) || dateStr.match(/\b(20\d{2})\b/);
      if (yearMatch) year = parseInt(yearMatch[1], 10);

      const maxIdNum = issues.reduce((max, i) => {
        if (i.id) {
          const regex = new RegExp(`^ISS-${year}-(\\d+)$`);
          const match = i.id.match(regex);
          if (match) {
            const num = parseInt(match[1], 10);
            if (!isNaN(num) && num < 100000) {
              return num > max ? num : max;
            }
          }
        }
        return max;
      }, 0);

      const issueId = issue.id || `ISS-${year}-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newIssue = {
        _id: `iss_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: issueId,
        issueDate: issue.issueDate || new Date().toISOString().split('T')[0],
        status: issue.status || 'Issued',
        ...issue
      };

      setIssues(prev => [newIssue, ...prev]);
      toast.success("Material issued successfully!");
      return newIssue;
    } catch (e) {
      toast.error("Failed to issue material");
      return false;
    }
  };

  const updateIssue = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setIssues(prev => prev.map(i => {
        if (String(i.id) === String(id) || String(i._id) === String(id)) {
          updatedData = { ...i, ...updatedFields };
          return updatedData;
        }
        return i;
      }));
      return updatedData;
    } catch (e) {
      console.error("Error updating issue record", e);
    }
  };

  const deleteIssue = async (id) => {
    try {
      setIssues(prev => prev.filter(i => String(i.id) !== String(id) && String(i._id) !== String(id)));
      toast.success("Material Issue record deleted");
      return true;
    } catch (e) {
      toast.error("Failed to delete issue");
      return false;
    }
  };

  // --- Tool Functions ---
  const addTool = async (tool) => {
    try {
      const maxIdNum = tools.reduce((max, t) => {
        const num = parseInt(t.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const toolId = tool.id || `TOL${String(maxIdNum + 1).padStart(3, '0')}`;
      const total = parseInt(tool.totalQty, 10) || 0;
      const repair = parseInt(tool.repairQty, 10) || 0;
      const available = total - repair;
      const newTool = {
        _id: `tol_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: toolId,
        name: tool.name,
        category: tool.category,
        totalQty: total,
        availableQty: available,
        repairQty: repair
      };
      setTools(prev => [...prev, newTool]);
      toast.success("Tool registered successfully");
      return newTool;
    } catch (e) {
      toast.error("Failed to register tool");
      return false;
    }
  };

  const updateTool = async (id, updatedTool) => {
    try {
      let updatedData = null;
      setTools(prev => prev.map(t => {
        if (String(t.id) === String(id) || String(t._id) === String(id)) {
          const total = parseInt(updatedTool.totalQty !== undefined ? updatedTool.totalQty : t.totalQty, 10) || 0;
          const repair = parseInt(updatedTool.repairQty !== undefined ? updatedTool.repairQty : t.repairQty, 10) || 0;
          const issued = t.totalQty - t.availableQty - t.repairQty;
          const available = total - repair - (updatedTool.availableQty !== undefined ? 0 : issued);

          updatedData = {
            ...t,
            ...updatedTool,
            totalQty: total,
            repairQty: repair,
            availableQty: updatedTool.availableQty !== undefined ? updatedTool.availableQty : Math.max(0, available)
          };
          return updatedData;
        }
        return t;
      }));
      return updatedData;
    } catch (e) {
      console.error("Failed to update tool", e);
    }
  };

  const deleteTool = async (id) => {
    try {
      setTools(prev => prev.filter(t => String(t.id) !== String(id) && String(t._id) !== String(id)));
      toast.success("Tool deleted successfully");
      return true;
    } catch (e) {
      toast.error("Failed to delete tool");
      return false;
    }
  };

  // --- Emergency DC Functions ---
  const addEmergencyDC = async (dc) => {
    try {
      const maxIdNum = emergencyDCs.reduce((max, d) => {
        const num = parseInt(d.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const dcId = dc.id || `EDC-${String(maxIdNum + 1).padStart(4, '0')}`;
      const newDC = {
        _id: `edc_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: dcId,
        dcDate: dc.dcDate || new Date().toISOString().split('T')[0],
        status: dc.status || 'Pending Approval',
        items: dc.items || [],
        paymentMode: dc.paymentMode || 'Cash',
        billAttached: dc.billAttached !== undefined ? dc.billAttached : false,
        totalAmount: Number(dc.totalAmount) || 0,
        ...dc
      };
      setEmergencyDCs(prev => [newDC, ...prev]);
      toast.success(`Emergency DC ${dcId} created!`);
      return newDC;
    } catch (e) {
      toast.error("Failed to create Emergency DC");
      return false;
    }
  };

  const updateEmergencyDCStatus = async (id, status) => {
    try {
      let updatedData = null;
      setEmergencyDCs(prev => prev.map(d => {
        if (String(d.id) === String(id) || String(d._id) === String(id)) {
          updatedData = { ...d, status };
          return updatedData;
        }
        return d;
      }));
      toast.success(`DC ${status}`);
      return updatedData;
    } catch (e) {
      toast.error("Failed to update DC status");
      return false;
    }
  };

  const deleteEmergencyDC = async (id) => {
    try {
      setEmergencyDCs(prev => prev.filter(d => String(d.id) !== String(id) && String(d._id) !== String(id)));
      toast.success("Emergency DC deleted");
      return true;
    } catch (e) {
      toast.error("Failed to delete Emergency DC");
      return false;
    }
  };

  // --- Tool Issue Functions ---
  const addToolIssue = async (toolIssue) => {
    try {
      const maxIdNum = toolIssues.reduce((max, t) => {
        const num = parseInt(t.id?.replace(/\D/g, '') || 0, 10);
        return num > max ? num : max;
      }, 0);
      const issueId = toolIssue.id || `TLI-${String(maxIdNum + 1).padStart(3, '0')}`;
      const newIssue = {
        _id: `tli_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        id: issueId,
        issueDate: toolIssue.issueDate || new Date().toISOString().split('T')[0],
        status: toolIssue.status || 'Issued',
        ...toolIssue
      };
      setToolIssues(prev => [newIssue, ...prev]);

      // Automatically reduce available quantity in tools
      if (toolIssue.toolId) {
        setTools(prev => prev.map(t => {
          if (t.id === toolIssue.toolId || t._id === toolIssue.toolId) {
            return {
              ...t,
              availableQty: Math.max(0, (t.availableQty || 0) - (Number(toolIssue.qty) || 1))
            };
          }
          return t;
        }));
      }

      toast.success("Tool issued successfully");
      return newIssue;
    } catch (e) {
      toast.error("Failed to issue tool");
      return false;
    }
  };

  const updateToolIssue = async (id, updatedFields) => {
    try {
      let updatedData = null;
      setToolIssues(prev => prev.map(i => {
        if (String(i.id) === String(id) || String(i._id) === String(id)) {
          // If status changing to Returned, restore available tool stock
          if (updatedFields.status === 'Returned' && i.status !== 'Returned' && i.toolId) {
            setTools(tList => tList.map(t => {
              if (t.id === i.toolId || t._id === i.toolId) {
                return {
                  ...t,
                  availableQty: Math.min(t.totalQty - t.repairQty, (t.availableQty || 0) + (Number(i.qty) || 1))
                };
              }
              return t;
            }));
          }
          updatedData = { ...i, ...updatedFields };
          return updatedData;
        }
        return i;
      }));
      return updatedData;
    } catch (e) {
      console.error("Failed to update tool issue log", e);
    }
  };

  const deleteToolIssue = async (id) => {
    try {
      setToolIssues(prev => prev.filter(i => String(i.id) !== String(id) && String(i._id) !== String(id)));
      return true;
    } catch (e) {
      console.error("Failed to delete tool issue log", e);
      return false;
    }
  };

  return (
    <AppContext.Provider value={{
      user, login, logout, updateProfile, resetToDemoData,
      materials, setMaterials, addMaterial, updateMaterial, deleteMaterial,
      projects, setProjects, addProject, updateProject, deleteProject,
      vendors, setVendors, addVendor, updateVendor, deleteVendor,
      enquiries, setEnquiries, addEnquiry, updateEnquiry, deleteEnquiry,
      quotations, setQuotations, addQuotation, updateQuotation, deleteQuotation,
      purchaseOrders, setPurchaseOrders, addPurchaseOrder, updatePurchaseOrder, deletePurchaseOrder,
      grns, setGrns, addGRN, updateGRN, deleteGRN, updateStockOnGRN,
      issues, setIssues, addIssue, updateIssue, deleteIssue, deductStockOnIssue,
      tools, setTools, addTool, updateTool, deleteTool,
      toolIssues, setToolIssues, addToolIssue, updateToolIssue, deleteToolIssue,
      emergencyDCs, setEmergencyDCs, addEmergencyDC, updateEmergencyDCStatus, deleteEmergencyDC,
      loading,
      isAdmin: user?.role === 'admin' || user?.role === 'superadmin',
      isStoreTeam: user?.role === 'store_team' || user?.role === 'admin' || user?.role === 'superadmin',
      isPurchaseTeam: user?.role === 'purchase_team' || user?.role === 'admin' || user?.role === 'superadmin',
      canEdit: user?.role === 'admin' || user?.role === 'superadmin' || user?.role === 'store_team' || user?.role === 'purchase_team' || user?.role === 'staff',
      isViewer: user?.role === 'viewer'
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
