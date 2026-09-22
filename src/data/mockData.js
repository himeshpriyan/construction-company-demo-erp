// Mock dataset for Deepika Builtech ERP

export const initialUsers = [
  {
    _id: 'usr_001',
    name: 'Deepika Builtech Admin',
    email: 'deepikabuiltech@gmail.com',
    password: 'deepikabuiltech@123',
    role: 'admin',
    profileImage: ''
  },
  {
    _id: 'usr_002',
    name: 'Store Team Lead',
    email: 'store@deepikabuiltech.com',
    password: 'store@123',
    role: 'store_team',
    profileImage: ''
  },
  {
    _id: 'usr_003',
    name: 'Purchase Manager',
    email: 'purchase@deepikabuiltech.com',
    password: 'purchase@123',
    role: 'purchase_team',
    profileImage: ''
  },
  {
    _id: 'usr_004',
    name: 'View Only User',
    email: 'viewer@deepikabuiltech.com',
    password: 'viewer@123',
    role: 'viewer',
    profileImage: ''
  }
];

export const initialMaterials = [
  {
    _id: 'mat_001',
    id: 'MAT001',
    name: 'TMT Steel Rebars Fe550',
    category: 'Steel',
    unit: 'MT',
    brand: 'Tata Tiscon',
    lastPrice: 52000,
    latestPrice: 53500,
    currentStock: 45,
    minLevel: 10
  },
  {
    _id: 'mat_002',
    id: 'MAT002',
    name: 'OPC 53 Grade Cement',
    category: 'Cement',
    unit: 'Bags',
    brand: 'Ultratech',
    lastPrice: 420,
    latestPrice: 430,
    currentStock: 1200,
    minLevel: 200
  },
  {
    _id: 'mat_003',
    id: 'MAT003',
    name: 'River Sand Premium',
    category: 'Aggregates',
    unit: 'CFT',
    brand: 'Local Co-op',
    lastPrice: 85,
    latestPrice: 90,
    currentStock: 3000,
    minLevel: 500
  },
  {
    _id: 'mat_004',
    id: 'MAT004',
    name: 'Structural Steel I-Beams',
    category: 'Steel',
    unit: 'MT',
    brand: 'JSW Steel',
    lastPrice: 58000,
    latestPrice: 59000,
    currentStock: 12,
    minLevel: 5
  },
  {
    _id: 'mat_005',
    id: 'MAT005',
    name: 'High-Tensile Bolts M20',
    category: 'Bolt',
    unit: 'Nos',
    brand: 'Unbrako',
    lastPrice: 45,
    latestPrice: 48,
    currentStock: 350,
    minLevel: 400
  },
  {
    _id: 'mat_006',
    id: 'MAT006',
    name: 'Puff Panels 50mm',
    category: 'Sheet',
    unit: 'Sqmt',
    brand: 'Metecno',
    lastPrice: 750,
    latestPrice: 780,
    currentStock: 80,
    minLevel: 100
  },
  {
    _id: 'mat_007',
    id: 'MAT007',
    name: 'Industrial LED Highbay 150W',
    category: 'Consumable',
    unit: 'Nos',
    brand: 'Philips',
    lastPrice: 3200,
    latestPrice: 3100,
    currentStock: 15,
    minLevel: 5
  },
  {
    _id: 'mat_008',
    id: 'MAT008',
    name: 'MS Hollow Pipe 50x50x3mm',
    category: 'Pipe',
    unit: 'Meter',
    brand: 'Apollo Tubes',
    lastPrice: 420,
    latestPrice: 440,
    currentStock: 180,
    minLevel: 50
  },
  {
    _id: 'mat_009',
    id: 'MAT009',
    name: 'Ready-Mix Concrete M25',
    category: 'Cement',
    unit: 'Litre',
    brand: 'RMC ReadyMix',
    lastPrice: 4800,
    latestPrice: 4950,
    currentStock: 25,
    minLevel: 10
  },
  {
    _id: 'mat_010',
    id: 'MAT010',
    name: 'Safety Helmets & Harness Kits',
    category: 'Consumable',
    unit: 'Pairs',
    brand: 'Karam',
    lastPrice: 950,
    latestPrice: 950,
    currentStock: 65,
    minLevel: 20
  }
];

