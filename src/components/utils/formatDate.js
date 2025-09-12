// src/helpers/formatDate.js
import { Timestamp } from "firebase/firestore"

export function formatDate(value, options = {}) {
    if (!value) return ""

    let date

    // Kalau Firestore Timestamp
    if (value instanceof Timestamp) {
        date = value.toDate()
    } else if (value instanceof Date) {
        date = value
    } else if (typeof value === "number") {
        date = new Date(value)
    } else if (typeof value === "string") {
        date = new Date(value)
    } else {
        return value
    }

    // Default format pakai toLocaleDateString
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options
    })
}
