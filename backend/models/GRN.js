import mongoose from 'mongoose';

const grnSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  grnDate: { type: String },
  poId: { type: String },
  poRef: { type: String },
  vendorId: { type: String },
  vendorName: { type: String },
  vehicleNo: { type: String },
  driverName: { type: String },
  dcNo: { type: String },
  invoiceNo: { type: String },
  receivedBy: { type: String },
  remarks: { type: String },
  freightCharges: { type: String, default: '0' },
  loadingCharges: { type: String, default: '0' },
  loadingChargesGst: { type: String, default: '0' },
  unloadingCharges: { type: String, default: '0' },
  weighingCharges: { type: String, default: '0' },
  items: { type: mongoose.Schema.Types.Mixed },
  status: { type: String, default: 'Completed' }
}, { timestamps: true });

export default mongoose.model('GRN', grnSchema);