export const initialProjects = [
  {
    _id: 'prj_001',
    id: 'PRJ001',
    name: 'Smart Logistics Warehouse A',
    client: 'SMARTLOG Corp',
    startDate: '2026-01-10',
    endDate: '2026-08-30',
    budget: 25000000,
    status: 'Active'
  },
  {
    _id: 'prj_002',
    id: 'PRJ002',
    name: 'Cold Storage Facility Chennai',
    client: 'FrozenFoods Ltd',
    startDate: '2026-03-01',
    endDate: '2026-11-15',
    budget: 42000000,
    status: 'Active'
  },
  {
    _id: 'prj_003',
    id: 'PRJ003',
    name: 'Auto Components Factory Shed',
    client: 'PrecisionMotors',
    startDate: '2025-10-15',
    endDate: '2026-04-20',
    budget: 18000000,
    status: 'Completed'
  },
  {
    _id: 'prj_004',
    id: 'PRJ004',
    name: 'Commercial Complex Block B',
    client: 'Apex Realty Group',
    startDate: '2026-02-15',
    endDate: '2026-12-31',
    budget: 55000000,
    status: 'Active'
  }
];

export const initialVendors = [
  {
    _id: 'vnd_001',
    id: 'VND001',
    name: 'Tata Steel Distribution',
    contact: 'Ramesh Sen',
    email: 'ramesh@tatasteel.com',
    phone: '+91 98765 43210',
    category: 'Steel',
    rating: 4.8,
    city: 'Kolkata',
    gstin: '19AAACT2727Q1ZW',
    address: '12 Chowringhee Road, Central Plaza, Kolkata - 700071'
  },
  {
    _id: 'vnd_002',
    id: 'VND002',
    name: 'Ultratech Cement Agency',
    contact: 'Vijay Kumar',
    email: 'vijay@ultratech.com',
    phone: '+91 98123 45678',
    category: 'Cement',
    rating: 4.5,
    city: 'Mumbai',
    gstin: '27AAACU1234M1Z2',
    address: 'Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093'
  },
  {
    _id: 'vnd_003',
    id: 'VND003',
    name: 'Industrial Fasteners Corp',
    contact: 'Anil Gupta',
    email: 'sales@indfasteners.com',
    phone: '+91 94440 12345',
    category: 'Fasteners',
    rating: 4.2,
    city: 'Chennai',
    gstin: '33AABCI5678K1Z9',
    address: '88 Guindy Industrial Estate, Chennai - 600032'
  },
  {
    _id: 'vnd_004',
    id: 'VND004',
    name: 'Apex Panels Ltd',
    contact: 'Sanjay Dutt',
    email: 'sanjay@apexpanels.in',
    phone: '+91 97000 88990',
    category: 'Panels',
    rating: 4.0,
    city: 'Hyderabad',
    gstin: '36AAACA9012N1Z8',
    address: 'Phase III, Balanagar Industrial Complex, Hyderabad - 500037'
  },
  {
    _id: 'vnd_005',
    id: 'VND005',
    name: 'Schneider & Philips Dist.',
    contact: 'Priya Sharma',
    email: 'orders@schneider-dist.com',
    phone: '+91 98450 99887',
    category: 'Electrical',
    rating: 4.7,
    city: 'Bangalore',
    gstin: '29AABCS3344P1Z1',
    address: 'Peenya Industrial Area 4th Phase, Bangalore - 560058'
  }
];

