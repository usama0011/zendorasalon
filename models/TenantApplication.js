import mongoose from "mongoose";
const { Schema } = mongoose;

const tenantApplicationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    receiveTextMessages: {
      type: Boolean,
      default: false,
    },
    services: {
      type: String,
      required: true,
    },
    industryExperience: {
      type: Number,
      required: true,
    },
    licenseInfo: {
      licenseDate: {
        type: Date,
        required: true,
      },
      isLicenseValid: {
        type: Boolean,
        default: false,
      },
      licenseNumber: {
        type: String,
        required: true,
      },
    },
    leaseTiming: {
      type: String,
      required: true,
    },
    hearAboutUs: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TenantApplication =
  mongoose.models.TenantApplication ||
  mongoose.model("TenantApplication", tenantApplicationSchema);

export default TenantApplication;
