export interface Animal {
    animal_id: number
    animal_name: string
    animal_born: string
    owner_id: number
    at_id: number
    animal_type: AnimalType
}

export interface AnimalType {
    at_id: number
    at_description: string
}

export interface AnimalAddRequest {
    animal_name: string
    animal_born: string
    owner_id: number
    at_id: number
}