export const initialEnquiries = [
  {
    _id: 'enq_001',
    id: 'ENQ-001',
    date: '2026-03-01',
    projectId: 'PRJ001',
    workOrderNo: 'WO-2026-001',
    requiredDate: '2026-03-25',
    status: 'Closed',
    selectedVendors: ['VND001', 'VND002'],
    awardedVendors: { 'MAT001': 'VND001' },
    items: [
      { materialId: 'MAT001', name: 'TMT Steel Rebars Fe550', qty: 20, unit: 'MT', targetRate: 53000 }
    ]
  },
  {
    _id: 'enq_002',
    id: 'ENQ-002',
    date: '2026-03-10',
    projectId: 'PRJ002',
    workOrderNo: 'WO-2026-004',
    requiredDate: '2026-04-05',
    status: 'Open',
    selectedVendors: ['VND003', 'VND004'],
    awardedVendors: {},
    items: [
      { materialId: 'MAT005', name: 'High-Tensile Bolts M20', qty: 500, unit: 'Nos', targetRate: 45 },
      { materialId: 'MAT006', name: 'Puff Panels 50mm', qty: 150, unit: 'Sqmt', targetRate: 750 }
    ]
  },
  {
    _id: 'enq_003',
    id: 'ENQ-003',
    date: '2026-03-15',
    projectId: 'PRJ004',
    workOrderNo: 'WO-2026-008',
    requiredDate: '2026-04-10',
    status: 'Open',
    selectedVendors: ['VND005'],
    awardedVendors: {},
    items: [
      { materialId: 'MAT007', name: 'Industrial LED Highbay 150W', qty: 30, unit: 'Nos', targetRate: 3100 }
    ]
  }
];

export const initialQuotations = [
  {
    _id: 'quo_001',
    id: 'QUO-001',
    enquiryId: 'ENQ-001',
    vendorId: 'VND001',
    quoteDate: '2026-03-03',
    validityDate: '2026-04-03',
    status: 'Accepted',
    items: [
      { materialId: 'MAT001', name: 'TMT Steel Rebars Fe550', quotedRate: 53500, leadTimeDays: 7, discount: 0, remarks: 'Includes testing certificate' }
    ]
  },
  {
    _id: 'quo_002',
    id: 'QUO-002',
    enquiryId: 'ENQ-001',
    vendorId: 'VND002',
    quoteDate: '2026-03-04',
    validityDate: '2026-04-04',
    status: 'Rejected',
    items: [
      { materialId: 'MAT001', name: 'TMT Steel Rebars Fe550', quotedRate: 54200, leadTimeDays: 14, discount: 0, remarks: 'Standard delivery' }
    ]
  },
  {
    _id: 'quo_003',
    id: 'QUO-003',
    enquiryId: 'ENQ-002',
    vendorId: 'VND003',
    quoteDate: '2026-03-12',
    validityDate: '2026-04-12',
    status: 'Pending',
    items: [
      { materialId: 'MAT005', name: 'High-Tensile Bolts M20', quotedRate: 48, leadTimeDays: 5, discount: 2, remarks: 'Zinc coated' }
    ]
  }
];

