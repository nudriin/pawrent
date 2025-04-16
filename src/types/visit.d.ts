export interface Drug {
    drug_id: number
    drug_name: string
    drug_usage: string
}

export interface VisitDrug {
    id: number
    visit_id: number
    drug_id: number
    visit_drug_dose: string
    visit_drug_frequency: string
    visit_drug_qtysupplied: number
    drug: Drug
}

export interface Animal {
    animal_id: number
    animal_name: string
    animal_born: string
    owner_id: number
    at_id: number
}

export interface Visit {
    visit_id: number
    visit_date_time: string
    visit_notes: string
    animal_id: number
    vet_id: number
    from_visit_id: number | null
    visit_drug: VisitDrug[]
    animal: Animal
}

export interface AnimalVisit {
    visit_id: number
    visit_date_time: string // or Date if you'll convert it
    visit_notes: string
    animal_id: number
    vet_id: number
    from_visit_id: number | null
    animal: {
        animal_name: string
    }
}

export interface VisitAddRequest {
    visit_date_time: string
    visit_notes: string
    animal_id: number
    vet_id: number
    from_visit_id?: string | null
}

export interface VisitEditRequest {
    visit_id: number
    visit_notes: string
}
