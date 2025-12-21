import { create } from "zustand"
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import type { DraftPatient, Patient } from "../types"

//type of patient
type PatientState = {
    patients: Patient[]
    //state
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
}
const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuidv4() }
}

//Zustand Store
export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patients: [],
        //to update form
        activeId:'',
        //functions that modifies the state
        addPatient: (data) => {
            
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id )
            }))
        },
        getPatientById:(id)=>{
            set(()=> ({
                activeId: id
            }))
        }
    })
))