export const initialPurchaseOrders = [
  {
    _id: 'po_023',
    id: 'PO-023',
    date: '2026-03-05',
    vendorId: 'VND001',
    vendorName: 'Tata Steel Distribution',
    vendorAddressLine1: '12 Chowringhee Road',
    vendorAddressLine2: 'Central Plaza',
    vendorCityPin: 'Kolkata - 700071',
    vendorGstin: '19AAACT2727Q1ZW',
    vendorContact: 'Ramesh Sen',
    vendorEmail: 'ramesh@tatasteel.com',
    enquiryId: 'ENQ-001',
    projectId: 'PRJ001',
    workOrderNo: 'WO-2026-001',
    status: 'Completed',
    deliveryDate: '2026-03-20',
    deliveryTerms: 'Door delivery at site',
    paymentTerms: '30 Days credit',
    dispatchTo: 'DEEPIKA BUILTECH ENGINEERING SITE\nSmart Logistics Warehouse A\nGSTIN: 29ABCDE1234F1Z5',
    remarks: 'Mill test certificates required upon delivery',
    reference: 'Ref: TATA/QUO/2026-89',
    freightCharges: '5000',
    loadingCharges: '1500',
    loadingChargesGst: '18',
    unloadingCharges: '0',
    weighingCharges: '500',
    taxType: 'Inter-State',
    items: [
      {
        itemCode: 'MAT001',
        itemName: 'TMT STEEL REBARS FE550',
        qty: 20,
        unit: 'MT',
        rate: 53500,
        gst: 18,
        total: 1070000
      }
    ]
  },
  {
    _id: 'po_024',
    id: 'PO-024',
    date: '2026-03-08',
    vendorId: 'VND002',
    vendorName: 'Ultratech Cement Agency',
    vendorAddressLine1: 'Plot 45, MIDC Industrial Area',
    vendorAddressLine2: 'Andheri East',
    vendorCityPin: 'Mumbai - 400093',
    vendorGstin: '27AAACU1234M1Z2',
    vendorContact: 'Vijay Kumar',
    vendorEmail: 'vijay@ultratech.com',
    enquiryId: '',
    projectId: 'PRJ001',
    workOrderNo: 'WO-2026-002',
    status: 'Completed',
    deliveryDate: '2026-03-22',
    deliveryTerms: 'Immediate dispatch',
    paymentTerms: '100% against delivery',
    dispatchTo: 'DEEPIKA BUILTECH ENGINEERING SITE\nSmart Logistics Warehouse A\nGSTIN: 29ABCDE1234F1Z5',
    remarks: 'Fresh batch cement only (less than 30 days old)',
    reference: 'Ref: UTC/2026-441',
    freightCharges: '3000',
    loadingCharges: '0',
    loadingChargesGst: '0',
    unloadingCharges: '1000',
    weighingCharges: '0',
    taxType: 'Inter-State',
    items: [
      {
        itemCode: 'MAT002',
        itemName: 'OPC 53 GRADE CEMENT',
        qty: 500,
        unit: 'Bags',
        rate: 430,
        gst: 28,
        total: 215000
      }
    ]
  },
  {
    _id: 'po_025',
    id: 'PO-025',
    date: '2026-03-12',
    vendorId: 'VND003',
    vendorName: 'Industrial Fasteners Corp',
    vendorAddressLine1: '88 Guindy Industrial Estate',
    vendorAddressLine2: 'Guindy',
    vendorCityPin: 'Chennai - 600032',
    vendorGstin: '33AABCI5678K1Z9',
    vendorContact: 'Anil Gupta',
    vendorEmail: 'sales@indfasteners.com',
    enquiryId: 'ENQ-002',
    projectId: 'PRJ002',
    workOrderNo: 'WO-2026-005',
    status: 'Sent',
    deliveryDate: '2026-03-28',
    deliveryTerms: 'Ex-Factory with insured transport',
    paymentTerms: '15 Days credit',
    dispatchTo: 'DEEPIKA BUILTECH ENGINEERING SITE\nCold Storage Facility Chennai\nGSTIN: 33ABCDE1234F1Z5',
    remarks: 'High-tensile Grade 8.8 bolts',
    reference: 'Ref: IFC-Q-2026',
    freightCharges: '1200',
    loadingCharges: '0',
    loadingChargesGst: '0',
    unloadingCharges: '0',
    weighingCharges: '0',
    taxType: 'Intra-State',
    items: [
      {
        itemCode: 'MAT005',
        itemName: 'HIGH-TENSILE BOLTS M20',
        qty: 300,
        unit: 'Nos',
        rate: 48,
        gst: 18,
        total: 14400
      }
    ]
  },
  {
    _id: 'po_026',
    id: 'PO-026',
    date: '2026-03-15',
    vendorId: 'VND004',
    vendorName: 'Apex Panels Ltd',
    vendorAddressLine1: 'Phase III, Balanagar Industrial Complex',
    vendorAddressLine2: 'Balanagar',
    vendorCityPin: 'Hyderabad - 500037',
    vendorGstin: '36AAACA9012N1Z8',
    vendorContact: 'Sanjay Dutt',
    vendorEmail: 'sanjay@apexpanels.in',
    enquiryId: 'ENQ-002',
    projectId: 'PRJ002',
    workOrderNo: 'WO-2026-006',
    status: 'Partial',
    deliveryDate: '2026-03-30',
    deliveryTerms: 'Direct site unloading',
    paymentTerms: '50% advance, balance on delivery',
    dispatchTo: 'DEEPIKA BUILTECH ENGINEERING SITE\nCold Storage Facility Chennai\nGSTIN: 33ABCDE1234F1Z5',
    remarks: 'Thermal insulation certified panels',
    reference: 'Ref: APEX/2026/880',
    freightCharges: '4000',
    loadingCharges: '800',
    loadingChargesGst: '18',
    unloadingCharges: '1200',
    weighingCharges: '0',
    taxType: 'Inter-State',
    items: [
      {
        itemCode: 'MAT006',
        itemName: 'PUFF PANELS 50MM',
        qty: 80,
        unit: 'Sqmt',
        rate: 780,
        gst: 18,
        total: 62400
      }
    ]
  }
];

