import { create } from "zustand"
import type { Patient } from "../types"

//type of patient
type PatientState = {
    patients: Patient[]
}

//Zustand Store
export const usePatientStore = create<PatientState>(() => ({
    patients: []
}))