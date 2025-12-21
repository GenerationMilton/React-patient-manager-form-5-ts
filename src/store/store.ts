import { create } from "zustand"
import type { DraftPatient, Patient } from "../types"

//type of patient
type PatientState = {
    patients: Patient[]
    //state
    addPatient: (data: DraftPatient) => void
}

//Zustand Store
export const usePatientStore = create<PatientState>(() => ({
    patients: [],
    //functions
    addPatient: (data) => {
        console.log(data)
    }
}))