export const initialGRNs = [
  {
    _id: 'grn_001',
    id: 'GRN-2026-001',
    grnDate: '2026-03-18',
    poId: 'PO-023',
    poRef: 'PO-023',
    vendorId: 'VND001',
    vendorName: 'Tata Steel Distribution',
    vehicleNo: 'KA-01-AB-1234',
    driverName: 'Ramesh K',
    dcNo: 'DC-TATA-8821',
    invoiceNo: 'INV-2026-901',
    receivedBy: 'Store Team Lead',
    remarks: 'Material inspected and unloaded in Bay 1',
    freightCharges: '5000',
    loadingCharges: '1500',
    loadingChargesGst: '18',
    unloadingCharges: '0',
    weighingCharges: '500',
    status: 'Completed',
    items: [
      {
        materialId: 'MAT001',
        name: 'TMT Steel Rebars Fe550',
        orderedQty: 20,
        receivedQty: 20,
        acceptedQty: 20,
        rejectedQty: 0,
        unit: 'MT',
        unitPrice: 53500,
        gst: 18
      }
    ]
  },
  {
    _id: 'grn_002',
    id: 'GRN-2026-002',
    grnDate: '2026-03-20',
    poId: 'PO-024',
    poRef: 'PO-024',
    vendorId: 'VND002',
    vendorName: 'Ultratech Cement Agency',
    vehicleNo: 'MH-04-CD-5678',
    driverName: 'Suresh P',
    dcNo: 'DC-UTC-4421',
    invoiceNo: 'INV-2026-442',
    receivedBy: 'Store Team Lead',
    remarks: 'Stored in covered cement godown',
    freightCharges: '3000',
    loadingCharges: '0',
    loadingChargesGst: '0',
    unloadingCharges: '1000',
    weighingCharges: '0',
    status: 'Completed',
    items: [
      {
        materialId: 'MAT002',
        name: 'OPC 53 Grade Cement',
        orderedQty: 500,
        receivedQty: 500,
        acceptedQty: 500,
        rejectedQty: 0,
        unit: 'Bags',
        unitPrice: 430,
        gst: 28
      }
    ]
  }
];

export const initialIssues = [
  {
    _id: 'iss_001',
    id: 'ISS-2026-001',
    issueDate: '2026-03-19',
    projectId: 'PRJ001',
    workOrderNo: 'WO-2026-001',
    issuedTo: 'M. Kumar (Site Engineer)',
    purpose: 'Foundation casting Block A columns',
    totalCost: 267500,
    status: 'Issued',
    items: [
      {
        materialId: 'MAT001',
        name: 'TMT Steel Rebars Fe550',
        qty: 5,
        unit: 'MT',
        rate: 53500
      }
    ]
  },
  {
    _id: 'iss_002',
    id: 'ISS-2026-002',
    issueDate: '2026-03-21',
    projectId: 'PRJ002',
    workOrderNo: 'WO-2026-005',
    issuedTo: 'Rajesh V (Supervisor)',
    purpose: 'Roof truss framing assembly',
    totalCost: 14400,
    status: 'Issued',
    items: [
      {
        materialId: 'MAT005',
        name: 'High-Tensile Bolts M20',
        qty: 300,
        unit: 'Nos',
        rate: 48
      }
    ]
  }
];

