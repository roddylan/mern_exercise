import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        repCount: {
            type: Number,
            required: true
        },
        notes: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
)

export const Exercise = mongoose.model('Exercise', exerciseSchema)