export const initialTools = [
  {
    _id: 'tol_001',
    id: 'TOL001',
    name: 'Heavy Duty Rotary Hammer Drill 800W',
    category: 'Power Tools',
    totalQty: 8,
    availableQty: 6,
    repairQty: 1
  },
  {
    _id: 'tol_002',
    id: 'TOL002',
    name: 'Laser Level Meter 360 Degree',
    category: 'Survey & Measurement',
    totalQty: 5,
    availableQty: 4,
    repairQty: 0
  },
  {
    _id: 'tol_003',
    id: 'TOL003',
    name: 'Inverter Arc Welding Machine 250A',
    category: 'Welding Equipment',
    totalQty: 6,
    availableQty: 4,
    repairQty: 1
  },
  {
    _id: 'tol_004',
    id: 'TOL004',
    name: 'Concrete Vibrator Needle 2HP',
    category: 'Heavy Construction',
    totalQty: 4,
    availableQty: 3,
    repairQty: 1
  },
  {
    _id: 'tol_005',
    id: 'TOL005',
    name: 'Hydraulic Crimping Tool Set',
    category: 'Hand Tools',
    totalQty: 10,
    availableQty: 9,
    repairQty: 0
  }
];

export const initialToolIssues = [
  {
    _id: 'tli_001',
    id: 'TLI-001',
    toolId: 'TOL001',
    toolName: 'Heavy Duty Rotary Hammer Drill 800W',
    qty: 1,
    issuedTo: 'Arun Kumar (Technician)',
    projectId: 'PRJ001',
    issueDate: '2026-03-15',
    expectedReturnDate: '2026-03-25',
    status: 'Issued'
  },
  {
    _id: 'tli_002',
    id: 'TLI-002',
    toolId: 'TOL003',
    toolName: 'Inverter Arc Welding Machine 250A',
    qty: 1,
    issuedTo: 'K. Selvam (Welder)',
    projectId: 'PRJ002',
    issueDate: '2026-03-16',
    expectedReturnDate: '2026-03-23',
    status: 'Returned'
  }
];

export const initialEmergencyDCs = [
  {
    _id: 'edc_001',
    id: 'EDC-0001',
    dcDate: '2026-03-14',
    dcNo: 'EDC-LOCAL-091',
    projectId: 'PRJ001',
    projectName: 'Smart Logistics Warehouse A',
    localVendorName: 'Sri Balaji Hardware & Electricals',
    localVendorPhone: '+91 99887 76655',
    localVendorAddress: 'Main Road, Near Site Gate 2',
    emergencyReason: 'Urgent coupler replacement for batching plant breakdown during slab casting',
    purchasedBy: 'Site In-Charge',
    approvedBy: 'Deepika Builtech Admin',
    totalAmount: 8450,
    paymentMode: 'Cash',
    billAttached: true,
    status: 'Approved',
    remarks: 'Critical repair completed on time',
    items: [
      { itemName: 'Hydraulic Hose Pipe 1/2 inch', qty: 2, unit: 'Nos', rate: 2200, total: 4400 },
      { itemName: 'Heavy Duty Hose Couplers', qty: 4, unit: 'Nos', rate: 750, total: 3000 },
      { itemName: 'Thread Sealant Paste & Tape', qty: 3, unit: 'Nos', rate: 350, total: 1050 }
    ]
  },
  {
    _id: 'edc_002',
    id: 'EDC-0002',
    dcDate: '2026-03-18',
    dcNo: 'EDC-LOCAL-092',
    projectId: 'PRJ002',
    projectName: 'Cold Storage Facility Chennai',
    localVendorName: 'Chennai Fasteners & Safety Store',
    localVendorPhone: '+91 94441 22334',
    localVendorAddress: 'GST Road, Tambaram, Chennai',
    emergencyReason: 'Safety harness lanyards replacement required immediately for scaffolding inspection',
    purchasedBy: 'Safety Officer',
    approvedBy: '',
    totalAmount: 4200,
    paymentMode: 'UPI',
    billAttached: true,
    status: 'Pending Approval',
    remarks: 'Required for height work audit',
    items: [
      { itemName: 'Shock Absorbing Safety Lanyards', qty: 3, unit: 'Nos', rate: 1400, total: 4200 }
    ]
  }
];
